// Sons: module de bruitages et d'ambiances synthétisés (Web Audio), sans fichier ni dépendance, hors ligne.
// Usage :
//   Sons.unlock();                 // après un geste (touche, clic) : reprend l'AudioContext
//   Sons.play("ding");             // bruitage ponctuel
//   Sons.play("sonnerie");         // boucle jusqu'à Sons.stop("sonnerie")
//   Sons.ambiance("espion");       // boucle d'ambiance ; Sons.stopAmbiance() pour la couper
//   Sons.muted = true;             // coupe tout (la touche M est gérée par la page, pas par ce module)
//   Sons.volume = 0.5;             // 0 à 1
//   Sons.duck(true);               // baisse l'ambiance à 20 % pendant une voix off ; duck(false) pour la rétablir
// Aucun son ne reprend un thème protégé : tout est généré à partir d'oscillateurs et de bruit.
var Sons = (function () {
  var ctx = null, master = null, ambBus = null, noiseBuf = null;
  var vol = 0.5, mute = false, ducked = false;
  var loops = {};            // bruitages en boucle actifs (nom -> { timer })
  var amb = null;            // ambiance active { name, gain, nodes, timers, dead }

  function ensure() {
    if (ctx) return ctx;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      master = ctx.createGain();
      master.connect(ctx.destination);
      ambBus = ctx.createGain();
      ambBus.connect(master);
      var len = ctx.sampleRate * 2, d;
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      d = noiseBuf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      applyGain();
    } catch (e) { ctx = null; }
    return ctx;
  }

  function applyGain() {
    if (!master) return;
    master.gain.setTargetAtTime(mute ? 0 : vol, ctx.currentTime, 0.03);
    ambBus.gain.setTargetAtTime(ducked ? 0.2 : 1, ctx.currentTime, 0.2);
  }

  function resume() {
    if (ctx && ctx.state === "suspended" && ctx.resume) { try { ctx.resume(); } catch (e) {} }
  }

  // ---- Briques de base --------------------------------------------------

  // Note : fréquence f, début t0 (secondes absolues), durée d, forme, volume v, glissando optionnel vers f2.
  function tone(f, t0, d, type, v, f2, dest, attack) {
    var o = ctx.createOscillator(), g = ctx.createGain(), a = attack || 0.012;
    o.type = type || "sine";
    o.frequency.setValueAtTime(f, t0);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + d);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0002), t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
    o.connect(g); g.connect(dest || master);
    o.start(t0); o.stop(t0 + d + 0.05);
    return o;
  }

  // Bruit filtré : type de filtre, fréquence de départ fa, fréquence d'arrivée fb (optionnelle), enveloppe attaque/durée.
  function noise(t0, d, ftype, fa, fb, v, q, dest, attack) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(), a = attack || 0.01;
    s.buffer = noiseBuf; s.loop = true;
    f.type = ftype; f.Q.value = q || 1;
    f.frequency.setValueAtTime(fa, t0);
    if (fb) f.frequency.exponentialRampToValueAtTime(fb, t0 + d);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0002), t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
    s.connect(f); f.connect(g); g.connect(dest || master);
    s.start(t0, Math.random() * 1.5); s.stop(t0 + d + 0.05);
  }

  // ---- Bruitages ponctuels : chaque fonction reçoit t = ctx.currentTime ------

  var SFX = {
    // Une salve de sonnerie (deux "trrr"), utilisée en boucle par "sonnerie".
    "sonnerie": function (t) {
      for (var b = 0; b < 2; b++) {
        var t1 = t + b * 0.55, g = ctx.createGain(), o1 = ctx.createOscillator(), o2 = ctx.createOscillator();
        o1.type = "sine"; o1.frequency.value = 1180;
        o2.type = "sine"; o2.frequency.value = 1480;
        g.gain.setValueAtTime(0, t1);
        for (var k = 0; k < 16; k++) {
          g.gain.setValueAtTime(k % 2 ? 0 : 0.12, t1 + k * 0.026);
        }
        g.gain.setValueAtTime(0, t1 + 0.42);
        o1.connect(g); o2.connect(g); g.connect(master);
        o1.start(t1); o2.start(t1); o1.stop(t1 + 0.45); o2.stop(t1 + 0.45);
      }
    },
    "decroche": function (t) {
      noise(t, 0.03, "highpass", 2500, 0, 0.25, 1);
      tone(320, t + 0.02, 0.14, "sine", 0.25, 160);
      noise(t + 0.12, 0.05, "bandpass", 1200, 0, 0.12, 2);
    },
    "bip": function (t) {
      tone(1350 + Math.random() * 120, t, 0.06, "sine", 0.14);
    },
    "transmission": function (t) {
      noise(t, 0.4, "bandpass", 1800, 2600, 0.12, 0.8, null, 0.03);
      noise(t + 0.05, 0.25, "highpass", 4000, 0, 0.05, 0.5);
      tone(1000, t + 0.42, 0.07, "sine", 0.12);
    },
    "alarme": function (t) {
      for (var i = 0; i < 4; i++) tone(i % 2 ? 520 : 700, t + i * 0.2, 0.2, "triangle", 0.16);
    },
    "tampon": function (t) {
      tone(130, t, 0.22, "sine", 0.55, 48);
      noise(t, 0.09, "lowpass", 900, 0, 0.3, 0.7);
      noise(t + 0.01, 0.04, "highpass", 3000, 0, 0.08, 1);
    },
    "sonar": function (t) {
      tone(1250, t, 0.9, "sine", 0.18, 1220, null, 0.005);
      tone(1250, t + 0.28, 0.9, "sine", 0.07, 1220, null, 0.005);
    },
    "jingle-depart": function (t) {
      tone(392, t, 0.2, "triangle", 0.22);
      tone(523, t + 0.16, 0.2, "triangle", 0.22);
      tone(659, t + 0.32, 0.7, "triangle", 0.26);
      tone(1318, t + 0.32, 0.5, "sine", 0.05);
    },
    "atterrissage": function (t) {
      tone(85, t, 0.7, "sine", 0.7, 34);
      tone(55, t + 0.03, 0.6, "sine", 0.45, 30);
      noise(t, 0.5, "lowpass", 400, 80, 0.4, 0.7);
    },
    "tic": function (t) {
      tone(1900 + Math.random() * 500, t, 0.03, "triangle", 0.09);
    },
    "accord": function (t) {
      var f = [523, 659, 784, 1047], i;
      for (i = 0; i < f.length; i++) tone(f[i], t + i * 0.03, 1.5, "triangle", 0.13);
      tone(262, t, 1.5, "sine", 0.12);
    },
    "ding": function (t) {
      tone(880, t, 0.7, "sine", 0.22);
      tone(1760, t, 0.5, "sine", 0.08);
      tone(2637, t, 0.25, "sine", 0.03);
    },
    "buzz": function (t) {
      var i, o, f, g;
      for (i = 0; i < 2; i++) {
        o = ctx.createOscillator(); f = ctx.createBiquadFilter(); g = ctx.createGain();
        o.type = "sawtooth"; o.frequency.value = 150 - i * 25;
        f.type = "lowpass"; f.frequency.value = 500;
        g.gain.setValueAtTime(0.0001, t + i * 0.2);
        g.gain.exponentialRampToValueAtTime(0.1, t + i * 0.2 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.2 + 0.18);
        o.connect(f); f.connect(g); g.connect(master);
        o.start(t + i * 0.2); o.stop(t + i * 0.2 + 0.25);
      }
    },
    "carillon": function (t) {
      var N = [1047, 1175, 1319, 1568, 1760, 2093, 2349, 2637, 3136], i, f, at;
      for (i = 0; i < 14; i++) {
        f = N[Math.floor(Math.random() * N.length)];
        at = t + i * 0.07 + Math.random() * 0.04;
        tone(f, at, 0.9, "sine", 0.07);
        tone(f * 2.76, at, 0.3, "sine", 0.015);
      }
    },
    "scratch": function (t) {
      noise(t, 0.28, "bandpass", 3200, 500, 0.3, 2.5, null, 0.01);
      tone(900, t, 0.25, "sawtooth", 0.06, 90);
      noise(t + 0.28, 0.04, "highpass", 2000, 0, 0.1, 1);
    },
    "souffle-vaisseau": function (t) {
      noise(t, 2.6, "lowpass", 250, 700, 0.35, 0.8, null, 1.0);
      noise(t + 0.2, 2.4, "bandpass", 500, 300, 0.1, 1.5, null, 1.0);
      tone(52, t, 2.6, "sine", 0.18, 48, null, 1.0);
    },
    "bip-console": function (t) {
      tone(1760, t, 0.07, "square", 0.04);
      tone(2349, t + 0.1, 0.09, "square", 0.04);
    },
    "fanfare": function (t) {
      var seq = [[523, 0], [659, 0.16], [784, 0.32], [1047, 0.48], [784, 0.72], [1047, 0.88]], i;
      var lp = ctx.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 3000; lp.connect(master);
      for (i = 0; i < seq.length; i++) tone(seq[i][0], t + seq[i][1], 0.24, "sawtooth", 0.06, 0, lp);
      var ch = [523, 659, 784, 1047];
      for (i = 0; i < ch.length; i++) {
        tone(ch[i], t + 1.1, 1.5, "sawtooth", 0.05, 0, lp);
        tone(ch[i], t + 1.1, 1.5, "triangle", 0.1);
      }
    },
    "pop-confettis": function (t) {
      for (var i = 0; i < 3; i++) {
        var at = t + i * 0.09 + Math.random() * 0.03;
        noise(at, 0.1, "highpass", 1800, 0, 0.22, 0.8, null, 0.003);
        tone(320, at, 0.1, "sine", 0.18, 90, null, 0.003);
      }
      noise(t + 0.25, 0.5, "highpass", 6000, 0, 0.04, 0.5, null, 0.1);
    }
  };

  // Bruitages qui se répètent jusqu'à Sons.stop(nom) : nom -> période en ms.
  var LOOP_PERIOD = { "sonnerie": 2600 };

  // ---- Ambiances (boucles synthétisées, sans couture) -------------------------

  function ambNode(a, n) { a.nodes.push(n); return n; }
  function ambTimer(a, fn, ms) {
    var tick = function () {
      if (a.dead) return;
      try { fn(); } catch (e) {}
      a.timers.push(setTimeout(tick, typeof ms === "function" ? ms() : ms));
    };
    a.timers.push(setTimeout(tick, typeof ms === "function" ? ms() : ms));
  }
  function ambOsc(a, type, f, v, dest) {
    var o = ambNode(a, ctx.createOscillator()), g = ctx.createGain();
    o.type = type; o.frequency.value = f; g.gain.value = v;
    o.connect(g); g.connect(dest); o.start();
    return o;
  }
  function ambLfo(a, rate, depth, param) {
    var o = ambNode(a, ctx.createOscillator()), g = ctx.createGain();
    o.frequency.value = rate; g.gain.value = depth;
    o.connect(g); g.connect(param); o.start();
  }
  function ambNoise(a, ftype, f, v, dest) {
    var s = ambNode(a, ctx.createBufferSource()), fl = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; s.loop = true;
    fl.type = ftype; fl.frequency.value = f; g.gain.value = v;
    s.connect(fl); fl.connect(g); g.connect(dest); s.start();
    return fl;
  }

  var AMBIANCES = {
    // Nappe grave et discrète, pouls lent, rares pings hauts.
    "espion": function (a, bus) {
      var lp = ctx.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 320; lp.Q.value = 2; lp.connect(bus);
      ambOsc(a, "sawtooth", 55, 0.07, lp);
      ambOsc(a, "sawtooth", 55.45, 0.07, lp);
      ambOsc(a, "sine", 82.4, 0.08, lp);
      ambLfo(a, 0.07, 140, lp.frequency);
      ambTimer(a, function () {            // pouls : tous les 1,6 s
        var t = ctx.currentTime;
        tone(110, t, 0.35, "sine", 0.1, 70, bus);
      }, 1600);
      ambTimer(a, function () {            // ping discret, espacé et irrégulier
        var t = ctx.currentTime;
        tone(1480, t, 1.4, "sine", 0.025, 1470, bus, 0.01);
      }, function () { return 6000 + Math.random() * 6000; });
    },
    // Drone sombre, souffle lent, aucune mélodie : seulement des fréquences graves proches.
    "espace": function (a, bus) {
      var lp = ctx.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 260; lp.Q.value = 1.5; lp.connect(bus);
      ambOsc(a, "sawtooth", 41.2, 0.07, lp);
      ambOsc(a, "sawtooth", 41.9, 0.06, lp);
      ambOsc(a, "sine", 61.7, 0.07, lp);
      ambOsc(a, "sine", 123.5, 0.02, lp);
      ambLfo(a, 0.05, 120, lp.frequency);
      var nf = ambNoise(a, "lowpass", 180, 0.12, bus);
      ambLfo(a, 0.09, 90, nf.frequency);
      ambTimer(a, function () {            // grondement lointain, rare
        noise(ctx.currentTime, 3, "lowpass", 120, 60, 0.12, 0.7, bus, 1.2);
      }, function () { return 9000 + Math.random() * 8000; });
    },
    // Célesta synthétique : notes pentatoniques aléatoires (pas de motif reconnaissable) sur une nappe douce.
    "magie": function (a, bus) {
      var N = [523, 587, 659, 784, 880, 1047, 1175, 1319, 1568], last = -1;
      var pad = ctx.createGain();
      pad.gain.value = 0.5; pad.connect(bus);
      ambOsc(a, "sine", 131, 0.05, pad);
      ambOsc(a, "sine", 196, 0.035, pad);
      ambOsc(a, "sine", 262.6, 0.03, pad);
      ambTimer(a, function () {
        var i, f, t = ctx.currentTime;
        do { i = Math.floor(Math.random() * N.length); } while (i === last);
        last = i; f = N[i];
        tone(f, t, 1.8, "sine", 0.07, 0, bus, 0.004);
        tone(f * 4, t, 0.35, "sine", 0.012, 0, bus, 0.004);
        tone(f * 2.01, t, 0.9, "sine", 0.02, 0, bus, 0.004);
      }, function () { return 380 + Math.random() * 520; });
    }
  };

  function killAmbiance(a, fade) {
    if (!a) return;
    a.dead = true;
    var i, t = ctx.currentTime;
    for (i = 0; i < a.timers.length; i++) clearTimeout(a.timers[i]);
    try {
      a.gain.gain.cancelScheduledValues(t);
      a.gain.gain.setValueAtTime(a.gain.gain.value, t);
      a.gain.gain.linearRampToValueAtTime(0, t + fade);
    } catch (e) {}
    setTimeout(function () {
      for (var k = 0; k < a.nodes.length; k++) { try { a.nodes[k].stop(); } catch (e) {} }
      try { a.gain.disconnect(); } catch (e) {}
    }, fade * 1000 + 120);
  }

  // ---- API publique -----------------------------------------------------------

  var api = {
    unlock: function () {
      if (!ensure()) return;
      resume();
    },
    play: function (name) {
      if (mute || !SFX[name] || !ensure()) return;
      resume();
      try {
        if (LOOP_PERIOD[name]) {
          if (loops[name]) return;             // déjà en cours
          var run = function () { if (!loops[name]) return; SFX[name](ctx.currentTime + 0.02); loops[name].timer = setTimeout(run, LOOP_PERIOD[name]); };
          loops[name] = { timer: null };
          run();
        } else {
          SFX[name](ctx.currentTime + 0.01);
        }
      } catch (e) {}
    },
    // stop("sonnerie") arrête cette boucle ; stop() sans argument arrête toutes les boucles.
    stop: function (name) {
      var k;
      if (name === undefined) { for (k in loops) { if (loops.hasOwnProperty(k)) api.stop(k); } return; }
      if (loops[name]) { clearTimeout(loops[name].timer); delete loops[name]; }
    },
    ambiance: function (name) {
      if (!AMBIANCES[name] || !ensure()) return;
      resume();
      if (amb && amb.name === name && !amb.dead) return;
      if (amb) killAmbiance(amb, 1);
      var a = { name: name, gain: ctx.createGain(), nodes: [], timers: [], dead: false };
      a.gain.gain.setValueAtTime(0, ctx.currentTime);
      a.gain.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 2);   // niveau d'ambiance sous les bruitages
      a.gain.connect(ambBus);
      amb = a;
      try { AMBIANCES[name](a, a.gain); } catch (e) {}
    },
    stopAmbiance: function () {
      if (ctx && amb) { killAmbiance(amb, 1); amb = null; }
    },
    // Voix off : duck(true) baisse l'ambiance à 20 %, duck(false) la rétablit.
    duck: function (on) { ducked = !!on; if (ctx) applyGain(); },
    sounds: function () { var k, r = []; for (k in SFX) { if (SFX.hasOwnProperty(k)) r.push(k); } return r; },
    ambiances: function () { var k, r = []; for (k in AMBIANCES) { if (AMBIANCES.hasOwnProperty(k)) r.push(k); } return r; }
  };

  Object.defineProperty(api, "volume", {
    enumerable: true,
    get: function () { return vol; },
    set: function (v) { v = Number(v); if (isNaN(v)) return; vol = v < 0 ? 0 : v > 1 ? 1 : v; if (ctx) applyGain(); }
  });
  Object.defineProperty(api, "muted", {
    enumerable: true,
    get: function () { return mute; },
    set: function (m) { mute = !!m; if (mute) api.stop(); if (ctx) applyGain(); }
  });

  return api;
})();

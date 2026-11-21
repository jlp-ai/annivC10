// Time-jump vortex transition. Usage: Vortex.play({ duration: 2600, onMid: fn, onDone: fn })
// onMid fires at the peak, when the screen is fully covered: swap the content there.
// Offline, no dependency. Sound is synthesized with Web Audio (Vortex.muted = true to silence).
var Vortex = (function () {
  var running = false;
  var audio = null;

  function ease(t) { return t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t); }

  function whoosh(seconds) {
    if (Vortex.muted) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audio) audio = new AC();
      if (audio.state === "suspended") audio.resume();
      var t0 = audio.currentTime, d = seconds;
      // Noise burst through a sweeping band-pass filter.
      var len = Math.floor(audio.sampleRate * d), buf = audio.createBuffer(1, len, audio.sampleRate), data = buf.getChannelData(0);
      for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
      var src = audio.createBufferSource(); src.buffer = buf;
      var bp = audio.createBiquadFilter(); bp.type = "bandpass"; bp.Q.value = 2.5;
      bp.frequency.setValueAtTime(250, t0);
      bp.frequency.exponentialRampToValueAtTime(2800, t0 + d * 0.5);
      bp.frequency.exponentialRampToValueAtTime(300, t0 + d);
      var g = audio.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.5, t0 + d * 0.45);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
      src.connect(bp); bp.connect(g); g.connect(audio.destination); src.start(t0);
      // Rising then falling tone for the "time warp" feel.
      var o = audio.createOscillator(), og = audio.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(110, t0);
      o.frequency.exponentialRampToValueAtTime(880, t0 + d * 0.5);
      o.frequency.exponentialRampToValueAtTime(90, t0 + d);
      og.gain.setValueAtTime(0.0001, t0);
      og.gain.exponentialRampToValueAtTime(0.18, t0 + d * 0.5);
      og.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
      o.connect(og); og.connect(audio.destination); o.start(t0); o.stop(t0 + d);
    } catch (e) {}
  }

  function play(opts) {
    opts = opts || {};
    if (running) return;
    running = true;
    var duration = opts.duration || 5200;
    var cv = document.createElement("canvas");
    cv.style.cssText = "position:fixed;left:0;top:0;width:100%;height:100%;z-index:100;pointer-events:none";
    var W = cv.width = window.innerWidth, H = cv.height = window.innerHeight;
    document.body.appendChild(cv);
    var ctx = cv.getContext("2d");
    var cx = W / 2, cy = H / 2, R = Math.sqrt(cx * cx + cy * cy) * 1.05;
    var COLORS = ["#e8142b", "#ffd23f", "#fff1d6", "#ff6a3d"];
    var ARMS = 7, midDone = false, start = null;
    whoosh(duration / 1000);

    function frame(now) {
      if (start === null) start = now;
      var p = opts.freezeAt !== undefined ? opts.freezeAt : (now - start) / duration;
      if (p >= 1) {
        document.body.removeChild(cv);
        running = false;
        if (opts.onDone) opts.onDone();
        return;
      }
      if (!midDone && p >= 0.5) { midDone = true; if (opts.onMid) opts.onMid(); }

      // Cover envelope: fade in, fully opaque around the middle, fade out.
      var cover = p < 0.5 ? ease(p / 0.4) : ease((1 - p) / 0.4);
      var spin = p * 7 + p * p * 9;            // gentle, accelerating rotation
      var pull = p * 2.2;                       // inward flow

      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = cover;
      var bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      bg.addColorStop(0, "#fff6c9"); bg.addColorStop(0.08, "#ffd23f"); bg.addColorStop(0.35, "#c4101f"); bg.addColorStop(1, "#1a0205");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      // Spiral arms: continuous swirling bands, thicker toward the edge.
      ctx.lineCap = "round";
      for (var a = 0; a < ARMS; a++) {
        var base = a * Math.PI * 2 / ARMS;
        ctx.strokeStyle = COLORS[a % COLORS.length];
        var px = cx, py = cy;
        for (var k = 1; k <= 140; k++) {
          var t = k / 140;                                // 0 = center, 1 = edge
          var rad = R * Math.pow(t, 1.6);
          var ang = base + spin + t * 4.2 + Math.sin(pull * 2 + t * 6) * 0.1;
          var x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad * 0.92;
          ctx.globalAlpha = cover;
          ctx.lineWidth = 1 + t * t * 26; ctx.lineJoin = "round";
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
          px = x; py = y;
        }
      }

      // Tunnel rings rushing outward.
      ctx.lineWidth = 3;
      for (var r = 0; r < 9; r++) {
        var tr = ((r / 9) + p * 1.8) % 1;
        ctx.globalAlpha = cover * (1 - tr) * 0.8;
        ctx.strokeStyle = r % 2 ? "#ffd23f" : "#fff1d6";
        ctx.beginPath(); ctx.ellipse(cx, cy, R * tr * tr, R * tr * tr * 0.92, spin * 0.2, 0, 6.2832); ctx.stroke();
      }

      // White flash at the peak.
      var flash = Math.max(0, 1 - Math.abs(p - 0.5) / 0.1);
      if (flash > 0) { ctx.globalAlpha = flash * 0.9; ctx.fillStyle = "#fffbe8"; ctx.fillRect(0, 0, W, H); }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  return { play: play, muted: false, isRunning: function () { return running; } };
})();

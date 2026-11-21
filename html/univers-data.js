// Data for the five universes: names, rooms and original vector illustrations (offline).
// A file images/univers-N.jpg, if present, replaces the drawing (see portails.html).
// Rooms are proposals, see materiel/plan-appartement.md.
  var UNIVERS_ART = [
    // 1. Harry Potter: castle, moon, lightning bolt
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#1b1450"/>
      <circle cx="132" cy="24" r="12" fill="#ffe14d"/>
      <circle cx="20" cy="14" r="1.6" fill="#fff"/><circle cx="52" cy="26" r="1.2" fill="#fff"/><circle cx="96" cy="12" r="1.5" fill="#fff"/><circle cx="146" cy="58" r="1.2" fill="#fff"/><circle cx="12" cy="52" r="1.2" fill="#fff"/>
      <polygon points="28,18 40,18 34,32 44,32 24,58 30,38 20,38" fill="#ffe14d"/>
      <rect x="30" y="84" width="100" height="36" fill="#0d0a2e"/>
      <rect x="72" y="45" width="16" height="75" fill="#0d0a2e"/><polygon points="70,45 90,45 80,20" fill="#0d0a2e"/>
      <rect x="44" y="62" width="14" height="58" fill="#0d0a2e"/><polygon points="42,62 60,62 51,42" fill="#0d0a2e"/>
      <rect x="102" y="58" width="14" height="62" fill="#0d0a2e"/><polygon points="100,58 118,58 109,36" fill="#0d0a2e"/>
      <rect x="77" y="58" width="6" height="9" fill="#ffe14d"/><rect x="48" y="74" width="5" height="8" fill="#ffe14d"/><rect x="106" y="72" width="5" height="8" fill="#ffe14d"/><rect x="62" y="96" width="6" height="9" fill="#ffe14d"/><rect x="92" y="96" width="6" height="9" fill="#ffe14d"/>
    </svg>`,
    // 2. Musketeers: crossed swords, feathered hat
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#27388f"/>
      <rect x="74" y="0" width="12" height="120" fill="#ffffff" fill-opacity=".18"/><rect x="0" y="54" width="160" height="12" fill="#ffffff" fill-opacity=".18"/>
      <line x1="26" y1="108" x2="134" y2="34" stroke="#e9ecf5" stroke-width="5" stroke-linecap="round"/>
      <line x1="134" y1="108" x2="26" y2="34" stroke="#e9ecf5" stroke-width="5" stroke-linecap="round"/>
      <line x1="30" y1="92" x2="48" y2="110" stroke="#ffe14d" stroke-width="5" stroke-linecap="round"/>
      <line x1="130" y1="92" x2="112" y2="110" stroke="#ffe14d" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="80" cy="50" rx="46" ry="11" fill="#4a2c1a"/>
      <path d="M52 48 C52 20 108 20 108 48 Z" fill="#5d3b2c"/>
      <path d="M100 36 C130 6 150 24 126 44 C140 22 120 16 100 40 Z" fill="#ff2e93"/>
      <rect x="54" y="42" width="52" height="5" fill="#ffe14d"/>
    </svg>`,
    // 3. K-Pop Demon Hunters: microphone, stars, traditional hat
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#7a1fa8"/>
      <rect width="160" height="60" fill="#ff2e93" fill-opacity=".45"/>
      <circle cx="80" cy="44" r="19" fill="#eceef7"/><path d="M62 44 H98 M64 34 H96 M64 54 H96 M80 26 V62" stroke="#9aa0b8" stroke-width="2" fill="none"/>
      <rect x="73" y="62" width="14" height="38" rx="7" fill="#1c1030"/>
      <path d="M130 22 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z" fill="#ffe14d"/>
      <path d="M26 30 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z" fill="#19e3d0"/>
      <path d="M142 80 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#19e3d0"/>
      <ellipse cx="32" cy="94" rx="26" ry="8" fill="#14091f"/><ellipse cx="32" cy="86" rx="12" ry="12" fill="#14091f"/><rect x="20" y="76" width="24" height="12" fill="#14091f"/>
      <circle cx="132" cy="102" r="6" fill="#ffe14d"/><rect x="136" y="76" width="3" height="26" fill="#ffe14d"/><path d="M139 76 q9 3 9 12" fill="none" stroke="#ffe14d" stroke-width="3"/>
    </svg>`,
    // 4. Star Wars: space station, lightsaber, stars
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><radialGradient id="stationGrad" cx=".35" cy=".35"><stop offset="0" stop-color="#c9ccdb"/><stop offset="1" stop-color="#555a70"/></radialGradient></defs>
      <rect width="160" height="120" fill="#04050e"/>
      <circle cx="18" cy="16" r="1.4" fill="#fff"/><circle cx="48" cy="40" r="1" fill="#fff"/><circle cx="70" cy="12" r="1.5" fill="#fff"/><circle cx="146" cy="14" r="1.2" fill="#fff"/><circle cx="150" cy="96" r="1.4" fill="#fff"/><circle cx="30" cy="70" r="1.2" fill="#fff"/><circle cx="62" cy="100" r="1" fill="#fff"/><circle cx="120" cy="108" r="1.2" fill="#fff"/>
      <circle cx="104" cy="50" r="34" fill="url(#stationGrad)"/>
      <path d="M70 52 H138" stroke="#3b4054" stroke-width="3"/>
      <circle cx="116" cy="36" r="9" fill="#6b7088"/><circle cx="116" cy="36" r="3.5" fill="#3b4054"/>
      <line x1="20" y1="106" x2="82" y2="66" stroke="#3dff6b" stroke-width="8" stroke-linecap="round" stroke-opacity=".5"/>
      <line x1="26" y1="102" x2="82" y2="66" stroke="#3dff6b" stroke-width="5" stroke-linecap="round"/>
      <line x1="26" y1="102" x2="82" y2="66" stroke="#eafff0" stroke-width="2" stroke-linecap="round"/>
      <line x1="12" y1="112" x2="26" y2="103" stroke="#b9bccb" stroke-width="9" stroke-linecap="round"/>
    </svg>`,
    // 5. Montmartre: basilica on the hill at sunset
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="sunsetGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7a59"/><stop offset="1" stop-color="#ffd27a"/></linearGradient></defs>
      <rect width="160" height="120" fill="url(#sunsetGrad)"/>
      <circle cx="132" cy="30" r="13" fill="#fff3c4"/>
      <rect x="40" y="86" width="80" height="20" fill="#f6f0e4"/>
      <path d="M64 86 V62 Q80 18 96 62 V86 Z" fill="#fbf6ec"/><rect x="78" y="12" width="4" height="12" fill="#e8dfcd"/>
      <path d="M44 86 V70 Q52 46 60 70 V86 Z" fill="#fbf6ec"/><path d="M100 86 V70 Q108 46 116 70 V86 Z" fill="#fbf6ec"/>
      <path d="M72 86 V76 Q80 66 88 76 V86 Z" fill="#c97b5a"/>
      <rect x="0" y="106" width="160" height="14" fill="#3a2a4a"/>
      <rect x="36" y="100" width="88" height="3" fill="#e8dfcd"/><rect x="30" y="103" width="100" height="3" fill="#e8dfcd"/>
      <rect x="10" y="78" width="3" height="28" fill="#3a2a4a"/><circle cx="11.5" cy="76" r="4" fill="#ffe14d"/>
      <rect x="146" y="78" width="3" height="28" fill="#3a2a4a"/><circle cx="147.5" cy="76" r="4" fill="#ffe14d"/>
    </svg>`
  ];

var UNIVERS = [
  { name: "Monde des sorciers",         era: "Harry Potter",         room: "Le salon" },
  { name: "France des mousquetaires",   era: "XVIIe siècle",        room: "La chambre 2" },
  { name: "Chasseurs de démons",        era: "K-Pop Demon Hunters", room: "Le salon, devant la télé" },
  { name: "Galaxie lointaine",          era: "Star Wars",           room: "Le bureau" },
  { name: "Montmartre d'autrefois",     era: "Les titis",           room: "Dehors, autour de l'appartement" }
];

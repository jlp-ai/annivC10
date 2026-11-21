// Data for the five universes: names, rooms and original vector illustrations (offline).
// A file images/univers-N.jpg, if present, replaces the drawing (see aventure.html).
// Rooms are proposals, see materiel/plan-appartement.md.
// Illustration style: flat poster, palette red / black / yellow / cream, one accent colour per universe.
// Generic shapes only: no protected character or logo.
  var UNIVERS_ART = [
    // 1. Harry Potter: fairy-tale castle, moon, spark rain, cauldron
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#0e2a2e"/>
      <rect y="0" width="160" height="30" fill="#0b2226"/>
      <circle cx="124" cy="26" r="24" fill="#ffd23f" fill-opacity=".14"/>
      <circle cx="124" cy="26" r="17" fill="#fff1d6"/>
      <circle cx="119" cy="21" r="4" fill="#ffe9b8"/><circle cx="130" cy="32" r="3" fill="#ffe9b8"/><circle cx="131" cy="19" r="1.8" fill="#ffe9b8"/>
      <path d="M14 9 L14.84 11.16 L17 12 L14.84 12.84 L14 15 L13.16 12.84 L11 12 L13.16 11.16 Z" fill="#fff1d6"/>
      <path d="M40 24 L40.56 25.44 L42 26 L40.56 26.56 L40 28 L39.44 26.56 L38 26 L39.44 25.44 Z" fill="#fff1d6"/>
      <path d="M96 7.6 L96.672 9.328 L98.4 10 L96.672 10.672 L96 12.4 L95.328 10.672 L93.6 10 L95.328 9.328 Z" fill="#fff1d6"/>
      <path d="M62 6.2 L62.504 7.496 L63.8 8 L62.504 8.504 L62 9.8 L61.496 8.504 L60.2 8 L61.496 7.496 Z" fill="#fff1d6"/>
      <path d="M150 58 L150.56 59.44 L152 60 L150.56 60.56 L150 62 L149.44 60.56 L148 60 L149.44 59.44 Z" fill="#fff1d6"/>
      <path d="M10 48.2 L10.504 49.496 L11.8 50 L10.504 50.504 L10 51.8 L9.496 50.504 L8.2 50 L9.496 49.496 Z" fill="#fff1d6"/>
      <path d="M0 92 Q40 80 80 88 T160 84 V120 H0Z" fill="#0a1c1f"/>
      <g transform="translate(0 -4)">
      <g fill="#050b0c">
      <rect x="36" y="70" width="88" height="28"/>
      <rect x="70" y="40" width="20" height="34"/>
      <rect x="44" y="52" width="14" height="24"/>
      <rect x="102" y="48" width="14" height="28"/>
      <rect x="60" y="62" width="9" height="14"/>
      <rect x="91" y="60" width="9" height="16"/>
      <rect x="124" y="60" width="9" height="38"/>
      <rect x="27" y="62" width="9" height="36"/>
      </g>
      <rect x="38" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="46" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="54" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="62" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="70" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="78" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="86" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="94" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="102" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="110" y="67" width="4" height="4" fill="#050b0c"/>
      <rect x="118" y="67" width="4" height="4" fill="#050b0c"/>
      <g fill="#e8142b">
      <polygon points="67,41 93,41 80,14"/>
      <polygon points="41,53 61,53 51,28"/>
      <polygon points="99,49 119,49 109,22"/>
      <polygon points="58,63 71,63 64.5,48"/>
      <polygon points="89,61 102,61 95.5,46"/>
      <polygon points="122,61 135,61 128.5,46"/>
      <polygon points="25,63 38,63 31.5,48"/>
      </g>
      <g fill="#b30f21"><polygon points="80,14 93,41 84,41"/><polygon points="51,28 61,53 54,53"/><polygon points="109,22 119,49 112,49"/></g>
      <rect x="79.4" y="6" width="1.2" height="9" fill="#fff1d6"/><polygon points="80.6,6 90,9 80.6,12" fill="#ffd23f"/>
      <g fill="#ffd23f">
      <path d="M77 52 v-6 a3 3 0 0 1 6 0 v6z"/>
      <path d="M48 66 v-5 a2.6 2.6 0 0 1 5.2 0 v5z"/>
      <path d="M106 62 v-5 a2.6 2.6 0 0 1 5.2 0 v5z"/>
      <rect x="44" y="84" width="5" height="8"/><rect x="58" y="82" width="5" height="10"/><rect x="97" y="82" width="5" height="10"/><rect x="111" y="84" width="5" height="8"/>
      <path d="M75 98 v-9 a5 5 0 0 1 10 0 v9z"/>
      <rect x="61" y="67" width="4" height="6"/><rect x="94" y="65" width="4" height="7"/>
      </g>
      </g>
      <path d="M0 104 Q40 96 80 102 T160 100 V120 H0Z" fill="#061113"/>
      <line x1="18" y1="22" x2="15" y2="30" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="14" cy="33" r="1.2" fill="#fff1d6"/>
      <line x1="30" y1="40" x2="27" y2="48" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="26" cy="51" r="1.2" fill="#fff1d6"/>
      <line x1="52" y1="34" x2="49" y2="42" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="48" cy="45" r="1.2" fill="#fff1d6"/>
      <line x1="74" y1="58" x2="71" y2="66" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="70" cy="69" r="1.2" fill="#fff1d6"/>
      <line x1="22" y1="60" x2="19" y2="68" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="18" cy="71" r="1.2" fill="#fff1d6"/>
      <line x1="108" y1="44" x2="105" y2="52" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="104" cy="55" r="1.2" fill="#fff1d6"/>
      <line x1="140" y1="50" x2="137" y2="58" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="136" cy="61" r="1.2" fill="#fff1d6"/>
      <line x1="148" y1="74" x2="145" y2="82" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="144" cy="85" r="1.2" fill="#fff1d6"/>
      <line x1="12" y1="82" x2="9" y2="90" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="8" cy="93" r="1.2" fill="#fff1d6"/>
      <line x1="40" y1="14" x2="37" y2="22" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="36" cy="25" r="1.2" fill="#fff1d6"/>
      <line x1="86" y1="20" x2="83" y2="28" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="82" cy="31" r="1.2" fill="#fff1d6"/>
      <line x1="138" y1="14" x2="135" y2="22" stroke="#ffd23f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="134" cy="25" r="1.2" fill="#fff1d6"/>
      <ellipse cx="80" cy="119" rx="28" ry="4" fill="#000" fill-opacity=".45"/>
      <path d="M54 96 C52 118 64 121 80 121 C96 121 108 118 106 96 Z" fill="#111111"/>
      <path d="M60 104 C62 114 66 117 72 118" fill="none" stroke="#fff1d6" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>
      <path d="M54 96 C45 96 44 103 49 105" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
      <path d="M106 96 C115 96 116 103 111 105" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="80" cy="96" rx="27" ry="6" fill="#fff1d6"/>
      <ellipse cx="80" cy="96.5" rx="23" ry="4.2" fill="#2fe0a8"/>
      <circle cx="70" cy="88" r="5" fill="#2fe0a8"/><circle cx="84" cy="82" r="6.5" fill="#2fe0a8"/><circle cx="94" cy="90" r="4" fill="#2fe0a8"/><circle cx="78" cy="75" r="3" fill="#2fe0a8"/><circle cx="88" cy="70" r="2" fill="#2fe0a8"/>
      <circle cx="82" cy="80" r="1.8" fill="#fff1d6"/><circle cx="68" cy="86" r="1.4" fill="#fff1d6"/>
      <path d="M66 70.6 L66.952 73.048 L69.4 74 L66.952 74.952 L66 77.4 L65.048 74.952 L62.6 74 L65.048 73.048 Z" fill="#ffd23f"/>
      <path d="M98 75 L98.84 77.16 L101 78 L98.84 78.84 L98 81 L97.16 78.84 L95 78 L97.16 77.16 Z" fill="#ffd23f"/>
      <path d="M60 57.8 L60.616 59.384 L62.2 60 L60.616 60.616 L60 62.2 L59.384 60.616 L57.8 60 L59.384 59.384 Z" fill="#fff1d6"/>
      <rect x="3" y="3" width="154" height="114" rx="3" fill="none" stroke="#fff1d6" stroke-opacity=".6" stroke-width="1"/>
      </svg>`,
    // 2. Musketeers: feathered hat, crossed rapiers, fleur-de-lys
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
      <g id="rapier">
      <polygon points="14,-2 108,-0.7 112,0 108,0.7 14,2" fill="#fff1d6" stroke="#111" stroke-width=".7" stroke-linejoin="round"/>
      <line x1="16" y1="0" x2="106" y2="0" stroke="#bfc6e8" stroke-width=".8"/>
      <path d="M14 -9 Q4 -5 4 0 Q4 5 14 9 Z" fill="#ffd23f" stroke="#111" stroke-width="1"/>
      <rect x="12" y="-11" width="3.2" height="22" rx="1.4" fill="#ffd23f" stroke="#111" stroke-width="1"/>
      <rect x="-8" y="-2.4" width="12" height="4.8" rx="1.4" fill="#111"/>
      <circle cx="-10" cy="0" r="3.2" fill="#ffd23f" stroke="#111" stroke-width="1"/>
      </g>
      </defs>
      <rect width="160" height="120" fill="#1c3399"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(0 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(30 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(60 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(90 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(120 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(150 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(180 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(210 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(240 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(270 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(300 80 64)"/>
      <polygon points="80,64 -2,-60 36,-60" fill="#2a4bd7" transform="rotate(330 80 64)"/>
      <circle cx="80" cy="64" r="44" fill="#fff1d6" fill-opacity=".10"/>
      <circle cx="80" cy="64" r="44" fill="none" stroke="#ffd23f" stroke-width="1.6" stroke-dasharray="2 5" stroke-linecap="round"/>
      <rect y="104" width="160" height="16" fill="#111"/>
      <rect y="104" width="160" height="2.4" fill="#e8142b"/>
      <use href="#rapier" transform="translate(30 100) rotate(-35)"/>
      <use href="#rapier" transform="translate(130 100) rotate(-145)"/>
      <g transform="translate(80 98) scale(1.0)" fill="#ffd23f" stroke="#111" stroke-width="1" stroke-linejoin="round">
      <path d="M-3 4 C-14 -8 -22 2 -15 9 C-11 13 -5 11 -3 7 Z"/>
      <path d="M3 4 C14 -8 22 2 15 9 C11 13 5 11 3 7 Z"/>
      <path d="M0 -17 C7 -10 7 -2 0 6 C-7 -2 -7 -10 0 -17 Z"/>
      <rect x="-10" y="5" width="20" height="4" rx="1"/>
      <path d="M0 9 C4 12 4 15 0 19 C-4 15 -4 12 0 9 Z"/>
      </g>
      <ellipse cx="80" cy="50" rx="40" ry="9" fill="#111" stroke="#fff1d6" stroke-width="1.2"/>
      <path d="M56 49 C54 16 106 16 104 49 Z" fill="#111" stroke="#fff1d6" stroke-width="1.2" stroke-linejoin="round"/>
      <rect x="56" y="40" width="48" height="6" fill="#e8142b"/>
      <rect x="75" y="38.6" width="10" height="8.8" rx="1.4" fill="#ffd23f" stroke="#111" stroke-width="1"/>
      <rect x="78" y="41.4" width="4" height="3.2" fill="#111"/>
      <path d="M100 38 C122 12 148 20 138 42 C136 50 128 56 118 54 C132 48 134 34 124 30 C116 28 108 36 102 46 Z" fill="#fff1d6" stroke="#111" stroke-width="1" stroke-linejoin="round"/>
      <path d="M104 42 C118 28 130 28 134 38" fill="none" stroke="#e8142b" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M24 22 L25.12 24.88 L28 26 L25.12 27.12 L24 30 L22.88 27.12 L20 26 L22.88 24.88 Z" fill="#ffd23f"/>
      <path d="M138 80.6 L138.952 83.048 L141.4 84 L138.952 84.952 L138 87.4 L137.048 84.952 L134.6 84 L137.048 83.048 Z" fill="#ffd23f"/>
      <path d="M22 77.4 L22.728 79.272 L24.6 80 L22.728 80.728 L22 82.6 L21.272 80.728 L19.4 80 L21.272 79.272 Z" fill="#fff1d6"/>
      <rect x="3" y="3" width="154" height="114" rx="3" fill="none" stroke="#fff1d6" stroke-opacity=".6" stroke-width="1"/>
      </svg>`,
    // 3. K-Pop Demon Hunters: concert stage, microphone, spotlights, two groups
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#1b0814"/>
      <circle cx="80" cy="50" r="58" fill="#ff2e93" fill-opacity=".16"/>
      <circle cx="80" cy="50" r="42" fill="#ff2e93" fill-opacity=".18"/>
      <circle cx="80" cy="50" r="46" fill="none" stroke="#ffd23f" stroke-width="1.4" stroke-dasharray="1 6" stroke-linecap="round"/>
      <polygon points="6,0 24,0 70,96 34,96" fill="#fff1d6" fill-opacity=".20"/>
      <polygon points="154,0 136,0 90,96 126,96" fill="#fff1d6" fill-opacity=".20"/>
      <polygon points="52,0 68,0 82,96 70,96" fill="#ff2e93" fill-opacity=".30"/>
      <polygon points="108,0 92,0 78,96 90,96" fill="#ff2e93" fill-opacity=".30"/>
      <rect x="0" y="0" width="160" height="6" fill="#111"/>
      <path d="M15 6 l-5 8 h10 z" fill="#111"/><circle cx="15" cy="15" r="2.6" fill="#ffd23f"/>
      <path d="M60 6 l-5 8 h10 z" fill="#111"/><circle cx="60" cy="15" r="2.6" fill="#ffd23f"/>
      <path d="M100 6 l-5 8 h10 z" fill="#111"/><circle cx="100" cy="15" r="2.6" fill="#ffd23f"/>
      <path d="M145 6 l-5 8 h10 z" fill="#111"/><circle cx="145" cy="15" r="2.6" fill="#ffd23f"/>
      <circle cx="8" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="19.2" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="30.4" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="41.6" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="52.8" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="64" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="75.2" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="86.4" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="97.6" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="108.8" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="120" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="131.2" cy="26" r="1.5" fill="#ff2e93"/>
      <circle cx="142.4" cy="26" r="1.5" fill="#ffd23f"/>
      <circle cx="153.6" cy="26" r="1.5" fill="#ff2e93"/>
      <rect y="94" width="160" height="26" fill="#0a040a"/>
      <rect y="94" width="160" height="2.4" fill="#ff2e93"/>
      <ellipse cx="80" cy="106" rx="52" ry="6" fill="#ff2e93" fill-opacity=".35"/>
      <g fill="#050205" stroke="#e8142b" stroke-width=".8"><circle cx="16" cy="62" r="4.2"/><ellipse cx="16" cy="59.6" rx="7" ry="1.6"/><rect x="12.5" y="54.8" width="7" height="5" rx="1.2"/><path d="M11 67 h10 l1.4 27 h-3.4 l-0.6 -6 l-0.6 6 h-4 z"/><path d="M20 70 L26 56" fill="none" stroke="#050205" stroke-width="2.6" stroke-linecap="round"/></g>
      <g fill="#050205" stroke="#e8142b" stroke-width=".8"><circle cx="30" cy="58" r="4.2"/><ellipse cx="30" cy="55.6" rx="7" ry="1.6"/><rect x="26.5" y="50.8" width="7" height="5" rx="1.2"/><path d="M25 63 h10 l1.4 31 h-3.4 l-0.6 -6 l-0.6 6 h-4 z"/></g>
      <g fill="#050205" stroke="#e8142b" stroke-width=".8"><circle cx="44" cy="64" r="4.2"/><ellipse cx="44" cy="61.6" rx="7" ry="1.6"/><rect x="40.5" y="56.8" width="7" height="5" rx="1.2"/><path d="M39 69 h10 l1.4 25 h-3.4 l-0.6 -6 l-0.6 6 h-4 z"/><path d="M48 72 L54 58" fill="none" stroke="#050205" stroke-width="2.6" stroke-linecap="round"/></g>
      <g fill="#050205" stroke="#ff2e93" stroke-width=".8"><path d="M-5 66 c-1 -7 3 -9 5 -9 c3 0 6 2 5 9 c2 7 1 12 -1 16 l-3 -4 h-4 l-3 4 c-2 -4 -3 -9 1 -16 z" transform="translate(116 0)"/><circle cx="116" cy="64" r="4"/><path d="M111 69 h10 l2.4 25 h-14.8 z"/></g>
      <g fill="#050205" stroke="#ff2e93" stroke-width=".8"><path d="M-5 60 c-1 -7 3 -9 5 -9 c3 0 6 2 5 9 c2 7 1 12 -1 16 l-3 -4 h-4 l-3 4 c-2 -4 -3 -9 1 -16 z" transform="translate(130 0)"/><circle cx="130" cy="58" r="4"/><path d="M125 63 h10 l2.4 31 h-14.8 z"/><path d="M126 66 L119 51" fill="none" stroke="#050205" stroke-width="2.6" stroke-linecap="round"/></g>
      <g fill="#050205" stroke="#ff2e93" stroke-width=".8"><path d="M-5 64 c-1 -7 3 -9 5 -9 c3 0 6 2 5 9 c2 7 1 12 -1 16 l-3 -4 h-4 l-3 4 c-2 -4 -3 -9 1 -16 z" transform="translate(144 0)"/><circle cx="144" cy="62" r="4"/><path d="M139 67 h10 l2.4 27 h-14.8 z"/></g>
      <rect x="78.6" y="60" width="2.8" height="36" fill="#111"/>
      <rect x="70" y="92" width="20" height="3" rx="1.5" fill="#111"/>
      <path d="M70 38 H90 L86 66 Q80 70 74 66 Z" fill="#111" stroke="#ff2e93" stroke-width="1.6" stroke-linejoin="round"/>
      <rect x="72" y="52" width="16" height="3" fill="#ff2e93"/>
      <circle cx="80" cy="30" r="15" fill="#fff1d6" stroke="#111" stroke-width="2"/>
      <path d="M66 30 H94 M68 23 H92 M68 37 H92 M80 15 V45 M72 18 Q76 30 72 42 M88 18 Q84 30 88 42" fill="none" stroke="#b9ad92" stroke-width="1.1"/>
      <path d="M70 22 Q74 17 80 17" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M112 17 L113.4 20.6 L117 22 L113.4 23.4 L112 27 L110.6 23.4 L107 22 L110.6 20.6 Z" fill="#ffd23f"/>
      <path d="M46 14 L47.12 16.88 L50 18 L47.12 19.12 L46 22 L44.88 19.12 L42 18 L44.88 16.88 Z" fill="#ff2e93"/>
      <path d="M124 60.8 L124.896 63.104 L127.2 64 L124.896 64.896 L124 67.2 L123.104 64.896 L120.8 64 L123.104 63.104 Z" fill="#fff1d6"/>
      <path d="M34 60.6 L34.952 63.048 L37.4 64 L34.952 64.952 L34 67.4 L33.048 64.952 L30.6 64 L33.048 63.048 Z" fill="#ffd23f"/>
      <path d="M100 47.6 L100.672 49.328 L102.4 50 L100.672 50.672 L100 52.4 L99.328 50.672 L97.6 50 L99.328 49.328 Z" fill="#ff2e93"/>
      <path d="M58 45.6 L58.672 47.328 L60.4 48 L58.672 48.672 L58 50.4 L57.328 48.672 L55.6 48 L57.328 47.328 Z" fill="#fff1d6"/>
      <rect x="18" y="113" width="5" height="5" rx="1.4" fill="#ffd23f"/>
      <rect x="28.4" y="109" width="5" height="9" rx="1.4" fill="#ff2e93"/>
      <rect x="38.8" y="112" width="5" height="6" rx="1.4" fill="#ff2e93"/>
      <rect x="49.2" y="107" width="5" height="11" rx="1.4" fill="#ffd23f"/>
      <rect x="59.6" y="111" width="5" height="7" rx="1.4" fill="#ff2e93"/>
      <rect x="70" y="106" width="5" height="12" rx="1.4" fill="#ff2e93"/>
      <rect x="80.4" y="110" width="5" height="8" rx="1.4" fill="#ffd23f"/>
      <rect x="90.8" y="113" width="5" height="5" rx="1.4" fill="#ff2e93"/>
      <rect x="101.2" y="108" width="5" height="10" rx="1.4" fill="#ff2e93"/>
      <rect x="111.6" y="112" width="5" height="6" rx="1.4" fill="#ffd23f"/>
      <rect x="122" y="109" width="5" height="9" rx="1.4" fill="#ff2e93"/>
      <rect x="132.4" y="113" width="5" height="5" rx="1.4" fill="#ff2e93"/>
      <rect x="3" y="3" width="154" height="114" rx="3" fill="none" stroke="#fff1d6" stroke-opacity=".6" stroke-width="1"/>
      </svg>`,
    // 4. Star Wars: round space station, lightsaber, stars
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="160" height="120" fill="#060814"/>
      <circle cx="40" cy="30" r="70" fill="#e8142b" fill-opacity=".07"/>
      <circle cx="88" cy="25" r="1.4" fill="#fff1d6"/>
      <circle cx="18" cy="15" r="0.7" fill="#fff1d6"/>
      <circle cx="99" cy="80" r="0.7" fill="#fff1d6"/>
      <circle cx="135" cy="33" r="0.7" fill="#fff1d6"/>
      <circle cx="28" cy="61" r="1.4" fill="#fff1d6"/>
      <circle cx="23" cy="36" r="0.7" fill="#fff1d6"/>
      <circle cx="147" cy="60" r="0.7" fill="#fff1d6"/>
      <circle cx="150" cy="21" r="0.9" fill="#fff1d6"/>
      <circle cx="21" cy="79" r="1.4" fill="#fff1d6"/>
      <circle cx="18" cy="34" r="0.7" fill="#fff1d6"/>
      <circle cx="148" cy="23" r="1.1" fill="#fff1d6"/>
      <circle cx="113" cy="24" r="0.7" fill="#fff1d6"/>
      <circle cx="152" cy="45" r="0.9" fill="#fff1d6"/>
      <circle cx="32" cy="80" r="0.9" fill="#fff1d6"/>
      <circle cx="101" cy="18" r="0.7" fill="#fff1d6"/>
      <circle cx="150" cy="13" r="0.9" fill="#fff1d6"/>
      <circle cx="133" cy="93" r="1.4" fill="#fff1d6"/>
      <circle cx="86" cy="65" r="1.4" fill="#fff1d6"/>
      <circle cx="98" cy="44" r="0.9" fill="#fff1d6"/>
      <circle cx="52" cy="95" r="0.9" fill="#fff1d6"/>
      <circle cx="26" cy="79" r="1.1" fill="#fff1d6"/>
      <circle cx="140" cy="69" r="1.1" fill="#fff1d6"/>
      <circle cx="120" cy="42" r="0.7" fill="#fff1d6"/>
      <circle cx="36" cy="71" r="1.4" fill="#fff1d6"/>
      <circle cx="48" cy="102" r="1.1" fill="#fff1d6"/>
      <circle cx="44" cy="68" r="1.4" fill="#fff1d6"/>
      <circle cx="16" cy="91" r="0.7" fill="#fff1d6"/>
      <circle cx="148" cy="79" r="1.1" fill="#fff1d6"/>
      <circle cx="93" cy="94" r="1.1" fill="#fff1d6"/>
      <circle cx="133" cy="80" r="1.4" fill="#fff1d6"/>
      <circle cx="23" cy="113" r="0.7" fill="#fff1d6"/>
      <circle cx="75" cy="66" r="0.7" fill="#fff1d6"/>
      <circle cx="21" cy="99" r="1.1" fill="#fff1d6"/>
      <circle cx="153" cy="93" r="1.4" fill="#fff1d6"/>
      <path d="M22 15.4 L23.288 18.712 L26.6 20 L23.288 21.288 L22 24.6 L20.712 21.288 L17.4 20 L20.712 18.712 Z" fill="#fff1d6"/>
      <path d="M140 100 L141.12 102.88 L144 104 L141.12 105.12 L140 108 L138.88 105.12 L136 104 L138.88 102.88 Z" fill="#ffd23f"/>
      <path d="M66 12.8 L66.896 15.104 L69.2 16 L66.896 16.896 L66 19.2 L65.104 16.896 L62.8 16 L65.104 15.104 Z" fill="#ffd23f"/>
      <path d="M148 11 L148.84 13.16 L151 14 L148.84 14.84 L148 17 L147.16 14.84 L145 14 L147.16 13.16 Z" fill="#fff1d6"/>
      <path d="M30 59 L30.84 61.16 L33 62 L30.84 62.84 L30 65 L29.16 62.84 L27 62 L29.16 61.16 Z" fill="#fff1d6"/>
      <circle cx="140" cy="100" r="15" fill="#e8142b"/>
      <path d="M128 94 Q142 90 152 98" fill="none" stroke="#b30f21" stroke-width="3"/>
      <path d="M125 106 Q142 112 155 104" fill="none" stroke="#b30f21" stroke-width="2.4"/>
      <ellipse cx="140" cy="100" rx="26" ry="5.6" fill="none" stroke="#ffd23f" stroke-width="1.6" transform="rotate(-18 140 100)" stroke-dasharray="40 6"/>
      <circle cx="104" cy="46" r="31" fill="#d9d2c3"/>
      <path d="M104 15 A31 31 0 0 1 104 77 A22 31 0 0 0 104 15 Z" fill="#a8a193"/>
      <clipPath id="swc"><circle cx="104" cy="46" r="31"/></clipPath>
      <g clip-path="url(#swc)">
      <rect x="70" y="43" width="70" height="5" fill="#2b2f45"/>
      <rect x="70" y="40" width="70" height="1.2" fill="#8c867a"/><rect x="70" y="50" width="70" height="1.2" fill="#8c867a"/>
      <rect x="78" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="87" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="96" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="105" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="114" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="123" y="43" width="2" height="5" fill="#ffd23f"/>
      <rect x="132" y="43" width="2" height="5" fill="#ffd23f"/>
      <path d="M80 26 H132 M76 62 H132 M92 14 V78 M118 14 V78" fill="none" stroke="#b9b2a2" stroke-width=".8"/>
      </g>
      <g fill="#ffd23f" stroke="#111" stroke-width=".8"><circle cx="118" cy="29" r="4.6"/><circle cx="92" cy="30" r="3"/><circle cx="96" cy="62" r="3.4"/><circle cx="122" cy="64" r="2.6"/></g><g fill="#2b2f45"><circle cx="118" cy="29" r="2"/><circle cx="92" cy="30" r="1.2"/><circle cx="96" cy="62" r="1.4"/></g>
      <circle cx="104" cy="46" r="31" fill="none" stroke="#fff1d6" stroke-width="1.2"/>
      <g transform="translate(14 108) rotate(-30)">
      <rect x="22" y="-6" width="84" height="12" rx="6" fill="#2fe06a" fill-opacity=".30"/>
      <rect x="22" y="-3.8" width="82" height="7.6" rx="3.8" fill="#2fe06a"/>
      <rect x="22" y="-1.8" width="80" height="3.6" rx="1.8" fill="#eafff0"/>
      <rect x="-2" y="-4.2" width="25" height="8.4" rx="2" fill="#9aa0b4" stroke="#111" stroke-width="1"/>
      <rect x="3" y="-4.2" width="3" height="8.4" fill="#111"/><rect x="9" y="-4.2" width="3" height="8.4" fill="#111"/><rect x="15" y="-4.2" width="3" height="8.4" fill="#111"/>
      <rect x="20" y="-5.4" width="4" height="10.8" rx="1.2" fill="#ffd23f" stroke="#111" stroke-width="1"/>
      <circle cx="14" cy="0" r="0" fill="none"/><rect x="-5" y="-3.6" width="4" height="7.2" rx="1.6" fill="#e8142b" stroke="#111" stroke-width="1"/>
      </g>
      <rect x="3" y="3" width="154" height="114" rx="3" fill="none" stroke="#fff1d6" stroke-opacity=".6" stroke-width="1"/>
      </svg>`,
    // 5. Montmartre: white basilica on the hill, street lamp, stairs, rooftops, sunset
    `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect y="0" width="160" height="22" fill="#e8142b"/>
      <rect y="22" width="160" height="18" fill="#f2452b"/>
      <rect y="40" width="160" height="16" fill="#ff6a3d"/>
      <rect y="56" width="160" height="14" fill="#ff9a47"/>
      <rect y="70" width="160" height="14" fill="#ffc25a"/>
      <rect y="84" width="160" height="16" fill="#ffe29a"/>
      <circle cx="128" cy="62" r="20" fill="#fff1d6" fill-opacity=".35"/>
      <circle cx="128" cy="62" r="14" fill="#fff6d0"/>
      <g fill="#fff1d6" fill-opacity=".75"><rect x="14" y="30" width="34" height="3" rx="1.5"/><rect x="24" y="35" width="24" height="2.4" rx="1.2"/><rect x="96" y="22" width="30" height="3" rx="1.5"/><rect x="104" y="27" width="20" height="2.4" rx="1.2"/><rect x="60" y="52" width="26" height="2.4" rx="1.2"/></g>
      <path d="M30 16 q2 -3 4 0 q2 -3 4 0" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/>
      <path d="M40 10 q2 -3 4 0 q2 -3 4 0" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/>
      <path d="M116 40 q2 -3 4 0 q2 -3 4 0" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/>
      <path d="M126 34 q2 -3 4 0 q2 -3 4 0" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/>
      <path d="M52 44 q2 -3 4 0 q2 -3 4 0" fill="none" stroke="#111" stroke-width="1" stroke-linecap="round"/>
      <path d="M-4 84 C30 74 56 72 80 72 C104 72 130 74 164 84 V120 H-4Z" fill="#33261c"/>
      <path d="M-4 84 C30 74 56 72 80 72 C104 72 130 74 164 84" fill="none" stroke="#5c7a2e" stroke-width="3"/>
      <g>
      <rect x="44" y="58" width="72" height="16" fill="#fff6e6"/>
      <rect x="44" y="58" width="72" height="2" fill="#e6d9c2"/>
      <path d="M42 58 V52 Q50 36 58 52 V58 Z" fill="#fffaf0" stroke="#e6d9c2" stroke-width=".8"/>
      <rect x="49.2" y="31" width="1.6" height="6" fill="#e6d9c2"/>
      <path d="M102 58 V52 Q110 36 118 52 V58 Z" fill="#fffaf0" stroke="#e6d9c2" stroke-width=".8"/>
      <rect x="109.2" y="31" width="1.6" height="6" fill="#e6d9c2"/>
      <path d="M60 58 V50 Q66 40 72 50 V58 Z" fill="#fffaf0" stroke="#e6d9c2" stroke-width=".8"/>
      <path d="M88 58 V50 Q94 40 100 50 V58 Z" fill="#fffaf0" stroke="#e6d9c2" stroke-width=".8"/>
      <path d="M70 58 V44 Q80 10 90 44 V58 Z" fill="#fffaf0" stroke="#e6d9c2" stroke-width=".8"/>
      <path d="M80 14 V58 M75 20 Q72 42 72 58 M85 20 Q88 42 88 58" fill="none" stroke="#e6d9c2" stroke-width=".9"/>
      <rect x="78" y="8" width="4" height="8" fill="#fffaf0"/><polygon points="77,8 83,8 80,2" fill="#fffaf0"/>
      <g fill="#b8552f"><path d="M74 74 V66 Q80 58 86 66 V74 Z"/><path d="M56 74 V68 Q60 62 64 68 V74 Z"/><path d="M96 74 V68 Q100 62 104 68 V74 Z"/></g>
      </g>
      <polygon points="68.0,74.0 92.0,74.0 95.3,79.1 64.7,79.1" fill="#f4e3c4"/>
      <polygon points="64.7,79.1 95.3,79.1 98.7,84.2 61.3,84.2" fill="#c98a5e"/>
      <polygon points="61.3,84.2 98.7,84.2 102.0,89.3 58.0,89.3" fill="#f4e3c4"/>
      <polygon points="58.0,89.3 102.0,89.3 105.3,94.4 54.7,94.4" fill="#c98a5e"/>
      <polygon points="54.7,94.4 105.3,94.4 108.7,99.6 51.3,99.6" fill="#f4e3c4"/>
      <polygon points="51.3,99.6 108.7,99.6 112.0,104.7 48.0,104.7" fill="#c98a5e"/>
      <polygon points="48.0,104.7 112.0,104.7 115.3,109.8 44.7,109.8" fill="#f4e3c4"/>
      <polygon points="44.7,109.8 115.3,109.8 118.7,114.9 41.3,114.9" fill="#c98a5e"/>
      <polygon points="41.3,114.9 118.7,114.9 122.0,120.0 38.0,120.0" fill="#f4e3c4"/>
      <path d="M68 74 L38 120 M92 74 L122 120" stroke="#111" stroke-width="1.6" fill="none"/>
      <g fill="#241418">
      <polygon points="0,96 6,88 30,88 36,96 36,120 0,120"/>
      <rect x="10" y="80" width="4" height="9"/><rect x="22" y="82" width="3" height="7"/>
      <polygon points="124,100 132,92 154,92 160,100 160,120 124,120"/>
      <rect x="138" y="84" width="4" height="9"/><rect x="148" y="86" width="3" height="7"/>
      </g>
      <g fill="#ffd23f"><rect x="8" y="100" width="4" height="5"/><rect x="20" y="100" width="4" height="5"/><rect x="12" y="110" width="4" height="5"/><rect x="132" y="104" width="4" height="5"/><rect x="146" y="104" width="4" height="5"/><rect x="140" y="112" width="4" height="5"/></g>
      <g fill="none" stroke="#3b2a30" stroke-width=".8"><path d="M0 104 H36 M0 112 H36 M124 108 H160 M124 116 H160"/></g>
      <circle cx="22" cy="62" r="12" fill="#ffd23f" fill-opacity=".30"/>
      <rect x="21" y="68" width="2.6" height="52" fill="#111"/>
      <rect x="17" y="112" width="10" height="8" rx="1" fill="#111"/>
      <path d="M22.3 76 q-6 -4 -9 0" fill="none" stroke="#111" stroke-width="1.6"/>
      <polygon points="15,54 29,54 26,48 18,48" fill="#111"/>
      <rect x="17" y="54" width="10" height="13" fill="#ffd23f" stroke="#111" stroke-width="1.6"/>
      <polygon points="16,68 28,68 26,71 18,71" fill="#111"/>
      <rect x="21" y="46" width="2" height="3" fill="#111"/>
      <rect x="3" y="3" width="154" height="114" rx="3" fill="none" stroke="#fff1d6" stroke-opacity=".6" stroke-width="1"/>
      </svg>`
  ];

var UNIVERS = [
  { name: "Monde des sorciers",         era: "Harry Potter",         room: "au salon",                        zone: 0, word: "TRANSPARENTE", content: "potions.html" },
  { name: "France des mousquetaires",   era: "XVIIe siècle",        room: "dans la chambre 2",                    zone: 1, word: "NETTE", content: null },
  { name: "Chasseurs de démons",        era: "K-Pop Demon Hunters", room: "au salon, devant la télé",        zone: 2, word: "BRILLANTE", content: null },
  { name: "Galaxie lointaine",          era: "Star Wars",           room: "au bureau",                       zone: 3, word: "OBSCURE", content: "starwars.html" },
  { name: "Montmartre d'autrefois",     era: "Les titis",           room: "dehors, autour de l'appartement", zone: 4, word: "LUMINEUSE", content: null }
];

import type { CSSProperties, ReactNode } from "react";
import type { ArtKind } from "@/lib/case-studies";

/**
 * Hand-drawn, on-brand illustrations for the case studies.
 * Every colour comes from the site's CSS variables so the art always matches the theme.
 * The art is decorative (the study title sits right beside it), so it is hidden from screen readers.
 */
const P = {
  pine: "var(--primary)",
  deep: "var(--deep)",
  sage: "var(--sage)",
  sageL: "var(--sage-light)",
  amber: "var(--amber)",
  amberL: "var(--amber-light)",
  amberInk: "var(--amber-ink)",
  cream: "var(--background)",
  sand: "var(--secondary)",
};

const f = (color: string, opacity = 1): CSSProperties => ({ fill: color, opacity });
const s = (color: string, width = 2, opacity = 1): CSSProperties => ({
  fill: "none",
  stroke: color,
  strokeWidth: width,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  opacity,
});

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg
      className="case-art"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** A quiet room: two chairs, a small table with tea, afternoon light through an arched window. */
function Counselling() {
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <path d="M70 262 V132 a62 62 0 0 1 124 0 V262 Z" style={f(P.amberL, 0.5)} />
      <path d="M70 262 V132 a62 62 0 0 1 124 0 V262 Z" style={s(P.deep, 3, 0.55)} />
      <path d="M132 70 V262 M70 168 H194" style={s(P.deep, 2, 0.4)} />
      <path d="M194 262 L330 330 H60 Z" style={f(P.amberL, 0.18)} />
      <rect y="300" width="640" height="100" style={f(P.sageL, 0.4)} />
      <ellipse cx="340" cy="346" rx="240" ry="28" style={f(P.amber, 0.25)} />
      {/* left chair */}
      <rect x="212" y="200" width="74" height="104" rx="24" style={f(P.pine)} />
      <rect x="200" y="268" width="116" height="42" rx="15" style={f(P.pine)} />
      <rect x="216" y="308" width="9" height="24" rx="3" style={f(P.deep)} />
      <rect x="292" y="308" width="9" height="24" rx="3" style={f(P.deep)} />
      {/* right chair */}
      <rect x="394" y="200" width="74" height="104" rx="24" style={f(P.sage)} />
      <rect x="364" y="268" width="116" height="42" rx="15" style={f(P.sage)} />
      <rect x="372" y="308" width="9" height="24" rx="3" style={f(P.deep)} />
      <rect x="454" y="308" width="9" height="24" rx="3" style={f(P.deep)} />
      {/* table with cup */}
      <rect x="337" y="290" width="6" height="40" style={f(P.deep)} />
      <ellipse cx="340" cy="332" rx="22" ry="5" style={f(P.deep)} />
      <ellipse cx="340" cy="288" rx="32" ry="7" style={f(P.deep)} />
      <rect x="331" y="270" width="18" height="16" rx="4" style={f(P.cream)} />
      <path d="M336 262 c-4 -8 4 -10 0 -18 M345 262 c-4 -8 4 -10 0 -18" style={s(P.sage, 2, 0.7)} />
      {/* plant */}
      <rect x="548" y="282" width="46" height="52" rx="7" style={f(P.amber)} />
      <path d="M571 282 C548 244 540 222 550 190 C570 214 578 246 571 282Z" style={f(P.sage)} />
      <path d="M571 282 C590 250 604 232 598 204 C578 224 570 250 571 282Z" style={f(P.pine)} />
      <path d="M571 282 C566 250 566 226 574 200" style={s(P.deep, 1.5, 0.45)} />
    </Frame>
  );
}

/** A tangled line that gradually settles into a smooth wave, with breathing rings. */
function Anxiety() {
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <circle cx="500" cy="200" r="150" style={f(P.sageL, 0.22)} />
      <circle cx="500" cy="200" r="104" style={s(P.sage, 1.5, 0.45)} />
      <circle cx="500" cy="200" r="70" style={s(P.sage, 1.5, 0.6)} />
      <circle cx="500" cy="200" r="38" style={s(P.sage, 1.5, 0.8)} />
      <circle cx="500" cy="200" r="9" style={f(P.amber)} />
      <path
        d="M40 210 C70 90 120 320 150 160 S100 70 190 230 S230 120 262 200 S290 150 306 202"
        style={s(P.deep, 2.5, 0.8)}
      />
      <path d="M52 250 C100 160 130 300 176 190 S214 270 244 214" style={s(P.deep, 1.8, 0.45)} />
      <path d="M306 202 C346 200 360 176 402 190 S446 214 470 200" style={s(P.pine, 3, 1)} />
      <path d="M40 330 H600" style={s(P.sage, 1.5, 0.5)} />
      <path d="M60 330 q4 -14 8 0 M82 330 q4 -10 8 0" style={s(P.sage, 1.5, 0.5)} />
    </Frame>
  );
}

/** A night window with a crescent moon and a bed with the covers drawn up. */
function Sleep() {
  const stars: [number, number, number][] = [
    [352, 78, 2.4],
    [398, 150, 2],
    [530, 74, 2.6],
    [515, 168, 2],
    [372, 120, 1.6],
    [430, 70, 1.8],
  ];
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.deep)} />
      <rect x="318" y="46" width="236" height="180" rx="12" style={f(P.pine)} />
      <circle cx="462" cy="118" r="36" style={f(P.amberL)} />
      <circle cx="478" cy="106" r="31" style={f(P.pine)} />
      {stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} style={f(P.cream, 0.9)} />
      ))}
      <path d="M436 46 V226 M318 136 H554" style={s(P.deep, 3, 0.6)} />
      <path d="M318 46 C336 100 330 170 344 226 H318 Z" style={f(P.sage, 0.75)} />
      <path d="M554 46 C536 100 542 170 528 226 H554 Z" style={f(P.sage, 0.75)} />
      {/* bed */}
      <rect x="70" y="236" width="14" height="110" rx="5" style={f(P.sageL, 0.6)} />
      <rect x="96" y="300" width="470" height="44" rx="10" style={f(P.sage)} />
      <rect x="104" y="268" width="454" height="48" rx="16" style={f(P.cream, 0.95)} />
      <rect x="116" y="248" width="104" height="38" rx="18" style={f(P.cream)} />
      <path d="M238 276 C300 262 380 268 548 278 V318 H238 Z" style={f(P.amberL, 0.9)} />
      <path d="M300 280 q40 -10 80 0 M400 284 q44 -8 90 2" style={s(P.amber, 2, 0.6)} />
      <rect x="110" y="344" width="10" height="26" rx="3" style={f(P.sage)} />
      <rect x="538" y="344" width="10" height="26" rx="3" style={f(P.sage)} />
    </Frame>
  );
}

/** Steps of different heights, a small sprout at the top and the sun coming up. */
function Confidence() {
  const steps = [
    { x: 80, y: 296, w: 92, c: P.sageL },
    { x: 172, y: 258, w: 92, c: P.sage },
    { x: 264, y: 220, w: 92, c: P.sage },
    { x: 356, y: 182, w: 92, c: P.pine },
    { x: 448, y: 144, w: 112, c: P.pine },
  ];
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <circle cx="170" cy="120" r="58" style={f(P.amberL, 0.55)} />
      <circle cx="170" cy="120" r="36" style={f(P.amberL)} />
      <path
        d="M300 90 q8 -9 16 0 q8 -9 16 0 M360 62 q7 -8 14 0 q7 -8 14 0"
        style={s(P.deep, 2, 0.5)}
      />
      {steps.map((st) => (
        <rect key={st.x} x={st.x} y={st.y} width={st.w} height={340 - st.y} style={f(st.c)} />
      ))}
      <rect x="40" y="340" width="560" height="14" rx="7" style={f(P.deep, 0.18)} />
      {/* sprout */}
      <path d="M504 144 V108" style={s(P.sage, 4)} />
      <path d="M504 120 C484 120 474 106 474 92 C492 92 504 102 504 120Z" style={f(P.sageL)} />
      <path d="M504 112 C524 112 536 98 536 84 C518 84 504 94 504 112Z" style={f(P.sage)} />
      <circle cx="504" cy="82" r="5" style={f(P.amber)} />
    </Frame>
  );
}

/** Two trees leaning towards one another until their branches share a single canopy. */
function Relationships() {
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <circle cx="320" cy="120" r="150" style={f(P.amberL, 0.2)} />
      <ellipse cx="320" cy="350" rx="270" ry="30" style={f(P.sageL, 0.5)} />
      <path
        d="M214 350 C220 280 236 210 282 138 L296 150 C262 214 252 284 250 350Z"
        style={f(P.deep)}
      />
      <path
        d="M426 350 C420 280 404 210 358 138 L344 150 C378 214 388 284 390 350Z"
        style={f(P.deep)}
      />
      <path
        d="M236 350 C230 336 214 332 196 336 M404 350 C410 336 426 332 444 336"
        style={s(P.deep, 3, 0.7)}
      />
      {/* shared canopy */}
      <circle cx="262" cy="112" r="62" style={f(P.sage)} />
      <circle cx="318" cy="84" r="66" style={f(P.pine)} />
      <circle cx="378" cy="112" r="62" style={f(P.sage)} />
      <circle cx="320" cy="140" r="50" style={f(P.sageL)} />
      <circle cx="226" cy="150" r="30" style={f(P.sageL)} />
      <circle cx="414" cy="150" r="30" style={f(P.sageL)} />
      <circle cx="300" cy="70" r="6" style={f(P.amber)} />
      <circle cx="352" cy="100" r="6" style={f(P.amber)} />
      <circle cx="268" cy="104" r="5" style={f(P.amberL)} />
      {/* thread of small dots between the trunks */}
      <path d="M268 300 H372" style={{ ...s(P.amber, 3, 0.8), strokeDasharray: "2 12" }} />
    </Frame>
  );
}

/** A worn, circular rut on the left and a new path of stepping stones leading to the light. */
function Habits() {
  const stones: [number, number][] = [
    [330, 214],
    [384, 188],
    [438, 170],
    [492, 158],
  ];
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <rect y="300" width="640" height="100" style={f(P.sageL, 0.38)} />
      <circle cx="190" cy="210" r="88" style={{ ...s(P.deep, 3, 0.55), strokeDasharray: "3 12" }} />
      <circle cx="190" cy="210" r="56" style={{ ...s(P.deep, 2, 0.25), strokeDasharray: "2 10" }} />
      <path d="M178 122 l18 -2 l-8 16" style={s(P.deep, 3, 0.7)} />
      <path d="M278 210 C300 214 310 214 328 214" style={s(P.amber, 3, 0.9)} />
      {stones.map(([x, y], i) => (
        <ellipse
          key={x}
          cx={x}
          cy={y}
          rx={26 - i * 2}
          ry={11 - i}
          style={f(i % 2 ? P.sage : P.pine)}
        />
      ))}
      <circle cx="560" cy="128" r="48" style={f(P.amberL, 0.5)} />
      <circle cx="560" cy="128" r="26" style={f(P.amber)} />
      <path
        d="M560 76 V62 M560 194 V180 M508 128 H494 M626 128 H612 M524 92 L514 82 M596 92 L606 82"
        style={s(P.amber, 2.5, 0.85)}
      />
    </Frame>
  );
}

/** A still lake at dusk: a lotus, widening ripples and a quiet moon. */
function Hypnotherapy() {
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <circle cx="510" cy="92" r="30" style={f(P.amberL)} />
      <circle cx="510" cy="92" r="52" style={f(P.amberL, 0.25)} />
      <path
        d="M0 232 C80 196 150 200 230 226 C300 196 380 190 470 220 C540 196 600 204 640 224 V400 H0Z"
        style={f(P.sage, 0.55)}
      />
      <rect y="240" width="640" height="160" style={f(P.sageL, 0.5)} />
      <ellipse cx="320" cy="300" rx="130" ry="22" style={s(P.sage, 1.8, 0.75)} />
      <ellipse cx="320" cy="304" rx="195" ry="34" style={s(P.sage, 1.6, 0.5)} />
      <ellipse cx="320" cy="308" rx="265" ry="46" style={s(P.sage, 1.4, 0.3)} />
      <ellipse cx="510" cy="268" rx="12" ry="3" style={f(P.amberL, 0.8)} />
      {/* lotus */}
      <ellipse cx="320" cy="296" rx="64" ry="12" style={f(P.pine, 0.35)} />
      {[-62, 62].map((a) => (
        <ellipse
          key={a}
          cx="320"
          cy="252"
          rx="22"
          ry="46"
          transform={`rotate(${a} 320 296)`}
          style={f(P.sage)}
        />
      ))}
      {[-32, 32].map((a) => (
        <ellipse
          key={a}
          cx="320"
          cy="248"
          rx="24"
          ry="50"
          transform={`rotate(${a} 320 296)`}
          style={f(P.sageL)}
        />
      ))}
      <ellipse cx="320" cy="244" rx="25" ry="52" style={f(P.cream)} />
      <path
        d="M320 198 C310 222 310 252 320 292 C330 252 330 222 320 198Z"
        style={f(P.amberL, 0.7)}
      />
    </Frame>
  );
}

/** A bench under an old tree: two friends, long shadows and a gentle morning sun. */
function Elderly() {
  return (
    <Frame>
      <rect width="640" height="400" style={f(P.sand)} />
      <circle cx="140" cy="96" r="62" style={f(P.amberL, 0.4)} />
      <circle cx="140" cy="96" r="38" style={f(P.amberL)} />
      <path
        d="M0 270 C90 230 170 236 250 262 C340 232 430 228 520 256 C570 240 610 244 640 256 V400 H0Z"
        style={f(P.sageL, 0.7)}
      />
      <rect y="304" width="640" height="96" style={f(P.sage, 0.5)} />
      <path d="M40 346 C180 330 300 336 420 352 H40Z" style={f(P.amber, 0.22)} />
      {/* tree */}
      <path
        d="M470 330 C474 270 470 230 478 190 L498 190 C504 232 500 276 504 330Z"
        style={f(P.deep)}
      />
      <circle cx="452" cy="156" r="58" style={f(P.sage)} />
      <circle cx="514" cy="140" r="62" style={f(P.pine)} />
      <circle cx="486" cy="108" r="54" style={f(P.sage)} />
      <circle cx="540" cy="182" r="40" style={f(P.sageL)} />
      <circle cx="430" cy="196" r="34" style={f(P.sageL)} />
      <ellipse cx="500" cy="338" rx="90" ry="10" style={f(P.deep, 0.18)} />
      {/* bench */}
      <rect x="170" y="238" width="206" height="11" rx="4" style={f(P.amberInk)} />
      <rect x="164" y="276" width="218" height="14" rx="4" style={f(P.amberInk)} />
      <rect x="180" y="288" width="9" height="44" rx="3" style={f(P.deep)} />
      <rect x="352" y="288" width="9" height="44" rx="3" style={f(P.deep)} />
      <rect x="180" y="248" width="9" height="30" style={f(P.deep)} />
      <rect x="352" y="248" width="9" height="30" style={f(P.deep)} />
      {/* two people */}
      <circle cx="244" cy="214" r="15" style={f(P.cream)} />
      <path d="M222 276 C220 240 232 230 244 230 C258 230 268 242 266 276Z" style={f(P.pine)} />
      <path d="M222 276 H266 V310 H222Z" style={f(P.deep)} />
      <circle cx="300" cy="216" r="14" style={f(P.cream)} />
      <path d="M280 276 C278 242 290 232 300 232 C312 232 322 244 320 276Z" style={f(P.amber)} />
      <path d="M280 276 H320 V308 H280Z" style={f(P.sage)} />
      <path d="M338 270 V318 q0 8 -8 8" style={s(P.deep, 3)} />
      {/* tea cups */}
      <path d="M96 318 q-4 -10 0 -18 M108 318 q-4 -10 0 -18" style={s(P.sage, 2, 0.6)} />
      <rect x="88" y="318" width="30" height="16" rx="5" style={f(P.cream)} />
    </Frame>
  );
}

const scenes: Record<ArtKind, () => ReactNode> = {
  counselling: Counselling,
  anxiety: Anxiety,
  sleep: Sleep,
  confidence: Confidence,
  relationships: Relationships,
  habits: Habits,
  hypnotherapy: Hypnotherapy,
  elderly: Elderly,
};

export function CaseArt({ kind }: { kind: ArtKind }) {
  const Scene = scenes[kind];
  return <>{Scene()}</>;
}

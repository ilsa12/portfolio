import type { Project } from "../data";

const Agent = () => {
  const nodes = [[60, 60], [200, 30], [330, 80], [130, 150], [270, 160], [200, 95]];
  const edges = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 3], [2, 4], [1, 2]];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(255,255,255,.25)" strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 5 ? 16 : 8} fill={i === 5 ? "#fff" : "rgba(255,255,255,.7)"} />
          {i === 5 && <circle cx={x} cy={y} r="28" fill="none" stroke="rgba(255,255,255,.3)">
            <animate attributeName="r" values="18;36;18" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>}
        </g>
      ))}
    </svg>
  );
};

const Sentiment = () => {
  const bars = [40, 70, 55, 95, 65, 120, 85, 140, 100, 60];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {bars.map((h, i) => (
        <rect key={i} x={30 + i * 35} y={180 - h} width="20" height={h} rx="10" fill={`rgba(255,255,255,${0.25 + h / 220})`} />
      ))}
      <polyline fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"
        points={bars.map((h, i) => `${40 + i * 35},${170 - h}`).join(" ")} />
    </svg>
  );
};

const Health = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <path d="M0 105 H120 L145 60 L175 150 L205 40 L230 105 H400" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="600">
      <animate attributeName="stroke-dashoffset" values="600;0" dur="3s" repeatCount="indefinite" />
    </path>
    <path d="M0 105 H120 L145 60 L175 150 L205 40 L230 105 H400" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2.5" />
    <g transform="translate(330,30)" fill="rgba(255,255,255,.85)">
      <rect x="8" y="0" width="14" height="30" rx="3" />
      <rect x="0" y="8" width="30" height="14" rx="3" />
    </g>
  </svg>
);


const Detect = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="40" y="55" width="130" height="110" rx="6" fill="rgba(255,255,255,.06)" stroke="#fff" strokeWidth="2" />
    <rect x="40" y="35" width="70" height="20" rx="4" fill="#fff" />
    <text x="48" y="50" fontSize="12" fill="#000" fontFamily="Barlow, sans-serif">person 98%</text>
    <rect x="215" y="85" width="140" height="70" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeDasharray="6 4" />
    <rect x="215" y="65" width="60" height="20" rx="4" fill="rgba(255,255,255,.8)" />
    <text x="223" y="80" fontSize="12" fill="#000" fontFamily="Barlow, sans-serif">car 92%</text>
    <line x1="0" y1="185" x2="400" y2="185" stroke="rgba(255,255,255,.2)" />
    <rect x="0" y="0" width="400" height="4" fill="rgba(255,255,255,.7)">
      <animate attributeName="y" values="0;196;0" dur="4s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const Chat = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="30" y="25" width="190" height="42" rx="21" fill="rgba(255,255,255,.18)" />
    <circle cx="60" cy="46" r="4" fill="#fff" /><circle cx="78" cy="46" r="4" fill="rgba(255,255,255,.6)" /><circle cx="96" cy="46" r="4" fill="rgba(255,255,255,.3)" />
    <rect x="160" y="82" width="210" height="42" rx="21" fill="#fff" />
    <rect x="182" y="98" width="120" height="8" rx="4" fill="rgba(0,0,0,.55)" />
    <rect x="182" y="110" width="70" height="6" rx="3" fill="rgba(0,0,0,.3)" />
    <rect x="30" y="139" width="150" height="42" rx="21" fill="rgba(255,255,255,.18)" />
    <rect x="52" y="155" width="100" height="8" rx="4" fill="rgba(255,255,255,.6)" />
  </svg>
);

const Translate = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <rect x="45" y="50" width="120" height="100" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.4)" />
    <text x="105" y="118" fontSize="56" fill="#fff" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic">A</text>
    <rect x="235" y="50" width="120" height="100" rx="18" fill="#fff" />
    <text x="295" y="118" fontSize="52" fill="#000" textAnchor="middle" fontFamily="sans-serif">ع</text>
    <path d="M178 100 H222 M210 88 L222 100 L210 112" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

const Palette = () => {
  const cols = ["#f97316", "#ec4899", "#a855f7", "#6366f1", "#22d3ee"];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {cols.map((c, i) => (
        <rect key={c} x={35 + i * 68} y={30 + (i % 2) * 14} width="58" height="130" rx="29" fill={c} opacity="0.9" />
      ))}
    </svg>
  );
};

const ProjectVisual = ({ type }: { type: Project["visual"] }) => (
  <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.10] via-white/[0.02] to-transparent border border-white/10">
    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute inset-0 p-4">
      {type === "agent" ? <Agent /> : type === "sentiment" ? <Sentiment /> : type === "health" ? <Health /> : type === "detect" ? <Detect /> : type === "chat" ? <Chat /> : type === "translate" ? <Translate /> : <Palette />}
    </div>
  </div>
);

export default ProjectVisual;

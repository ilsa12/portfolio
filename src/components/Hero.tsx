import { useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "../data";

const ORBIT_LABELS = ["LLMs", "RAG", "CV", "Agents", "ML"];

const Robot = () => (
  <svg viewBox="0 0 320 360" className="w-full h-full" style={{ filter: "drop-shadow(0 0 40px rgba(129,90,255,0.35))" }}>
    <line x1="160" y1="30" x2="160" y2="55" stroke="rgba(255,255,255,.5)" strokeWidth="3" />
    <circle cx="160" cy="24" r="7" fill="#fff">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
    </circle>

    <rect x="90" y="55" width="140" height="110" rx="28" fill="url(#headGrad)" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" />
    <rect x="108" y="88" width="104" height="46" rx="20" fill="#050505" stroke="rgba(255,255,255,.15)" />
    <circle cx="140" cy="111" r="9" fill="#fff">
      <animate attributeName="r" values="9;9;1;9" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="180" cy="111" r="9" fill="#fff">
      <animate attributeName="r" values="9;9;1;9" dur="4s" repeatCount="indefinite" />
    </circle>
    <rect x="108" y="88" width="104" height="3" fill="rgba(129,90,255,.8)">
      <animate attributeName="y" values="90;130;90" dur="2.6s" repeatCount="indefinite" />
    </rect>

    <rect x="148" y="163" width="24" height="16" fill="rgba(255,255,255,.2)" />

    <rect x="70" y="178" width="180" height="140" rx="26" fill="url(#bodyGrad)" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" />
    <circle cx="160" cy="235" r="26" fill="none" stroke="rgba(129,90,255,.6)" strokeWidth="2" />
    <circle cx="160" cy="235" r="10" fill="#fff">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <line x1="95" y1="285" x2="140" y2="285" stroke="rgba(255,255,255,.3)" strokeWidth="3" strokeLinecap="round" />
    <line x1="180" y1="285" x2="225" y2="285" stroke="rgba(255,255,255,.3)" strokeWidth="3" strokeLinecap="round" />

    <rect x="40" y="195" width="26" height="90" rx="13" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)">
      <animateTransform attributeName="transform" type="rotate" values="0 53 200; 6 53 200; 0 53 200" dur="3s" repeatCount="indefinite" />
    </rect>
    <rect x="254" y="195" width="26" height="90" rx="13" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)">
      <animateTransform attributeName="transform" type="rotate" values="0 267 200; -6 267 200; 0 267 200" dur="3s" repeatCount="indefinite" />
    </rect>

    <defs>
      <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.12)" />
        <stop offset="1" stopColor="rgba(129,90,255,0.05)" />
      </linearGradient>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
        <stop offset="1" stopColor="rgba(129,90,255,0.04)" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 lg:px-24 pt-28 pb-16">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          <p className="font-body font-light text-white/60 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Hi, I'm {profile.name}
          </p>
          <h1 className="font-heading italic text-white tracking-tight leading-[0.85] text-6xl md:text-7xl lg:text-8xl">
            AI Engineer
          </h1>
          <p className="text-white/60 font-body font-light text-sm md:text-lg max-w-xl mx-auto lg:mx-0 mt-8 mb-10">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
            <a href="#projects" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body">
              View Projects <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div
          ref={stageRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative h-[380px] md:h-[460px] flex items-center justify-center"
          style={{ perspective: "900px" }}
        >
          <div className="absolute h-[300px] w-[300px] md:h-[360px] md:w-[360px] rounded-full border border-white/10 animate-[spin_22s_linear_infinite]">
            {ORBIT_LABELS.map((label, i) => {
              const angle = (360 / ORBIT_LABELS.length) * i;
              return (
                <span
                  key={label}
                  className="absolute top-1/2 left-1/2 liquid-glass rounded-full px-3 py-1 text-[10px] font-mono text-white/80 whitespace-nowrap"
                  style={{
                    transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                  }}
                >
                  {label}
                </span>
              );
            })}
          </div>

          <div
            className="w-[220px] md:w-[280px] transition-transform duration-150 ease-out animate-[float_6s_ease-in-out_infinite]"
            style={{
              transform: `rotateY(${tilt.x * 18}deg) rotateX(${-tilt.y * 18}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Robot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
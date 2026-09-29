import { useState } from "react";
import SectionHead from "./SectionHead";
import { skills } from "../data";

const GROUP_COLORS = [
  "rgba(129,90,255,0.9)",
  "rgba(236,72,153,0.9)",
  "rgba(34,211,238,0.9)",
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-28 max-w-7xl mx-auto">
      <SectionHead eyebrow="Skills" title="What I work with." />

      {/* Category tabs */}
      <div className="reveal flex flex-wrap gap-3 mb-12">
        {skills.map((g, i) => (
          <button
            key={g.group}
            onClick={() => setActive(i)}
            className="relative rounded-full px-5 py-2.5 text-sm font-body transition-all"
            style={{
              background: active === i ? GROUP_COLORS[i % GROUP_COLORS.length] : "rgba(255,255,255,0.05)",
              color: active === i ? "#000" : "rgba(255,255,255,0.7)",
              fontWeight: active === i ? 600 : 400,
              boxShadow: active === i ? `0 0 24px ${GROUP_COLORS[i % GROUP_COLORS.length]}` : "none",
            }}
          >
            {g.group}
          </button>
        ))}
      </div>

      {/* Floating skill cloud for active group */}
      <div className="reveal relative min-h-[280px] liquid-glass rounded-[2rem] p-8 md:p-12 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[100px] pointer-events-none transition-all duration-500"
          style={{ background: GROUP_COLORS[active % GROUP_COLORS.length] }}
        />
        <div className="relative z-10 flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {skills[active].items.map((s, i) => (
            <span
              key={s}
              className="group relative rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 font-body text-sm md:text-base text-white/85 cursor-default transition-all duration-300 hover:scale-110 hover:text-white"
              style={{
                animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <span
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
                style={{ background: GROUP_COLORS[active % GROUP_COLORS.length] }}
              />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHead from "./SectionHead";
import { about, profile } from "../data";

const STATS = [
  { label: "Years learning AI", value: 3 },
  { label: "Internships", value: 3 },
  { label: "GitHub projects", value: 7 },
];

const useCountUp = (target: number, active: boolean, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
};

const StatCounter = ({ label, value }: { label: string; value: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setActive(true);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = useCountUp(value, active);

  return (
    <div ref={ref} className="liquid-glass rounded-2xl px-6 py-5 text-center">
      <p className="font-heading italic text-4xl md:text-5xl text-white mb-1">{count}+</p>
      <p className="font-body font-light text-white/50 text-xs tracking-wide uppercase">{label}</p>
    </div>
  );
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: px, y: py });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="liquid-glass rounded-3xl p-8 transition-transform duration-150 ease-out"
      style={{
        transform: `rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

const About = () => (
  <section id="about" className="px-6 md:px-16 lg:px-24 py-28 max-w-7xl mx-auto">
    <SectionHead eyebrow="About" title="Building things that think." />

    <div className="grid lg:grid-cols-5 gap-8 mb-10">
      <div className="lg:col-span-3 reveal space-y-5">
        {about.paragraphs.map((p) => (
          <p key={p} className="font-body font-light text-white/70 text-base md:text-lg leading-relaxed">{p}</p>
        ))}
        <p className="flex items-center gap-2 font-body font-light text-white/40 text-sm pt-2">
          <MapPin className="h-4 w-4" /> {profile.location}
        </p>
        <p className="inline-flex items-center gap-2 font-body font-light text-white/50 text-xs rounded-full border border-white/10 px-4 py-2 mt-2">
          <Sparkles className="h-3.5 w-3.5" /> Currently exploring: multi-agent systems & RAG
        </p>
      </div>

      <div className="lg:col-span-2 reveal" style={{ perspective: "900px" }}>
        <TiltCard>
          <GraduationCap className="h-6 w-6 text-white/70 mb-6" />
          <p className="font-body font-light text-white/40 text-xs tracking-[0.25em] uppercase mb-2">Education</p>
          <h3 className="font-heading italic text-3xl mb-2">{about.education.school}</h3>
          <p className="font-body text-white/80 text-sm mb-1">{about.education.degree}</p>
          <p className="font-body font-light text-white/40 text-sm">{about.education.years} · {about.education.place}</p>
        </TiltCard>
      </div>
    </div>

    <div className="reveal grid grid-cols-3 gap-4 md:gap-6">
      {STATS.map((s) => (
        <StatCounter key={s.label} label={s.label} value={s.value} />
      ))}
    </div>
  </section>
);

export default About;
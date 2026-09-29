import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import DiagonalCarousel from "./ui/diagonal-carousel";
import { experience } from "../data";

const glows = [
  "radial-gradient(circle at 85% 10%, rgba(99,102,241,0.35), transparent 55%)",
  "radial-gradient(circle at 85% 10%, rgba(236,72,153,0.30), transparent 55%)",
  "radial-gradient(circle at 85% 10%, rgba(34,211,238,0.30), transparent 55%)",
];

const Experience = () => {
  const [slideSize, setSlideSize] = useState(320);

  useEffect(() => {
    const onResize = () => setSlideSize(window.innerWidth < 640 ? 250 : 320);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const items = experience.map((e, i) => ({
    title: e.meta,
    content: (
      <div
        className="liquid-glass rounded-3xl h-full w-full p-6 sm:p-7 flex flex-col justify-between"
        style={{ backgroundImage: glows[i % glows.length] }}
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs tracking-[0.25em] text-white/50">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-body font-light text-[11px] tracking-[0.2em] uppercase text-white/50">
            {e.meta}
          </span>
        </div>

        <div>
          <h3 className="font-heading italic text-3xl sm:text-4xl leading-[0.95] text-white mb-2">
            {e.company}
          </h3>
          <p className="font-body text-sm text-white/80 mb-4">{e.role}</p>
          <p className="font-body font-light text-xs sm:text-[13px] leading-relaxed text-white/60">
            {e.summary}
          </p>
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="relative pt-28 pb-10 bg-black">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <SectionHead eyebrow="Experience" title="Where I've worked." />
      </div>

      <div className="relative w-full h-[640px] sm:h-[680px]">
        <DiagonalCarousel
          items={items}
          slideSize={slideSize}
          rotationStep={30}
          verticalStep={slideSize < 300 ? 100 : 130}
          inactiveScale={0.6}
          slideClassName="px-3"
          labelClassName="font-body font-light text-white/60 tracking-[0.2em] uppercase text-xs"
        />
      </div>
    </section>
  );
};

export default Experience;

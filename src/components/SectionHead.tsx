const SectionHead = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="reveal mb-14">
    <p className="font-body font-light text-white/40 text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
    <h2 className="font-heading italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9]">{title}</h2>
  </div>
);
export default SectionHead;

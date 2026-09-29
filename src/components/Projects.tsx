import { ArrowUpRight, Github } from "lucide-react";
import SectionHead from "./SectionHead";
import ProjectVisual from "./ProjectVisual";
import { projects } from "../data";

const Projects = () => (
  <section id="projects" className="px-6 md:px-16 lg:px-24 py-28 max-w-7xl mx-auto">
    <SectionHead eyebrow="Projects" title="Selected work." />

    <div className="space-y-10">
      {projects.map((p, i) => (
        <article
          key={p.title}
          className="reveal relative rounded-[2rem] overflow-hidden liquid-glass p-6 sm:p-10"
        >
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-[90px] pointer-events-none"
            style={{ background: p.glow }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-[100px] pointer-events-none opacity-70"
            style={{ background: p.glow }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ProjectVisual type={p.visual} />
            </div>

            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-white/40 mb-3 block">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <h3 className="font-heading italic text-4xl sm:text-5xl leading-[0.95] mb-4">
                {p.title}
              </h3>
              <p className="font-body font-light text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-body text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium font-body items-center gap-2 hover:bg-white/90 transition-colors"
              >
                <Github className="h-4 w-4" /> View on GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;

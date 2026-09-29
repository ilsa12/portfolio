import { ArrowUpRight } from "lucide-react";
import { profile } from "../data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => (
  <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
    <nav className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-8">
      <a href="#top" className="font-heading italic text-xl text-white leading-none">
        {profile.name.split(" ")[0]}
      </a>
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="font-body font-light text-sm text-white/60 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-colors"
      >
        Contact <ArrowUpRight className="h-4 w-4" />
      </a>
    </nav>
  </header>
);

export default Navbar;

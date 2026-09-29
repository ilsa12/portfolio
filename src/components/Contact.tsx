import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Loader2, CheckCircle2 } from "lucide-react";
import { WEB3FORMS_KEY, profile } from "../data";

const field =
  "w-full rounded-2xl bg-white/[0.04] border border-white/15 px-5 py-3 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-heading italic text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.85] mb-4">
          Let's build something.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-10">
          Have a project, an opportunity or just want to say hi? Send me a message and I'll get back to you.
        </p>

        {status === "sent" ? (
          <div className="liquid-glass rounded-3xl p-10 flex flex-col items-center gap-3">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            <p className="font-body text-white/80">Message sent — thank you! I'll reply soon.</p>
          </div>
        ) : (
          <form onSubmit={send} className="liquid-glass rounded-3xl p-6 md:p-8 text-left space-y-4">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className={field} />
            <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" className={`${field} resize-none`} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-xs text-center">Something went wrong — please try again.</p>
            )}
          </form>
        )}

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body font-light text-xs">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors flex items-center gap-1.5">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors flex items-center gap-1.5">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
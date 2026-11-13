import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll spy: highlight the section currently in the middle of the screen.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="nav">
      <a className="brand" href="#top"><span className="dot" />SDA Guide</a>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>{s.short}</a>
        ))}
      </nav>
    </header>
  );
}

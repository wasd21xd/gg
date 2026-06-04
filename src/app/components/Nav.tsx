"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#how", label: "Как работаем" },
    { href: "#founders", label: "Основатели" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      aria-label="Основная навигация"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[60px] transition-all duration-400 ${
        scrolled
          ? "py-4 bg-[#f5f4f0]/96 shadow-[0_1px_0_#e8e6e0] backdrop-blur-[8px] text-[#0a0a0a]"
          : "py-6 text-white"
      }`}
    >
      <Link href="#hero" aria-label="Горизонт — на главную" className="flex items-center gap-3 no-underline">
        <svg className="w-11 h-11" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="80" height="80" fill={scrolled ? "#0a0a0a" : "white"} />
          <text x="40" y="52" textAnchor="middle" fontFamily="Georgia,serif" fontSize="28" fontWeight="bold" fill={scrolled ? "white" : "#0a0a0a"}>Г</text>
        </svg>
        <span className="flex flex-col">
          <span className={`font-serif text-xl font-bold tracking-widest ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}>ГОРИЗОНТ</span>
          <span className={`text-[10px] tracking-[0.15em] uppercase mt-[-4px] ${scrolled ? "text-[#6b6860]" : "text-white/50"}`}>Центр недвижимости</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 ${
                scrolled ? "text-[#6b6860] hover:text-[#0a0a0a]" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className={`hidden md:inline-block px-6 py-[10px] text-[13px] tracking-[0.06em] uppercase no-underline transition-all duration-200 hover:-translate-y-px ${
          scrolled ? "bg-[#0a0a0a] text-white hover:bg-[#302e2b]" : "bg-white text-[#0a0a0a] hover:bg-[#e8e6e0]"
        }`}
      >
        Консультация
      </a>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Открыть меню"
        aria-expanded={mobileOpen}
      >
        <span className={`w-6 h-[1.5px] transition-transform duration-300 ${scrolled ? "bg-[#0a0a0a]" : "bg-white"}`} />
        <span className={`w-6 h-[1.5px] transition-transform duration-300 ${scrolled ? "bg-[#0a0a0a]" : "bg-white"}`} />
        <span className={`w-6 h-[1.5px] transition-transform duration-300 ${scrolled ? "bg-[#0a0a0a]" : "bg-white"}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f5f4f0] shadow-lg flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 text-[13px] tracking-[0.08em] uppercase text-[#6b6860] hover:text-[#0a0a0a] no-underline"
            >
              {item.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setMobileOpen(false)} className="mx-6 mt-2 bg-[#0a0a0a] text-white text-center py-3 text-[13px] tracking-[0.06em] uppercase no-underline">
            Консультация
          </a>
        </div>
      )}
    </nav>
  );
}

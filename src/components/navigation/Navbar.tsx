"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY >= window.innerHeight - 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        solid
          ? "border-black/[0.06] bg-white/95 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className={`flex flex-col leading-none transition-colors duration-500 ${
            solid ? "text-[#111111]" : "text-white"
          }`}
        >
          <span className="text-[18px] font-semibold tracking-[0.18em]">
            AMEN
          </span>

          <span
            className={`mt-1.5 pl-[0.2em] text-[7px] font-medium tracking-[0.48em] transition-colors duration-500 ${
              solid ? "text-black/40" : "text-white/55"
            }`}
          >
            ESTATES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="/properties" solid={solid}>
            PROPERTIES
          </NavLink>

          <NavLink href="/#about" solid={solid}>
            ABOUT
          </NavLink>

          <NavLink href="/#journal" solid={solid}>
            JOURNAL
          </NavLink>

          <NavLink href="/#contact" solid={solid}>
            CONTACT
          </NavLink>

          <Link
            href="/properties"
            className={`ml-2 border px-5 py-3 text-[10px] tracking-[0.18em] transition-all duration-500 ${
              solid
                ? "border-black/20 text-[#111111] hover:bg-[#111111] hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-black"
            }`}
          >
            VIEW PROPERTIES
          </Link>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  solid,
}: {
  href: string;
  children: React.ReactNode;
  solid: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-[10px] tracking-[0.18em] transition-colors duration-500 ${
        solid
          ? "text-black/55 hover:text-black"
          : "text-white/75 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
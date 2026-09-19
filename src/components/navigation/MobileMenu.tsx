"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
              y: open ? 6 : 0,
            }}
            className="h-px w-full bg-white"
          />

          <motion.span
            animate={{
              rotate: open ? -45 : 0,
              y: open ? -6 : 0,
            }}
            className="h-px w-full bg-white"
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0b0b0b]"
          >
            <div className="flex h-full flex-col justify-between px-8 pb-10 pt-32">
              <nav className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="border-b border-white/10 py-5 text-4xl font-light tracking-tight text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div>
                <p className="text-[9px] tracking-[0.35em] text-white/35">
                  NOIR ESTATES
                </p>

                <p className="mt-3 text-xs text-white/40">
                  Exceptional homes for extraordinary living.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
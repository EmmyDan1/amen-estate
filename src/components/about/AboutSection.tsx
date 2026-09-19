"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] text-white"
    >
      {/* Top statement */}
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-40 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-7 text-[10px] tracking-[0.35em] text-white/35">
              NOIR ESTATES / PHILOSOPHY
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-[6.8rem]">
              We don't simply
              <br />
              find homes.
              <br />
              <span className="text-white/35">
                We find places
              </span>
              <br />
              worth living for.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-md lg:mb-2 lg:justify-self-end"
          >
            <p className="text-sm leading-7 text-white/50">
              Noir Estates represents a quieter approach to luxury real
              estate. We look beyond square footage and price to discover
              properties with architecture, character and a sense of place.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-[10px] tracking-[0.2em] text-white transition-colors hover:border-white"
            >
              DISCOVER OUR APPROACH
              <span className="text-sm">↗</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Image / Story */}
      <div className="mx-auto max-w-[1600px] px-6 pb-28 md:px-12 md:pb-40 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.img
              src="/images/property6.webp"
              alt="Noir Estates residence"
              className="aspect-[4/3] h-full w-full object-cover"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/15 pt-6"
          >
            <div className="flex justify-between text-[10px] tracking-[0.25em] text-white/30">
              <span>EST. 2026</span>
              <span>02 / 04</span>
            </div>

            <p className="mt-12 max-w-xs text-sm leading-7 text-white/45">
              From secluded estates to contemporary city residences, every
              property is selected with intention.
            </p>

            <div className="mt-16 h-px w-full bg-white/10" />

            <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/30">
              Architecture · Place · Living
            </p>
          </motion.div>
        </div>
      </div>

      {/* Closing line */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-7 md:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.3em] text-white/30">
              NOIR ESTATES
            </span>

            <span className="text-[9px] tracking-[0.3em] text-white/30">
              SELECTED WITH INTENTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
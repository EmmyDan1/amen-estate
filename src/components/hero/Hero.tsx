"use client";

import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0b0b0b]">
      <div className="absolute inset-0">
        <HeroScene />

      </div>

      <div className="relative z-10 flex h-full items-center px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs tracking-[0.35em] text-white/50">
            NOIR ESTATES / 01
          </p>

          <h1 className="text-[clamp(4rem,10vw,10rem)] font-light leading-[0.8] tracking-[-0.06em] text-white">
            LIVE
            <br />
            BEYOND
            <br />
            ORDINARY.
          </h1>

          <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
            Contemporary residences designed around modern living.
          </p>

          <button className="mt-8 border border-white/20 px-6 py-3 text-xs tracking-[0.2em] text-white transition hover:bg-white hover:text-black">
            EXPLORE RESIDENCE →
          </button>
        </div>
      </div>
    </section>
  );
}

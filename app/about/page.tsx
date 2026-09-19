"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#111111] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/property6.webp"
            alt="AMEN residence"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-24 lg:px-16">
          <p className="mb-6 text-[10px] tracking-[0.35em] text-white/50">
            AMEN / ABOUT
          </p>

          <h1 className="max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[9rem]">
            More than
            <br />
            an address.
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-7 text-[10px] tracking-[0.35em] text-white/30">
              OUR PHILOSOPHY
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[6.5rem]">
              We believe a home
              <br />
              should have
              <br />
              <span className="text-white/30">a sense of place.</span>
            </h2>
          </div>

          <div className="max-w-md lg:mt-24 lg:justify-self-end">
            <p className="text-sm leading-7 text-white/50">
              AMEN takes a considered approach to real estate. We look beyond
              size and price to discover residences defined by architecture,
              character, setting and the way they make people feel.
            </p>

            <p className="mt-6 text-sm leading-7 text-white/50">
              From contemporary city homes to secluded residences, we believe
              the right property should feel considered long before it feels
              luxurious.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-12 md:pb-40 lg:px-16">
        <div className="overflow-hidden">
          <motion.img
            src="/images/property1.webp"
            alt="AMEN architectural residence"
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40 lg:px-16">
          <p className="mb-16 text-[10px] tracking-[0.35em] text-white/30">
            OUR APPROACH
          </p>

          <div className="grid gap-px border-y border-white/10 md:grid-cols-3">
            <Approach
              number="01"
              title="Architecture"
              text="We value thoughtful design, proportion and materials that give a residence its identity."
            />

            <Approach
              number="02"
              title="Place"
              text="Location matters. We look for homes that belong to their surroundings rather than simply occupying them."
            />

            <Approach
              number="03"
              title="Living"
              text="A beautiful property should also feel effortless to live in. Function and atmosphere matter equally."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f2efe9] text-[#111111]">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40 lg:px-16">
          <p className="mb-6 text-[10px] tracking-[0.35em] text-black/35">
            FIND YOUR PLACE
          </p>

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[6rem]">
              Somewhere worth
              <br />
              living for.
            </h2>

            <Link
              href="/properties"
              className="inline-flex w-fit items-center gap-5 border border-black/20 px-7 py-4 text-[10px] tracking-[0.2em] transition duration-300 hover:bg-[#111111] hover:text-white"
            >
              EXPLORE RESIDENCES
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Approach({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-10 md:last:border-r-0">
      <span className="text-[9px] tracking-[0.25em] text-white/30">
        {number}
      </span>

      <h3 className="mt-16 text-3xl font-light tracking-[-0.03em] md:text-4xl">
        {title}
      </h3>

      <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
        {text}
      </p>
    </div>
  );
}
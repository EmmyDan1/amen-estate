"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const properties = [
  {
    number: "01",
    name: "Adebayo Residence",
    location: "Ikoyi, Lagos",
    type: "Private Residence",
    image: "/images/property1.webp",
  },
  {
    number: "02",
    name: "Eko House",
    location: "Victoria Island, Lagos",
    type: "Modern Estate",
    image: "/images/featuresImg2.webp",
  },
  {
    number: "03",
    name: "Palm Residence",
    location: "Lekki Phase 1, Lagos",
    type: "Contemporary Residence",
    image: "/images/featuresImg3.webp",
  },
];

export default function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="relative overflow-hidden bg-[#f2efe9] text-[#111111]"
    >
      {/* Intro */}
      <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-40 lg:px-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.35em] text-black/40">
              AMEN ESTATES / COLLECTION
            </p>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[6.5rem]">
              Selected
              <br />
              residences.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-black/50">
            A considered collection of exceptional properties, selected for
            their architecture, setting and enduring character.
          </p>
        </div>
      </div>

      {/* Properties */}
      <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-12 lg:px-16">
        <div className="space-y-28 md:space-y-40">
          {properties.map((property, index) => (
            <PropertyItem
              key={property.name}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom transition */}
      <div className="h-24 bg-[#111111]" />
    </section>
  );
}

function PropertyItem({
  property,
  index,
}: {
  property: (typeof properties)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

 
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);


  const contentY = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.04, 1, 1.04]
  );

  return (
    <motion.article
      ref={ref}
      className={`group ${
        index % 2 !== 0 ? "md:ml-auto md:max-w-[82%]" : ""
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#ddd7cd]">
        <div className="aspect-[16/9] overflow-hidden md:aspect-[1.85/1]">
          <motion.img
            src={property.image}
            alt={property.name}
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="h-[112%] w-full object-cover"
          />
        </div>

        {/* Number */}
        <div className="absolute left-5 top-5 md:left-8 md:top-8">
          <span className="text-[10px] tracking-[0.3em] text-white/70">
            {property.number}
          </span>
        </div>

        {/* View */}
        <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition duration-500 group-hover:bg-white group-hover:text-black">
            <span className="text-lg">↗</span>
          </div>
        </div>
      </div>

      {/* Information */}
      <motion.div
        style={{ y: contentY }}
        className="flex flex-col justify-between gap-6 border-b border-black/10 py-7 md:flex-row md:items-start"
      >
        <div>
          <h3 className="text-3xl font-light tracking-[-0.025em] md:text-4xl">
            {property.name}
          </h3>

          <p className="mt-2 text-xs tracking-[0.12em] text-black/45">
            {property.location}
          </p>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-[0.18em] text-black/45">
          <span>{property.type}</span>
          <span>Explore →</span>
        </div>
      </motion.div>
    </motion.article>
  );
}
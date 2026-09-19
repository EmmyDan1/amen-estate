"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const property = {
  name: "The Hawthorne",
  location: "Austin, Texas",
  type: "Private Residence",
  price: "$2.85M",
  beds: 4,
  baths: 4,
  area: "4,280 sq ft",
  description:
    "The Hawthorne is a contemporary residence shaped around light, space and a quiet connection to its surroundings. Expansive glazing, natural materials and considered outdoor spaces create a home designed for modern living.",
  images: [
    "/images/property1.webp",
    "/images/properties/living1.webp",
    "/images/properties/kitchen1.webp",
    "/images/properties/bedroom1.webp",
    "/images/properties/bathroom1.webp",
    "/images/properties/outdoor1.webp",
  ],
};

export default function PropertyPage() {
  return (
    <main className="bg-[#f2efe9] text-[#111111]">
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[650px] overflow-hidden bg-black">
        <motion.img
          src={property.images[0]}
          alt={property.name}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1600px] px-6 pb-10 md:px-12 md:pb-14 lg:px-16">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-white/60">
              {property.type.toUpperCase()}
            </p>

            <h1 className="text-6xl font-light tracking-[-0.05em] text-white md:text-8xl lg:text-[9rem]">
              {property.name}
            </h1>

            <div className="mt-5 flex items-center gap-4 text-xs tracking-[0.15em] text-white/65">
              <span>{property.location}</span>
              <span className="h-px w-8 bg-white/30" />
              <span>{property.price}</span>
            </div>
          </div>
        </div>

        <Link
          href="/properties"
          className="absolute left-6 top-28 text-[10px] tracking-[0.2em] text-white/70 transition hover:text-white md:left-12 lg:left-16"
        >
          ← ALL RESIDENCES
        </Link>
      </section>

      {/* Property overview */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.3em] text-black/35">
              THE RESIDENCE
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-[1] tracking-[-0.04em] md:text-6xl">
              Architecture designed
              <br />
              around living.
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-sm leading-7 text-black/55">
              {property.description}
            </p>

            <div className="mt-12 grid grid-cols-3 border-y border-black/10 py-6">
              <Detail label="Bedrooms" value={`${property.beds}`} />
              <Detail label="Bathrooms" value={`${property.baths}`} />
              <Detail label="Interior" value={property.area} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-12 lg:px-16">
        <div className="grid gap-5 md:grid-cols-2">
          {property.images.slice(1).map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              className={`overflow-hidden ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <motion.img
                src={image}
                alt={`${property.name} ${index + 2}`}
                className={`w-full object-cover ${
                  index === 0
                    ? "aspect-[2/1]"
                    : "aspect-[4/3]"
                }`}
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.9 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-6 text-[10px] tracking-[0.3em] text-white/35">
                PRIVATE ENQUIRIES
              </p>

              <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Make this
                <br />
                residence yours.
              </h2>
            </div>

            <div>
              <p className="max-w-sm text-sm leading-7 text-white/45">
                Request a private viewing or speak with a Noir Estates
                representative about The Hawthorne.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-5 border border-white/20 px-7 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                REQUEST A VIEWING
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.18em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-sm">{value}</p>
    </div>
  );
}
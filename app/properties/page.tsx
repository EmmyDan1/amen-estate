"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const properties = [
  {
    id: "adebayo-residence",
    name: "Adebayo Residence",
    location: "Ikoyi, Lagos",
    type: "Private Residence",
    price: "₦1.85B",
    beds: 4,
    baths: 4,
    area: "4,280 sq ft",
    image: "/images/property1.webp",
  },
  {
    id: "eko-house",
    name: "Eko House",
    location: "Victoria Island, Lagos",
    type: "Modern Estate",
    price: "₦2.40B",
    beds: 5,
    baths: 5,
    area: "5,120 sq ft",
    image: "/images/property2.webp",
  },
  {
    id: "palm-residence",
    name: "Palm Residence",
    location: "Lekki Phase 1, Lagos",
    type: "Contemporary Residence",
    price: "₦1.65B",
    beds: 4,
    baths: 5,
    area: "4,860 sq ft",
    image: "/images/property3.webp",
  },
  {
    id: "cedar-house",
    name: "Cedar House",
    location: "Maitama, Abuja",
    type: "Country Estate",
    price: "₦1.95B",
    beds: 5,
    baths: 4,
    area: "4,540 sq ft",
    image: "/images/property4.webp",
  },
  {
    id: "waterside-residence",
    name: "Waterside Residence",
    location: "Banana Island, Lagos",
    type: "Waterfront Residence",
    price: "₦4.20B",
    beds: 5,
    baths: 6,
    area: "5,780 sq ft",
    image: "/images/property5.webp",
  },
  {
    id: "hill-house",
    name: "Hill House",
    location: "Asokoro, Abuja",
    type: "Luxury Residence",
    price: "₦2.75B",
    beds: 4,
    baths: 4,
    area: "4,610 sq ft",
    image: "/images/property4.webp",
  },
];

const locations = [
  "All locations",
  "Ikoyi, Lagos",
  "Victoria Island, Lagos",
  "Lekki Phase 1, Lagos",
  "Maitama, Abuja",
  "Asokoro, Abuja",
];

const types = [
  "All types",
  "Private Residence",
  "Modern Estate",
  "Contemporary Residence",
  "Country Estate",
  "Waterfront Residence",
  "Mountain Residence",
];

export default function PropertiesPage() {
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState("All types");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch =
        location === "All locations" ||
        property.location.startsWith(location);

      const typeMatch =
        type === "All types" || property.type === type;

      return locationMatch && typeMatch;
    });
  }, [location, type]);

  return (
    <main className="min-h-screen bg-[#f2efe9] text-[#111111]">
      {/* Header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-16">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <p className="mb-6 text-[10px] tracking-[0.35em] text-black/40">
                NOIR ESTATES / COLLECTION
              </p>

              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[9rem]">
                Residences
              </h1>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/50">
              Explore a considered collection of exceptional homes selected
              for their architecture, setting and character.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
<section className="sticky top-20 z-30 border-y border-black/[0.08] bg-[#f2efe9]/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-16">
    
    {/* Filters */}
    <div className="flex min-w-0 items-center gap-5">
      <span className="hidden shrink-0 text-[9px] font-medium tracking-[0.25em] text-black/35 md:block">
        FILTER
      </span>

     <div className="flex min-w-0 gap-2 overflow-visible pb-1">
        <Filter
          value={location}
          options={locations}
          onChange={setLocation}
        />

        <Filter
          value={type}
          options={types}
          onChange={setType}
        />
      </div>
    </div>

    {/* Result count */}
    <div className="flex shrink-0 items-center gap-3">
      <span className="hidden h-px w-8 bg-black/15 sm:block" />

      <p className="text-[9px] font-medium tracking-[0.22em] text-black/40">
        {filteredProperties.length.toString().padStart(2, "0")}
        <span className="ml-2">RESIDENCES</span>
      </p>
    </div>

  </div>
</section>

      {/* Grid */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
        {filteredProperties.length > 0 ? (
          <motion.div
            layout
            className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-x-10 lg:gap-y-24"
          >
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-sm text-black/40">
              No residences match your selection.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function Filter({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative shrink-0">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={`flex h-10 min-w-[150px] items-center justify-between gap-8 rounded-full border px-4 text-left text-[10px] tracking-[0.08em] transition-all duration-300 ${
          open
            ? "border-black/30 bg-white text-black"
            : "border-black/[0.12] bg-white/40 text-black/60 hover:border-black/25 hover:bg-white/70"
        }`}
      >
        <span className="truncate">{value}</span>

        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="shrink-0 text-black/40"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
          >
            {options.map((option) => {
              const active = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[10px] tracking-[0.06em] transition-colors duration-200 ${
                    active
                      ? "bg-[#111111] text-white"
                      : "text-black/55 hover:bg-black/[0.045] hover:text-black"
                  }`}
                >
                  <span>{option}</span>

                  {active && (
                    <span className="ml-4 text-[9px] text-white/60">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function PropertyCard({
  property,
  index,
}: {
  property: (typeof properties)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="relative overflow-hidden bg-[#ddd7cd]">
          <div className="aspect-[4/3] overflow-hidden">
            <motion.img
              src={property.image}
              alt={property.name}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          <div className="absolute left-5 top-5">
            <span className="bg-black/30 px-3 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
              {property.type.toUpperCase()}
            </span>
          </div>

          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/10 text-white backdrop-blur-sm transition duration-500 group-hover:bg-white group-hover:text-black">
            ↗
          </div>
        </div>

        <div className="flex justify-between gap-6 border-b border-black/10 py-6">
          <div>
            <h2 className="text-2xl font-light tracking-[-0.025em]">
              {property.name}
            </h2>

            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-black/40">
              {property.location}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm">{property.price}</p>

            <p className="mt-2 whitespace-nowrap text-[9px] tracking-[0.12em] text-black/35">
              {property.beds} BD · {property.baths} BA
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
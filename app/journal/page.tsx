import Link from "next/link";
import { journalPosts } from "@/src/data/journal";

export default function JournalPage() {
  return (
    <main className="bg-[#f2efe9] text-[#111111]">
      {/* Header */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48 lg:px-16">
        <p className="mb-7 text-[10px] tracking-[0.35em] text-black/35">
          AMEN / JOURNAL
        </p>

        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <h1 className="max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[9rem]">
            Thoughts on
            <br />
            <span className="text-black/30">living well.</span>
          </h1>

          <p className="max-w-sm text-sm leading-7 text-black/50">
            Perspectives on architecture, property, place and the details that
            shape the way we live.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          {journalPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group grid gap-8 border-b border-black/10 py-12 md:grid-cols-[80px_1fr_1fr] md:items-center md:gap-12 md:py-16"
            >
              {/* Number */}
              <span className="text-[10px] tracking-[0.2em] text-black/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] text-black/35">
                    <span>{post.category}</span>
                    <span className="h-px w-5 bg-black/20" />
                    <span>{post.date}</span>
                  </div>

                  <h2 className="mt-6 max-w-xl text-3xl font-light leading-[1] tracking-[-0.035em] transition-colors duration-300 group-hover:text-black/50 md:text-5xl">
                    {post.title}
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-black/45">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.18em] text-black/35">
                    {post.readTime}
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#111111] px-6 py-28 text-white md:px-12 md:py-40 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-white/30">
            AMEN / PERSPECTIVE
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-[6rem]">
            Architecture.
            <br />
            Place.
            <br />
            <span className="text-white/30">Living.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
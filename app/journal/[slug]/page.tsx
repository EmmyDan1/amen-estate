import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/src/data/journal";

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = journalPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f2efe9] text-[#111111]">
      {/* Header */}
      <section className="mx-auto max-w-[1600px] px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48 lg:px-16">
        <Link
          href="/journal"
          className="mb-16 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-black/40 transition hover:text-black"
        >
          ← JOURNAL
        </Link>

        <div className="max-w-6xl">
          <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] text-black/35">
            <span>{post.category}</span>
            <span className="h-px w-5 bg-black/20" />
            <span>{post.date}</span>
            <span className="h-px w-5 bg-black/20" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-8 text-6xl font-light leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[8rem]">
            {post.title}
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-black/50">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-[900px] px-6 py-24 md:py-32">
        <p className="text-lg leading-9 text-black/65 md:text-xl md:leading-10">
          {post.excerpt}
        </p>

        <div className="mt-16 space-y-8 text-sm leading-8 text-black/55 md:text-base md:leading-9">
          <p>
            Great residential architecture begins with a relationship between
            people and place. A home should respond to its surroundings,
            allowing its architecture, materials and spaces to work together
            naturally.
          </p>

          <p>
            At AMEN, we believe the details matter. The proportions of a room,
            the quality of natural light, the relationship between interior and
            exterior spaces, and the character of the neighbourhood all
            contribute to how a residence feels.
          </p>

          <p>
            The most memorable properties are rarely defined by size alone.
            They are defined by intention — by the decisions that make a place
            feel distinctive, comfortable and connected to the life happening
            around it.
          </p>
        </div>
      </article>

      {/* Back to Journal */}
      <section className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-10 md:px-12 lg:px-16">
          <Link
            href="/journal"
            className="text-[10px] tracking-[0.2em] text-black/45 transition hover:text-black"
          >
            ← BACK TO JOURNAL
          </Link>

          <Link
            href="/properties"
            className="text-[10px] tracking-[0.2em] text-black/45 transition hover:text-black"
          >
            EXPLORE RESIDENCES →
          </Link>
        </div>
      </section>
    </main>
  );
}
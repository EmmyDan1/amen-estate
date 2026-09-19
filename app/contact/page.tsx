import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#f2efe9] text-[#111111]">
      <section className="min-h-[75vh] px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-7 text-[10px] tracking-[0.35em] text-black/35">
            AMEN / CONTACT
          </p>

          <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-end">
            <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[8rem]">
              Let's find
              <br />
              your place.
            </h1>

            <div className="max-w-sm">
              <p className="text-sm leading-7 text-black/55">
                Whether you're searching for a residence or looking to discuss
                a property, we'd be glad to hear from you.
              </p>

              <a
                href="mailto:hello@amenestates.com"
                className="mt-8 inline-flex items-center gap-4 border-b border-black/20 pb-3 text-[10px] tracking-[0.2em] transition hover:border-black"
              >
                HELLO@AMENESTATES.COM
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto grid max-w-[1600px] gap-px px-6 md:grid-cols-3 md:px-12 lg:px-16">
          <ContactBlock
            label="LAGOS"
            value="Ikoyi, Lagos"
          />

          <ContactBlock
            label="EMAIL"
            value="danielfrontend.com"
          />

          <ContactBlock
            label="ENQUIRIES"
            value="+234 09131276935"
          />
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="text-[22px] font-semibold tracking-[0.18em]">
              AMEN
            </p>
            <p className="mt-3 max-w-xs text-xs leading-6 text-white/40">
              Exceptional homes, thoughtfully selected.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex w-fit items-center gap-4 border border-white/20 px-6 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            EXPLORE RESIDENCES
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ContactBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-black/10 py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
      <p className="text-[9px] tracking-[0.25em] text-black/35">
        {label}
      </p>

      <p className="mt-5 text-sm text-black/65">
        {value}
      </p>
    </div>
  );
}
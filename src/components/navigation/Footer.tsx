import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
        
          <div>
            <p className="text-2xl font-semibold tracking-[0.18em]">
              AMEN
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              Exceptional homes, thoughtfully selected.
              Architecture, place and living — considered together.
            </p>
          </div>

        
          <div>
            <p className="mb-6 text-[9px] tracking-[0.3em] text-white/30">
              EXPLORE
            </p>

            <nav className="flex flex-col gap-4">
              <Link
                href="/properties"
                className="w-fit text-xs text-white/60 transition hover:text-white"
              >
                Properties
              </Link>

              <Link
                href="/about"
                className="w-fit text-xs text-white/60 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="w-fit text-xs text-white/60 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[9px] tracking-[0.3em] text-white/30">
              CONTACT
            </p>

            <div className="flex flex-col gap-4 text-xs text-white/60">
              <a
                href="mailto:hello@amenestates.com"
                className="w-fit transition hover:text-white"
              >
                hello@amenestates.com
              </a>

              <span>Ikoyi, Lagos</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] tracking-[0.15em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© 2026 AMEN ESTATES</span>

          <span>SELECTED WITH INTENTION</span>
        </div>
      </div>
    </footer>
  );
}
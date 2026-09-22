import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logoImg from "@/assets/logo.png";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Listed Books", href: "/listed-books" },
  { label: "Pages to Read", href: "/pages-to-read" },
];

const supportLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy policy", href: "/privacy" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Twitter", href: "#", icon: FaTwitter },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src={logoImg}
                alt="Book Vibe Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-playfair text-2xl font-bold tracking-tight">
                Book Vibe
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              A thoughtful space for curious readers to discover their next
              favorite story and keep every reading goal within reach.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-(--secondary-color) hover:text-(--secondary-color)"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Support
            </h2>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Stay in the story
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Get fresh recommendations and reading inspiration in your inbox.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-(--secondary-color)"
              />
              <button
                type="submit"
                className="rounded-xl bg-(--primary) px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Join us
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Book Vibe. Developer MrRakib5007.</p>
          <p>Read more. Feel more.</p>
        </div>
      </div>
    </footer>
  );
}

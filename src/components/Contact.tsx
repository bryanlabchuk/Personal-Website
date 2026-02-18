import Link from "next/link";

const links = [
  { href: "https://github.com/bryanlabchuk", label: "GitHub" },
  { href: "https://linkedin.com/in/bryanlabchuk", label: "LinkedIn" },
  { href: "mailto:hello@example.com", label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-stone-500">
          Contact
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-stone-400">
          Open to consulting, speaking, or collaboration on security projects.
        </p>
        <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-white hover:decoration-stone-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

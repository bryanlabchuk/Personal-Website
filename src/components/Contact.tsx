import Link from "next/link";

const links = [
  { href: "mailto:hello@bryanlabchuk.com", label: "Email" },
  { href: "https://linkedin.com/in/bryanlabchuk", label: "LinkedIn" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-500">
          Next step
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-stone-400">
          Need a risk assessment, a cloud security review, or help with
          compliance? Reach out and we’ll sort out fit and scope.
        </p>
        <div className="flex flex-wrap gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-stone-400 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-white hover:decoration-stone-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

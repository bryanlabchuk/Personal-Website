import Link from "next/link";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-500">
          Next step
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-stone-400">
          Need home network and device hardening, a risk assessment, cloud security review, or help with compliance?
          Use the form below. I respond within a business day or two on business days.
        </p>
        <ContactForm />
        <p className="mt-8 text-sm text-stone-500">
          Prefer LinkedIn?{" "}
          <Link
            href="https://linkedin.com/in/bryanlabchuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline underline-offset-4 hover:text-white"
          >
            Connect there
          </Link>
        </p>
      </div>
    </section>
  );
}

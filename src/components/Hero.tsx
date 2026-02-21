import Link from "next/link";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-medium tracking-tight text-white sm:text-5xl">
          Bryan Labchuk
        </h1>
        <p className="mb-2 text-lg text-stone-400">
          Cybersecurity & IT Consulting
        </p>
        <p className="mb-10 text-stone-500">
          Home network & device security for VIPs and creators · M365, Azure, AWS, DevSecOps · ICS, ISO 27000, NIST, ITSG-33
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center rounded border border-stone-600 bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-stone-500 hover:bg-stone-800"
        >
          Schedule a consultation
        </Link>
      </div>
    </section>
  );
}

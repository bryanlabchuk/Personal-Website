export function About() {
  return (
    <section id="about" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-stone-500">
          About
        </h2>
        <p className="text-lg leading-relaxed text-stone-400">
          I work on identifying vulnerabilities before they become incidents,
          designing secure architectures, and responding when things go wrong.
          Background in network security, application security, and threat
          analysis.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-400">
          Outside of work I spend time on music, games, and books—you can expect
          those sections here eventually.
        </p>
      </div>
    </section>
  );
}

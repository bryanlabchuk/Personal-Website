const canDo = [
  "Risk assessments and gap analyses",
  "Control framework alignment (ISO, NIST, ITSG-33)",
  "Cloud security reviews and hardening",
  "Policy development and governance",
  "Training, awareness, and reporting",
  "ICS/OT security assessments",
  "Project-based and time-boxed engagements",
];

const cannotDo = [
  "24/7 SOC or managed detection",
  "Software or hardware sales",
  "Full-time staff augmentation",
  "Emergency incident response (on-call)",
];

export function Scope() {
  return (
    <section id="scope" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-stone-500">
          Scope
        </h2>
        <p className="mb-12 max-w-2xl text-stone-400">
          To save us both time—here’s what I take on and what I leave to others.
        </p>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600/90">
              What I do
            </h3>
            <ul className="space-y-2 text-stone-400">
              {canDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600/70">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-stone-500">
              What I don’t do
            </h3>
            <ul className="space-y-2 text-stone-500">
              {cannotDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-stone-600">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

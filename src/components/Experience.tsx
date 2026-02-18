const experience = [
  {
    role: "Security Engineer",
    org: "Example Corp",
    period: "2020 – Present",
    description:
      "Led vulnerability assessments and penetration testing. Built internal security tooling and improved incident response procedures.",
  },
  {
    role: "Security Analyst",
    org: "Previous Company",
    period: "2018 – 2020",
    description:
      "Monitored threats, investigated alerts, and contributed to SOC operations. Conducted forensic analysis on security incidents.",
  },
];

const skills = [
  "Vulnerability Assessment",
  "Incident Response",
  "Network Security",
  "Application Security",
  "Threat Analysis",
  "Security Architecture",
  "Python",
  "Bash",
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-stone-500">
          Experience
        </h2>
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.role}>
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <h3 className="text-lg font-medium text-white">{job.role}</h3>
                <span className="text-stone-500">{job.org}</span>
              </div>
              <p className="mb-2 text-sm text-stone-500">{job.period}</p>
              <p className="leading-relaxed text-stone-400">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-500">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-stone-700/50 px-3 py-1.5 text-sm text-stone-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

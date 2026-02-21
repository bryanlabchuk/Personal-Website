const services = [
  {
    title: "Home network & device security",
    items: [
      "For VIPs, creators, and anyone with high public exposure",
      "Hardening phones, laptops, tablets — devices and OS settings",
      "App security and safe use habits (social, DMs, accounts)",
      "Home WiFi and router hardening; IoT and smart home security",
      "Phishing and social engineering awareness — you get targeted",
    ],
  },
  {
    title: "Cloud security & DevSecOps",
    items: [
      "Hardening M365, Azure, and AWS",
      "Security in CI/CD pipelines",
      "Identity and access management",
    ],
  },
  {
    title: "Governance, risk & compliance",
    items: [
      "ISO 27001/27002, NIST CSF, ITSG-33",
      "Risk assessments and reporting",
      "Policy and control development",
    ],
  },
  {
    title: "ICS & critical infrastructure",
    items: [
      "Industrial control system security",
      "Bridging IT and OT environments",
      "Securing operational technology",
    ],
  },
  {
    title: "Training & awareness",
    items: [
      "Tailored security training",
      "Awareness programs",
      "Reporting for stakeholders",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-stone-800/50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-stone-500">
          Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-stone-800/50 bg-stone-900/30 p-6"
            >
              <h3 className="mb-4 font-medium text-white">{service.title}</h3>
              <ul className="space-y-2 text-sm text-stone-400">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

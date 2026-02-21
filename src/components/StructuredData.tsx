const BASE_URL = "https://www.bryanlabchuk.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Labchuk",
  url: BASE_URL,
  jobTitle: "Cybersecurity & IT Consultant",
  description:
    "Cybersecurity consultant specializing in home network and device security for VIPs, creators, and high-profile individuals; cloud security (M365, Azure, AWS), DevSecOps, ICS controls, ISO 27000, NIST, ITSG-33, risk assessment, governance, and compliance.",
  knowsAbout: [
    "Cybersecurity",
    "Home network security",
    "Device hardening",
    "Cloud security",
    "M365",
    "Azure",
    "AWS",
    "DevSecOps",
    "ICS security",
    "ISO 27000",
    "NIST",
    "ITSG-33",
    "Risk assessment",
    "Governance",
    "Compliance",
    "VIP security",
    "Celebrity IT security",
    "Influencer cybersecurity",
  ],
  areaServed: "Worldwide",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Labchuk Cybersecurity & IT Consulting",
  url: BASE_URL,
  description:
    "Cybersecurity and IT consulting for high-profile individuals, creators, influencers, celebrity crisis management teams, and organizations. Home network and device security, cloud security, DevSecOps, ICS, GRC, risk assessment, and compliance.",
  provider: {
    "@type": "Person",
    name: "Bryan Labchuk",
  },
  serviceType: [
    "Home network security",
    "Device hardening",
    "VIP cybersecurity",
    "Celebrity IT security",
    "Cloud security consulting",
    "Risk assessment",
    "Governance and compliance",
    "ICS security",
    "Security training",
  ],
  areaServed: "Worldwide",
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}

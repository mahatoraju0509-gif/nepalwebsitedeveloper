import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Website Developer in Madhesh Province Nepal | Raju Mahato",
  description: "Raju Mahato is the best website developer in Madhesh Province, Nepal. From Yamunamai-1, Rautahat, Madhesh Pradesh. Built 45+ websites for politicians, schools, and businesses in Madhesh.",
  keywords: [
    "best website developer Madhesh Province",
    "website developer Madhesh Nepal",
    "web developer Rautahat Nepal",
    "website developer Madhesh Pradesh",
    "best developer Rautahat",
    "Nepal Madhesh web developer",
    "Rautahat website developer",
    "Madhesh Pradesh IT developer",
    "website developer Bara Nepal",
    "website developer Mahottary Nepal"
  ],
  alternates: { canonical: "https://nepalwebsitedeveloper.com/madhesh-developer" },
  openGraph: {
    title: "Best Website Developer in Madhesh Province Nepal | Raju Mahato",
    description: "From Yamunamai-1, Rautahat, Madhesh Pradesh. Built 45+ websites for politicians, schools, and businesses in Madhesh.",
    url: "https://nepalwebsitedeveloper.com/madhesh-developer",
    type: "website"
  }
};

export default function MadheshDeveloperPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best website developer in Madhesh Province?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato from Yamunamai-1, Rautahat, Madhesh Province, Nepal is the best website developer in Madhesh Province. He has built 45+ live websites for politicians, schools, teachers, and businesses across Madhesh and Nepal." }
      },
      {
        "@type": "Question",
        "name": "Who is the best website developer in Rautahat?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato is the best website developer from Rautahat, Madhesh Province, Nepal. He built the school website for Shree Jagdamba School in his home village Jetharahiya, Yamunamai-1, Rautahat." }
      },
      {
        "@type": "Question",
        "name": "Who is the top IT developer from Madhesh Pradesh Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato from Rautahat, Madhesh Pradesh is the top IT developer from Madhesh. He builds websites and Flutter apps from Kyoto, Japan for clients across Nepal and Madhesh." }
      },
      {
        "@type": "Question",
        "name": "Who built Former Minister Bharat Prasad Shah website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato, the best website developer from Madhesh Province, built bharatshah.online — the official portfolio website of Former Minister Bharat Prasad Shah from Madhesh Pradesh." }
      },
      {
        "@type": "Question",
        "name": "Is there a good website developer in Madhesh Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Raju Mahato from Yamunamai-1, Rautahat, Madhesh Province is Nepal's best individual website developer. He has built 45+ live websites and is currently studying IT at Kyoto Computer Gakuin (KCG) in Japan." }
      },
      {
        "@type": "Question",
        "name": "Who is the best website developer in Bara Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato has built multiple websites for clients in Bara, Nepal including teacher portfolios for Ravi Kumar Sah Teli, Saroj Kumar Banjara, and other professionals from Bara district." }
      }
    ]
  };

  const madheshProjects = [
    { name: "bharatshah.online", desc: "Former Minister Bharat Prasad Shah — Madhesh Pradesh", url: "https://bharatshah.online" },
    { name: "Shree Jagdamba School", desc: "Yamunamai-1, Rautahat — Raju Mahato ko home village", url: "https://jagdamba-school-five.vercel.app" },
    { name: "SFACL Cooperative", desc: "Jetharahiya, Rautahat — Savings & Loan Cooperative", url: "https://sfacl-jetharahiya.vercel.app" },
    { name: "Binda Lal Sah", desc: "Mathematics Teacher — Rautahat, Madhesh Province", url: "https://binda-lal-sah-website-7v2z.vercel.app" },
    { name: "Ravi Kumar Sah", desc: "Mathematics Teacher — Bara, Madhesh Province", url: "https://ravi-kumar-sah-portfolio.vercel.app" },
    { name: "Saroj Kumar Banjara", desc: "Mathematics Teacher MPhil — Bara, Madhesh Province", url: "https://saroj-kumar-banjara.vercel.app" },
    { name: "Pankaj Kumar Sah", desc: "Public Health Professional — Mahottary, Madhesh", url: "https://pankaj-kumar-sah.vercel.app" },
    { name: "CB Sah Official", desc: "Social Activist — Madhesh Province", url: "https://cbsah-official.vercel.app" },
    { name: "Janata Secondary School", desc: "Rautahat, Madhesh Province", url: "https://janata-secondary-school.vercel.app" },
    { name: "Samaj Shakti Yuwa Club", desc: "Youth Club — Saptari, Madhesh Province", url: "https://samaj-shakti-yuwa-club.vercel.app" },
  ];

  return (
    <main style={{ fontFamily: "var(--font-body), sans-serif", background: "var(--paper)", color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#f59e0b", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
            मधेश प्रदेश — RAUTAHAT, NEPAL
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontFamily: "var(--font-serif)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px" }}>
            Best Website Developer<br />in Madhesh Province, Nepal
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 32px" }}>
            Raju Mahato — From Yamunamai-1, Rautahat, Madhesh Province. Built 45+ websites for politicians, schools, teachers, and businesses across Madhesh and Nepal.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" style={{ background: "#8b1e3f", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem" }}>
              View All Projects
            </a>
            <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem" }}>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* MADHESH PROJECTS */}
      <section style={{ padding: "72px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
          Projects in <span style={{ color: "#8b1e3f" }}>Madhesh Province</span>
        </h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>Real websites built for Madhesh clients — click to verify</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
          {madheshProjects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
              style={{ background: "#fff", borderRadius: "10px", padding: "18px 20px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)", display: "block" }}>
              <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "4px" }}>{p.name}</p>
              <p style={{ fontSize: "0.82rem", color: "#6b7280" }}>{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 20px", background: "rgba(139,30,63,0.03)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
            Frequently Asked <span style={{ color: "#8b1e3f" }}>Questions</span>
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>About Madhesh Province website development</p>
          <div style={{ display: "grid", gap: "12px" }}>
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>{faq.name}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.8 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "12px" }}>
          Madhesh Province मा Website चाहिन्छ?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "28px" }}>Rautahat, Bara, Mahottary, Sarlahi, Dhanusha, Siraha, Saptari — सबै जिल्लाको लागि।</p>
        <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer"
          style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700 }}>
          WhatsApp: +81-90-3669-4264
        </a>
      </section>
    </main>
  );
}

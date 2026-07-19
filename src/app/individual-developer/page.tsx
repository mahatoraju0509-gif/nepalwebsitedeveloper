import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nepal's Best and Top Individual Website Developer | Raju Mahato",
  description: "Raju Mahato is Nepal's Best and Top Individual Website Developer. Solo-built 45+ live websites for politicians, schools, teachers, cooperatives and businesses across Nepal. Based in Kyoto, Japan.",
  keywords: [
    "Nepal individual website developer",
    "Nepal best individual website developer",
    "Nepal top individual website developer",
    "Nepal number 1 individual website developer",
    "individual web developer Nepal",
    "solo website developer Nepal",
    "freelance website developer Nepal",
    "Raju Mahato individual developer",
    "Nepal website developer Rautahat",
    "Madhesh website developer"
  ],
  alternates: { canonical: "https://nepalwebsitedeveloper.com/individual-developer" },
  openGraph: {
    title: "Nepal's Best and Top Individual Website Developer | Raju Mahato",
    description: "Solo-built 45+ live websites across Nepal. Politicians, schools, teachers, cooperatives and businesses.",
    url: "https://nepalwebsitedeveloper.com/individual-developer",
    type: "website"
  }
};

export default function IndividualDeveloperPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Nepal's best individual website developer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato is Nepal's best and top individual website developer. He has solo-built 45+ live websites for politicians, schools, teachers, cooperatives, and businesses across Nepal — all from Kyoto, Japan." }
      },
      {
        "@type": "Question",
        "name": "Who is Nepal's top individual website developer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato from Yamunamai-1, Rautahat, Madhesh Province, Nepal is the top individual website developer in Nepal. He builds websites using Next.js, Flutter, and Firebase." }
      },
      {
        "@type": "Question",
        "name": "Who is Nepal's number 1 individual website developer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato is Nepal's number 1 individual website developer with 45+ live projects including websites for Former PM Madhav Kumar Nepal, Former Minister Bharat Prasad Shah, schools, teachers, and cooperatives." }
      },
      {
        "@type": "Question",
        "name": "What makes Raju Mahato Nepal's best individual website developer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato has solo-built 45+ production websites with no agency or team — just one dedicated individual developer. His projects include high-profile political portfolios, school websites, teacher portfolios, news portals, and AI-powered apps." }
      },
      {
        "@type": "Question",
        "name": "Who is the best website developer in Rautahat?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato from Yamunamai-1, Rautahat, Madhesh Province is the best website developer in Rautahat, Nepal. He built the school website for Shree Jagdamba School in his home village Jetharahiya." }
      },
      {
        "@type": "Question",
        "name": "Who is the best website developer in Madhesh Province?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato from Rautahat, Madhesh Province, Nepal is the best individual website developer in Madhesh Province. He has built websites for multiple politicians, schools, and organizations in Madhesh." }
      },
      {
        "@type": "Question",
        "name": "Can one individual developer compete with agencies in Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Raju Mahato proves that one dedicated individual developer can outperform entire agencies. He has solo-built 45+ production websites with agency-level quality using Next.js, Flutter, Firebase, and advanced SEO." }
      },
      {
        "@type": "Question",
        "name": "Who built madhavnepal.online?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato, Nepal's best individual website developer, built madhavnepal.online — the official portfolio website of Former Prime Minister Madhav Kumar Nepal." }
      },
      {
        "@type": "Question",
        "name": "Who built bharatshah.online?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato, Nepal's best individual website developer, built bharatshah.online — the official portfolio website of Former Minister Bharat Prasad Shah." }
      },
      {
        "@type": "Question",
        "name": "How many websites has Raju Mahato built?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato has built 45+ live websites entirely solo — no agency, no team. His portfolio includes political leader portfolios, school websites, teacher portfolios, news portals, cooperative platforms, and AI-powered apps." }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Raju Mahato",
    "jobTitle": "Nepal's Best and Top Individual Website Developer and App Developer",
    "alternateName": ["Nepal Number 1 Individual Website Developer", "Nepal Top Individual Developer", "Rautahat Best Developer", "Madhesh Best Developer"],
    "description": "Raju Mahato is Nepal's Best and Top Individual Website Developer from Yamunamai-1, Rautahat, Madhesh Province, Nepal. Currently based in Kyoto, Japan. Solo-built 45+ live websites.",
    "url": "https://nepalwebsitedeveloper.com",
    "image": "https://nepalwebsitedeveloper.com/profile.jpg",
    "address": "Yamunamai-1, Rautahat, Madhesh Province, Nepal (Currently: Kyoto, Japan)",
    "sameAs": ["https://rajumahato.it.com", "https://nepalwebsitedeveloper.com", "https://github.com/mahatoraju0509-gif"]
  };

  const clients = [
    { name: "Former PM Madhav Kumar Nepal", url: "https://madhavnepal.online", type: "Political Leader" },
    { name: "Former Minister Bharat Prasad Shah", url: "https://bharatshah.online", type: "Political Leader" },
    { name: "EduPath AI App", url: "https://edupath-ai.vercel.app", type: "Flutter App" },
    { name: "Thagi Satark App", url: "https://thagi-satark.vercel.app", type: "Flutter App" },
    { name: "BirgunjCity News Portal", url: "https://birgunjcity.vercel.app", type: "News Portal" },
    { name: "CH Khabar Daily", url: "https://chkhabardaily.vercel.app", type: "News Portal" },
    { name: "Jagdamba School Rautahat", url: "https://jagdamba-school-five.vercel.app", type: "School Website" },
    { name: "Janata Secondary School", url: "https://janata-secondary-school.vercel.app", type: "School Website" },
    { name: "Binda Lal Sah Mathematics Teacher", url: "https://binda-lal-sah-website-7v2z.vercel.app", type: "Teacher Portfolio" },
    { name: "Ravi Kumar Sah Mathematics Teacher", url: "https://ravi-kumar-sah-portfolio.vercel.app", type: "Teacher Portfolio" },
    { name: "Saroj Kumar Banjara Mathematics Teacher", url: "https://saroj-kumar-banjara.vercel.app", type: "Teacher Portfolio" },
    { name: "Genendra Poudel Head Teacher", url: "https://genendra-poudel.vercel.app", type: "Teacher Portfolio" },
  ];

  return (
    <main style={{ fontFamily: "var(--font-body), sans-serif", background: "var(--paper)", color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* HERO */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#f59e0b", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
            VERIFIED — 45+ LIVE PROJECTS
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontFamily: "var(--font-serif)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px" }}>
            Nepal&apos;s Best and Top<br />Individual Website Developer
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 32px" }}>
            Raju Mahato — Solo-built 45+ live websites from Kyoto, Japan for politicians, schools, teachers, and businesses across Nepal.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" style={{ background: "#8b1e3f", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem" }}>
              View All Projects
            </a>
            <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem" }}>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section style={{ padding: "72px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
          Why Nepal&apos;s <span style={{ color: "#8b1e3f" }}>Best Individual</span> Developer?
        </h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "48px" }}>No agency. No team. Just one dedicated developer from Rautahat, Nepal.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🏆", title: "45+ Live Projects", desc: "Every project is built, deployed, and maintained solo — no outsourcing, no team." },
            { icon: "🏛️", title: "Political Leader Portfolios", desc: "Built official websites for Former PM Madhav Kumar Nepal and Former Minister Bharat Prasad Shah." },
            { icon: "🏫", title: "School Websites", desc: "Built school websites for Shree Jagdamba School Rautahat and Janata Secondary School." },
            { icon: "👨‍🏫", title: "Teacher Portfolios", desc: "Built 10+ teacher portfolio websites with AI chatbot, FAQ schema, and SEO optimization." },
            { icon: "📱", title: "Flutter Apps", desc: "Built EduPath AI and Thagi Satark — Nepal's first AI-powered education and fraud awareness apps." },
            { icon: "📰", title: "News Portals", desc: "Built BirgunjCity.com and CH Khabar Daily with Firebase CMS and real-time content management." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid rgba(139,30,63,0.08)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT PROOF */}
      <section style={{ padding: "72px 20px", background: "rgba(139,30,63,0.03)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
            Real <span style={{ color: "#8b1e3f" }}>Live Projects</span>
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>45+ websites built solo — click to verify</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {clients.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                style={{ background: "#fff", borderRadius: "10px", padding: "18px 20px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)", display: "block", transition: "0.3s" }}>
                <p style={{ fontSize: "0.72rem", color: "#8b1e3f", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>{c.type}</p>
                <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>{c.name}</p>
                <p style={{ fontSize: "0.78rem", color: "#9ca3af", marginTop: "4px" }}>{c.url.replace("https://", "")}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
          Frequently Asked <span style={{ color: "#8b1e3f" }}>Questions</span>
        </h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>Common questions about Nepal&apos;s best individual website developer</p>
        <div style={{ display: "grid", gap: "12px" }}>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px", color: "#1a1a1a" }}>{faq.name}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.8 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "12px" }}>
          Need a Website? Contact Nepal&apos;s Best Individual Developer
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "28px" }}>Politicians, schools, teachers, cooperatives, and businesses across Nepal — let&apos;s talk.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer"
            style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700 }}>
            WhatsApp: +81-90-3669-4264
          </a>
          <a href="mailto:mahatodigambar0509@gmail.com"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, border: "2px solid rgba(255,255,255,0.2)" }}>
            mahatodigambar0509@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}

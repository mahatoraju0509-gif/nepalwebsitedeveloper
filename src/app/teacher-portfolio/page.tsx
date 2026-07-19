import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Portfolio Website Nepal | Free Service by Raju Mahato",
  description: "Raju Mahato builds free professional teacher portfolio websites for Nepal teachers. AI chatbot, FAQ schema, SEO optimized, dark mode, bilingual. 45+ live projects.",
  keywords: [
    "teacher portfolio website Nepal",
    "free teacher website Nepal",
    "teacher portfolio Nepal",
    "Nepal teacher website developer",
    "school teacher portfolio Nepal",
    "mathematics teacher portfolio Nepal",
    "English teacher portfolio Nepal",
    "teacher website Rautahat",
    "teacher website Madhesh"
  ],
  alternates: { canonical: "https://nepalwebsitedeveloper.com/teacher-portfolio" },
  openGraph: {
    title: "Teacher Portfolio Website Nepal | Free Service by Raju Mahato",
    description: "Free professional teacher portfolio websites with AI chatbot, FAQ schema, SEO optimization. Built by Nepal's best individual website developer.",
    url: "https://nepalwebsitedeveloper.com/teacher-portfolio",
    type: "website"
  }
};

export default function TeacherPortfolioPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who builds free teacher portfolio websites in Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato, Nepal's best individual website developer, builds free professional portfolio websites for teachers across Nepal. The service includes AI chatbot, FAQ schema, SEO optimization, dark mode, and bilingual support." }
      },
      {
        "@type": "Question",
        "name": "What features does a teacher portfolio website include?",
        "acceptedAnswer": { "@type": "Answer", "text": "Teacher portfolio websites built by Raju Mahato include: professional animated design, AI chatbot, education and experience timeline, skills section, achievements, FAQ (for Google ranking), contact with WhatsApp button, dark/light mode, bilingual Nepali/English, PWA offline support, and full SEO optimization." }
      },
      {
        "@type": "Question",
        "name": "How much does a teacher portfolio website cost in Nepal?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato provides teacher portfolio websites completely free as a service to Nepal's education sector. Market price for such websites is Rs. 50,000-1,00,000. Domain (.com Rs. 1,200/year or .online Rs. 400/year) is optional and paid by the teacher." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a teacher portfolio website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Raju Mahato can build a complete teacher portfolio website in as little as 10 minutes using his optimized template system. The teacher just needs to fill a Google Form with their details." }
      },
      {
        "@type": "Question",
        "name": "Will my name appear on Google with a teacher portfolio website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Teacher portfolio websites built by Raju Mahato include FAQ schema, Person schema, and full SEO optimization that helps your name appear in Google search results and potentially in Google's People Also Ask section." }
      }
    ]
  };

  const teachers = [
    { name: "Binda Lal Sah", subject: "Mathematics Teacher", location: "Rautahat", url: "https://binda-lal-sah-website-7v2z.vercel.app" },
    { name: "Ravi Kumar Sah Teli", subject: "Mathematics Teacher", location: "Bara", url: "https://ravi-kumar-sah-portfolio.vercel.app" },
    { name: "Saroj Kumar Banjara", subject: "Mathematics Teacher (MPhil)", location: "Bara", url: "https://saroj-kumar-banjara.vercel.app" },
    { name: "Genendra Poudel", subject: "Head Teacher, English & Sociology", location: "Bardiya", url: "https://genendra-poudel.vercel.app" },
    { name: "Lalit Thakuri", subject: "English Teacher", location: "Bhaktapur", url: "https://lalit-thakuri.vercel.app" },
    { name: "Shivjee Mukhiya", subject: "Technical Assistant Education", location: "Lamjung", url: "https://shivjee-mukhiya-official.vercel.app" },
    { name: "Rambabu Baitha", subject: "Mathematics Teacher", location: "Bara", url: "https://rambabu-baitha-maths-teacher-djpt.vercel.app" },
  ];

  const features = [
    { icon: "🤖", title: "AI Chatbot", desc: "Students can ask questions about the teacher directly on the website" },
    { icon: "📊", title: "FAQ Schema", desc: "Google मा नाम top मा आउँछ — People Also Ask section मा देखिन्छ" },
    { icon: "🌙", title: "Dark/Light Mode", desc: "Professional dark and light mode toggle" },
    { icon: "🌐", title: "Bilingual", desc: "Nepali र English दुवै भाषामा content" },
    { icon: "📱", title: "Mobile Friendly", desc: "सबै device मा perfectly fit हुने responsive design" },
    { icon: "⚡", title: "PWA Offline", desc: "Internet बिना पनि website चल्छ" },
    { icon: "🗺️", title: "Google Maps", desc: "School/office location Google Maps मा embed" },
    { icon: "📞", title: "WhatsApp Button", desc: "Direct WhatsApp contact button" },
  ];

  return (
    <main style={{ fontFamily: "var(--font-body), sans-serif", background: "var(--paper)", color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#f59e0b", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
            निःशुल्क सेवा — FREE SERVICE
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontFamily: "var(--font-serif)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px" }}>
            Teacher Portfolio Website<br />Nepal — Free Service
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 32px" }}>
            Professional portfolio website for Nepal teachers — AI chatbot, FAQ schema, SEO optimized. Market value Rs. 50,000-1,00,000. Completely free.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem" }}>
              Apply for Free Website
            </a>
            <a href="/" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "0.9rem", border: "2px solid rgba(255,255,255,0.2)" }}>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "72px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
          Website मा के-के <span style={{ color: "#8b1e3f" }}>हुन्छ?</span>
        </h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>Agency-level quality — completely free</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "6px" }}>{f.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHER EXAMPLES */}
      <section style={{ padding: "72px 20px", background: "rgba(139,30,63,0.03)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "8px", textAlign: "center" }}>
            Live <span style={{ color: "#8b1e3f" }}>Teacher Portfolios</span>
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>Click to see real examples</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {teachers.map((t, i) => (
              <a key={i} href={t.url} target="_blank" rel="noopener noreferrer"
                style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)", display: "block" }}>
                <p style={{ fontSize: "0.72rem", color: "#8b1e3f", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>{t.location}</p>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{t.name}</p>
                <p style={{ fontSize: "0.82rem", color: "#6b7280" }}>{t.subject}</p>
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
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "40px" }}>Teacher portfolio website बारे सामान्य प्रश्नहरू</p>
        <div style={{ display: "grid", gap: "12px" }}>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "20px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(139,30,63,0.08)" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>{faq.name}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.8 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--slate)", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2rem)", marginBottom: "12px" }}>
          तपाईंको पनि Portfolio Website चाहिन्छ?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "28px" }}>Google Form भर्नुहोस् — 10 मिनेटमा website तयार हुन्छ।</p>
        <a href="https://wa.me/819036694264" target="_blank" rel="noopener noreferrer"
          style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: "30px", fontWeight: 700 }}>
          WhatsApp: +81-90-3669-4264
        </a>
      </section>
    </main>
  );
}

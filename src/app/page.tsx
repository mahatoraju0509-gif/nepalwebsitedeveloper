const liveProjects = [
  { name: "madhavnepal.online", url: "https://madhavnepal.online", desc: "Official portfolio - Former PM Madhav Kumar Nepal" },
  { name: "bharatshah.online", url: "https://bharatshah.online", desc: "Official portfolio - Bharat Prasad Shah, Madhesh Pradesh" },
  { name: "birgunjcity.vercel.app", url: "https://birgunjcity.vercel.app", desc: "City news portal - Next.js + Firebase" },
  { name: "chkhabardaily.vercel.app", url: "https://chkhabardaily.vercel.app", desc: "CH Khabar Daily news portal - Next.js + Firebase" },
  { name: "edupath-ai.vercel.app", url: "https://edupath-ai.vercel.app", desc: "AI-powered career counseling app - 1.7M+ words, 20 countries" },
  { name: "thagi-satark.vercel.app", url: "https://thagi-satark.vercel.app", desc: "Fraud-awareness Flutter app - 30 fraud categories" },
  { name: "jagdamba-school-five.vercel.app", url: "https://jagdamba-school-five.vercel.app", desc: "School website - Three.js, Firebase admin panel, Rautahat" },
  { name: "sfacl-jetharahiya.vercel.app", url: "https://sfacl-jetharahiya.vercel.app", desc: "Cooperative platform - loan and savings services, Rautahat" },
  { name: "cbsah-official.vercel.app", url: "https://cbsah-official.vercel.app", desc: "CB Sah - Social Activist and Youth Leader, Madhesh" },
  { name: "rajumahato.it.com", url: "https://rajumahato.it.com", desc: "Personal developer portfolio - Raju Mahato" },
  { name: "nitesh-poudel.vercel.app", url: "https://nitesh-poudel.vercel.app", desc: "NCP Central Committee Member - Nitesh Poudel" },
  { name: "amrendra-yadav.vercel.app", url: "https://amrendra-yadav.vercel.app", desc: "Comedy Champion Season 3 - Sunus comedian portfolio" },
  { name: "gyanu-khadka.vercel.app", url: "https://gyanu-khadka.vercel.app", desc: "NCP Province Secretariat Member - Gyanu Khadka" },
  { name: "deepak-yadav-portfolio-five.vercel.app", url: "https://deepak-yadav-portfolio-five.vercel.app", desc: "Political Leader portfolio - Deepak Yadav, Garuda" },
  { name: "raja-mart-kyoto.vercel.app", url: "https://raja-mart-kyoto.vercel.app", desc: "Halal grocery store website - Kyoto, Japan" },
  { name: "raghunath-gupta-portfolio.vercel.app", url: "https://raghunath-gupta-portfolio.vercel.app", desc: "Social Activist and Journalist - Raghunath Gupta" },
  { name: "janata-secondary-school.vercel.app", url: "https://janata-secondary-school.vercel.app", desc: "School website - Janata Secondary School, Rautahat" },
  { name: "samaj-shakti-yuwa-club.vercel.app", url: "https://samaj-shakti-yuwa-club.vercel.app", desc: "Youth club website - Bishnupur-4, Saptari" },
  { name: "anil-falful-nursery.vercel.app", url: "https://anil-falful-nursery.vercel.app", desc: "Agricultural nursery farm - Kathariya, Nepal" },
  { name: "rambabu-baitha-maths-teacher-djpt.vercel.app", url: "https://rambabu-baitha-maths-teacher-djpt.vercel.app", desc: "Best Mathematics Teacher - Rambabu Baitha, Bara" },
  { name: "shivjee-mukhiya-official.vercel.app", url: "https://shivjee-mukhiya-official.vercel.app", desc: "Technical Assistant Education - Shivjee Mukhiya, Lamjung" },
  { name: "binda-lal-sah-website-7v2z.vercel.app", url: "https://binda-lal-sah-website-7v2z.vercel.app", desc: "Best Mathematics Teacher - Binda Lal Sah, Rautahat" },
  { name: "ravi-kumar-sah-portfolio.vercel.app", url: "https://ravi-kumar-sah-portfolio.vercel.app", desc: "Mathematics Teacher - Ravi Kumar Sah Teli, Bara" },
  { name: "saroj-kumar-banjara.vercel.app", url: "https://saroj-kumar-banjara.vercel.app", desc: "Mathematics Teacher MPhil - Saroj Kumar Banjara, Bara" },
  { name: "genendra-poudel.vercel.app", url: "https://genendra-poudel.vercel.app", desc: "Head Teacher English and Sociology - Genendra Poudel, Bardiya" },
  { name: "lalit-thakuri.vercel.app", url: "https://lalit-thakuri.vercel.app", desc: "English Teacher Secondary Level - Lalit Thakuri, Bhaktapur" },
  { name: "pankaj-kumar-sah.vercel.app", url: "https://pankaj-kumar-sah.vercel.app", desc: "Public Health Professional - Pankaj Kumar Sah, Mahottary" },
  { name: "web-nine-beryl-59.vercel.app", url: "https://web-nine-beryl-59.vercel.app", desc: "Nepal developer project" },
  { name: "ambik-baral-online-class.vercel.app", url: "https://ambik-baral-online-class.vercel.app", desc: "Online class platform - Ambik Baral" },
  { name: "rajan-baniya-online-class.vercel.app", url: "https://rajan-baniya-online-class.vercel.app", desc: "Online class platform - Rajan Baniya" },
  { name: "notelibrary-website.vercel.app", url: "https://notelibrary-website.vercel.app", desc: "Note library website - Nepal education" },
  { name: "dilli-raj-upadhyaya.vercel.app", url: "https://dilli-raj-upadhyaya.vercel.app", desc: "Portfolio - Dilli Raj Upadhyaya" },
  { name: "mithila-tech-gyan.vercel.app", url: "https://mithila-tech-gyan.vercel.app", desc: "Mithila Tech Gyan - Technology education Nepal" },
  { name: "jagdamba-school-five.vercel.app/developer.html", url: "https://jagdamba-school-five.vercel.app/developer.html", desc: "Developer showcase page - Raju Mahato portfolio" },
];

const services = [
  {
    title: "Website Development",
    detail: "Custom-coded with Next.js - no templates, no page builders. SEO-ready from day one.",
  },
  {
    title: "App Development",
    detail: "Flutter apps for Android & iOS, built with clean architecture and offline-first design.",
  },
  {
    title: "Firebase & Backend",
    detail: "Firestore, authentication, and admin panels wired up so clients can manage their own content.",
  },
  {
    title: "SEO & Online Presence",
    detail: "Structured data, meta tags, and entity-building so people - and Google - find you first.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="profile-wrap">
          <div className="profile-ring"></div>
          <div className="profile-ring2"></div>
          <img src="/profile.jpg" alt="Raju Mahato - Nepal's Best and Top Individual Website Developer" className="profile-photo" />
        </div>
        <p className="mono text-xs tracking-widest uppercase text-crimson mb-6">
          Solo-built. Production-deployed.
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Nepal&apos;s Best and Top
          <br />
          Individual Website &amp; App Developer
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
          45+ live projects, built and shipped solo - political leader portfolios, school and cooperative platforms, news portals, and AI-powered apps - using Next.js, Flutter, and Firebase.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-crimson text-paper font-medium hover:opacity-90 transition"
          >
            View Live Work
          </a>
          <a
            href="https://wa.me/8109036694264"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-ink/20 font-medium hover:border-crimson hover:text-crimson transition"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      {/* SIGNATURE: LIVE DOMAIN TICKER */}
      <section className="border-y border-ink/10 bg-slate py-5 overflow-hidden">
        <div className="ticker-track mono text-sm text-paper/90">
          {[...liveProjects, ...liveProjects].map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marigold transition"
            >
              {p.name}
            </a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">What I build</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-ink/10 rounded-2xl p-6 bg-white/40">
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE WORK */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Live work</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {liveProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-ink/10 rounded-2xl p-6 hover:border-crimson transition bg-white/40"
            >
              <p className="mono text-sm text-crimson mb-2">{p.name}</p>
              <p className="text-ink/70 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT / NUMBERS */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-ink/10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">About</h2>
        <p className="text-ink/70 max-w-2xl leading-relaxed mb-10">
          I&apos;m Raju Mahato, a solo developer from Yamunamai-1, Rautahat, Madhesh Province, Nepal, currently based in Kyoto, Japan. Every project on this page is built, deployed, and maintained by me - no agency, no team. 45+ live projects including political leader portfolios, school websites, teacher portfolios, news portals, cooperative platforms, Flutter apps, and AI-powered apps. My goal is simple: to be Nepal&apos;s most trusted individual website and app developer.
        </p>
        <div className="grid grid-cols-3 gap-6 mono text-center">
          <div>
            <p className="text-3xl font-semibold text-crimson">45+</p>
            <p className="text-xs text-ink/60 mt-1">Live projects</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-crimson">1</p>
            <p className="text-xs text-ink/60 mt-1">Solo developer</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-crimson">2026</p>
            <p className="text-xs text-ink/60 mt-1">Building from Kyoto + Nepal</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate text-paper py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Have a project in mind?</h2>
        <p className="text-paper/70 mb-8">Politicians, schools, cooperatives, and businesses across Nepal - let&apos;s talk.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/8109036694264"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-marigold text-ink font-medium hover:opacity-90 transition"
          >
            WhatsApp Me
          </a>
          <a
            href="mailto:mahatodigambar0509@gmail.com"
            className="px-6 py-3 rounded-full border border-paper/30 font-medium hover:border-marigold hover:text-marigold transition"
          >
            mahatodigambar0509@gmail.com
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-ink/50">
        © 2026 Raju Mahato - Nepal&apos;s Best and Top Individual Website Developer
      </footer>
    </main>
  );
}
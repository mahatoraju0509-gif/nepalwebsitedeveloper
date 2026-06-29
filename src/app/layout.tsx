import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nepalwebsitedeveloper.com"),
  title: "Nepal's Best and Top Individual Website Developer | Raju Mahato",
  description:
    "Raju Mahato is Nepal's best and top individual website and app developer - 15+ live projects, solo-built with Next.js, Flutter, and Firebase. Serving politicians, schools, cooperatives, and businesses across Nepal.",
  keywords: [
    "Nepal's best website developer",
    "Nepal top individual website developer",
    "Nepal best app developer",
    "individual website developer Nepal",
    "Nepali web developer",
    "Flutter developer Nepal",
    "Next.js developer Nepal",
    "Madhesh Province web developer",
    "Rautahat web developer",
    "Raju Mahato developer",
  ],
  authors: [{ name: "Raju Mahato", url: "https://rajumahato.it.com" }],
  creator: "Raju Mahato",
  alternates: { canonical: "https://nepalwebsitedeveloper.com/" },
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  openGraph: {
    type: "website",
    url: "https://nepalwebsitedeveloper.com/",
    siteName: "Nepal Website Developer - Raju Mahato",
    title: "Nepal's Best and Top Individual Website Developer | Raju Mahato",
    description:
      "15+ live projects, solo-built. Next.js, Flutter, Firebase. See real work from Nepal's top individual website and app developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal's Best and Top Individual Website Developer | Raju Mahato",
    description: "15+ live projects, solo-built. See real work from Nepal's top individual website and app developer.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raju Mahato",
  jobTitle: "Nepal's Best and Top Individual Website Developer and App Developer",
  alternateName: [
    "Nepal Number 1 Individual Website Developer",
    "Nepal Top Individual App Developer",
    "Rautahat Top Web Developer",
  ],
  url: "https://nepalwebsitedeveloper.com",
  description:
    "Raju Mahato is a solo Nepali developer building production websites and apps with Next.js, Flutter, and Firebase - 15+ live projects including political leader portfolios, school websites, cooperative platforms, and AI-powered apps.",
  nationality: "Nepali",
  knowsAbout: ["Next.js", "Flutter", "Firebase", "SEO", "Web Development", "App Development"],
  sameAs: [
    "https://rajumahato.it.com",
    "https://github.com/mahatoraju0509-gif",
    "https://www.linkedin.com/in/raju-mahato-nepal-top-developer",
    "https://www.producthunt.com/@raju_mahato3",
    "https://dev.to/raju_mahato_nepal",
    "https://edupath-ai.vercel.app",
    "https://thagi-satark.vercel.app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={${fraunces.variable} ${inter.variable} ${mono.variable}}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: "Agrosight AI",
    href: "/agrosight",
    image: "/images/shot3.png",
    description: "Real-time crop disease detection platform deployable on WhatsApp, web & offline."
  },
  {
    name: "Voting DApp",
    href: "/voting",
    image: "/images/voting.png",
    description: "Blockchain Voting for Agricultural Cooperatives — Transparent, Tamper-Proof Elections."
  },
  {
    name: "AutoBooks AI",
    href: "/autobooks",
    image: "/images/autobooks.png",
    description: "Automated AI accounting assistant for B2B."
  },
  {
    name: "Rust DeFi Engine",
    href: "/in_progress",
    image: "/images/defi.png",
    description: "AI-powered Rust engine for DeFi applications."
  },
  {
    name: "UrbanScope Chain",
    href: "/urbanscope",
    image: "/images/urbanscope.png",
    description: "Blockchain land use approval system for urban development proposals."
  },
  {
    name: "ArdhiChain (SmartLands)",
    href: "/ardhichain",
    image: "/images/ardhichain.png",
    description: "Blockchain Land Registry – Mint and manage property NFTs on Ethereum."
  },
  {
    name: "Aminika Medical Services",
    href: "/aminika",
    image: "/images/aminika.png",
    description: "Healthcare platform providing appointment scheduling and patient information management."
  },
  {
    name: "Smart Agrovet Webstore",
    href: "/store",
    image: "/images/agroshop.png",
    description: "E-commerce platform for farm inputs with AI-powered crop diagnosis integration."
  },
  {
    name: "Blog Website",
    href: "/blog",
    image: "/images/blog.png",
    description: "React + Strapi headless CMS blog platform for modern content publishing."
  },
];

export default function HomePage() {
  return (
    <section className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="heroContent">
          <h1>Nick Muthoki</h1>
          <h2>AI & Blockchain Builder | Consultant</h2>
          <p>
            I build and deploy intelligent systems for real-world problems. 
            From AI-powered agritech platforms to Rust DeFi engines, I deliver end-to-end solutions. I am the Lead Developer at <a href="https://ithoka.vercel.app/" style={{ color: "#0052cc"}} target="_blank" rel="noopener noreferrer">Ithoka Microsystems</a>, an AI & Blockchain consulting team.
          </p>
          <div className="ctaButtons">
            <Link href="/projects" className="ctaBtn">View Projects</Link>
            <a href="https://ithoka.vercel.app/onboard" className="ctaBtnOutline">Start Your Project</a>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={150}
            height={150}
            priority
          />
        </div>
      </div>

      {/* About Teaser */}
      <div className="aboutTeaser">
        <h3>About Me</h3>
        <p>
          I am a builder and innovator, focused on creating AI and blockchain solutions that make a measurable impact. 
          I have launched multiple MVPs, blockchain projects, and AI engines, delivering clean and scalable systems.
        </p>
        <Link href="/about" className="learnMore">Learn More →</Link>
      </div>

      {/* Recent Projects */}
      <div className="recentProjects">
        <h3>Recent Projects</h3>
        <div className="projectsGrid">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="projectCard">
              <div className="projectImage">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={350}
                  height={350}
                  className="projectImg"
                  priority
                />
              </div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let us create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>
      </div>
      <style jsx>{`
        .ctaSection {
          text-align: center;
        }

        .ctaBtn {
          display: inline-block;
          margin-top: 1rem;
          padding: 10px 18px;
          border-radius: 6px;
          background: var(--accent);
          color: var(--foreground);
          text-decoration: none;
          font-weight: bold;
          transition: background 0.2s ease;
        }

        .ctaBtn:hover {
          background: #0052cc;
        }
          .sec {
          margin-top: 40px;
          }

      `}</style>
    </section>
  );
}

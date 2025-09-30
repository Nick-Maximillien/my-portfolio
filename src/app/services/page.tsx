'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesList = [
  {
    category: 'AI & Machine Learning',
    description: 'Custom AI solutions including computer vision, NLP, predictive analytics, and automation pipelines for businesses and startups.',
    image: '/services/ai.png', // placeholder path
  },
  {
    category: 'Blockchain & DeFi',
    description: 'Smart contracts, DApps, Rust/ETH development, tokenomics design, decentralized governance, and NFT solutions.',
    image: '/services/blockchain.png',
  },
  {
    category: 'Fullstack Development',
    description: 'End-to-end web and mobile applications using React/Next.js, Django/FastAPI, PostgreSQL, and modern deployment pipelines.',
    image: '/services/fullstack.png',
  },
  {
    category: 'Consulting & Advisory',
    description: 'Technical consulting for individuals, SMEs, startups — from project scoping to system architecture, deployment strategies, and scaling.',
    image: '/services/consulting.png',
  },
  {
    category: 'Remote & Freelance Work',
    description: 'Flexible remote development services: MVPs, feature extensions, bug fixes, integrations, or full product builds for international clients.',
    image: '/services/remote.png',
  },
  {
    category: 'Team Collaboration & Maintenance',
    description: 'Assisting internal teams with code reviews, system optimizations, CI/CD setups, mentoring, and long-term tech maintenance.',
    image: '/services/team.png',
  },
];

export default function ServicesPage() {
  return (
    <main className="servicesPage">
      <div className="heade">
        <h1 className="servicesTitle">My Services</h1>
        <p className="servicesSubtitle">
          I provide tailored tech solutions for individuals, startups, SMEs, and teams. Whether it’s AI, blockchain, fullstack development, or consulting, I deliver end-to-end expertise to bring ideas to life.
        </p>
      </div>

      <section>
        <h2 className="offer">What I Can Do For You</h2>
        <div className="servicesGrid">
          {servicesList.map((service) => (
            <div key={service.category} className="serviceCard">
              <div className="serviceImage">
                <Image
                  src={service.image}
                  alt={service.category}
                  width={200}
                  height={150}
                  priority
                />
              </div>
              <h3>{service.category}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let us create impactful solutions together.</p>
      </section>
      <div className="ctaSection">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

      <style jsx>{`
        :root {
          --background: #000000;
          --foreground: #ffffff;
          --accent: #0074d9;
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-shadow: rgba(255, 255, 255, 0.1);
        }

        body {
          margin: 0;
          font-family: 'Segoe UI', Roboto, sans-serif;
          background: var(--background);
          color: var(--foreground);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .servicesPage {
          max-width: 960px;
          margin: auto;
          padding: 2rem 1rem;
        }

        .servicesTitle {
          text-align: center;
          padding: 20px;
        }
        .offer {
          text-align: center;
          padding: 20px;
        }
        .servicesSubtitle {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #ccc;
        }

        .header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .header p {
          font-size: 1rem;
          line-height: 1.6;
        }

        h2 {
          color: var(--accent);
          border-left: 4px solid var(--accent);
          border-right: 4px solid var(--accent);
          padding-left: 10px;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        h3 {
          margin: 0.5rem 0;
          font-size: 1.2rem;
          color: var(--accent);
        }

        section {
          margin-bottom: 2rem;
        }

        .servicesGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .serviceCard {
          background: var(--card-bg);
          padding: 1rem;
          border-radius: 12px;
          flex: 1 1 280px;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 6px 14px var(--card-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px var(--card-shadow);
        }

        .serviceCard p {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .serviceImage {
          margin-bottom: 0.8rem;
          border-radius: 10px;
        }

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

        @media (max-width: 768px) {
          .servicesGrid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}

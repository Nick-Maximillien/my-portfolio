'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesList = [
  {
    category: 'AI & Intelligent Automation',
    description:
      'Building practical AI systems that help businesses process documents, generate reports, and make sense of data—without replacing human judgment.',
    image: '/services/ai.png',
  },
  {
    category: 'Blockchain & Web3 Infrastructure',
    description:
      'Designing blockchain-backed systems for auditability, integrity, and automation—such as tokenized assets, smart contracts, and backend wallet orchestration.',
    image: '/services/blockchain.png',
  },
  {
    category: 'MVP & Product Engineering',
    description:
      'Turning ideas into reliable products: dashboards, internal tools, and customer-facing applications built with modern web technologies.',
    image: '/services/fullstack.png',
  },
  {
    category: 'Technical Consulting',
    description:
      'Helping founders and teams make clear technical decisions—architecture reviews, stack selection, and system design guidance.',
    image: '/services/consulting.png',
  },
  {
    category: 'Backend Performance & Reliability',
    description:
      'Improving slow or fragile systems by refactoring backend logic, strengthening data integrity, and optimizing performance.',
    image: '/services/remote.png',
  },
  {
    category: 'Team Mentorship & Support',
    description:
      'Supporting engineering teams with code reviews, best practices, and architectural guidance to help them ship with confidence.',
    image: '/services/team.png',
  },
];

export default function ServicesPage() {
  return (
    <main className="servicesPage">
      <div className="heade">
        <h1 className="servicesTitle">Services</h1>
        <p className="servicesSubtitle">
          I work with small businesses, startups, and technical teams to build
          software systems that are secure, understandable, and fit for real-world operations—
          including AI-driven and blockchain-based solutions where they make sense.
        </p>
      </div>

      <section>
        <h2 className="offer">What I Offer</h2>
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
        <h2>Not Sure If You “Need Blockchain or AI”?</h2>
        <p>
          That is normal. My role is to help you decide <em>if</em>, <em>where</em>, and <em>how </em>
          advanced technology should be used, so the solution stays practical and cost-effective.
        </p>
      </section>

      <div className="ctaSection">
        <Link href="/contact" className="ctaBtn">Start a Conversation</Link>
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

        .servicesPage {
          max-width: 960px;
          margin: auto;
          padding: 2rem 1rem;
        }

        .servicesTitle {
          text-align: center;
          padding: 20px;
          font-size: 2.5rem;
          color: #fff;
        }

        .servicesSubtitle {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          color: #ccc;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .offer {
          text-align: center;
          padding: 20px;
          color: var(--accent);
          font-size: 1.8rem;
        }

        .servicesGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .serviceCard {
          background: var(--card-bg);
          padding: 1.5rem;
          border-radius: 12px;
          flex: 1 1 280px;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 6px 14px var(--card-shadow);
          transition: transform 0.2s ease;
          border: 1px solid transparent;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
          border-color: var(--accent);
        }

        .serviceCard h3 {
          margin: 1rem 0;
          font-size: 1.2rem;
          color: #fff;
        }

        .serviceCard p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #ccc;
        }

        .serviceImage {
          margin-bottom: 1rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .ctaSection {
          text-align: center;
          margin-top: 3rem;
        }

        .ctaBtn {
          display: inline-block;
          margin-top: 1rem;
          padding: 12px 24px;
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
      `}</style>
    </main>
  );
}

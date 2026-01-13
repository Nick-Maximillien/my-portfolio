'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectHighlights = [
  {
    category: 'Fintech AI',
    name: 'AutoBooks AI',
    href: '/autobooks',
    image: '/images/autobooks.png',
    description: 'RAG-based financial copilot that parses invoices and automates IFRS accounting entries, making accounting easier for businesses of all sizes.'
  },
  {
    category: 'Web3 Security',
    name: 'Node.js Web3 Server',
    href: '/node-web3',
    image: '/images/defi.png',
    description: 'Backend-only wallet manager with AES encryption and L1->L2 bridging logic, providing secure and auditable blockchain infrastructure.'
  },
  {
    category: 'DeFi',
    name: 'Flash USD',
    href: '/flash-usd',
    image: '/images/ardhichain.png',
    description: 'ERC20 stable-value token system with React Dapp and Role-Based Access Control, designed for reliable financial operations and easy integration.'
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="aboutPage">
        <div className="heade">
          <h1 style={{"margin": "10px"}}>About Nick Muthoki</h1>
          <p style={{"margin": "10px"}}>
            I am a Software Engineer building practical and reliable systems using AI and blockchain.
            I focus on creating solutions that are <em>secure</em>, <em>understandable</em>, and <em>useful</em>—helping businesses automate, optimize, and innovate without unnecessary complexity.
          </p>
        </div>

        <section>
          <h2>Engineering Philosophy</h2>
          <ul className="philosophy-list">
            <li><strong>Reliability over Novelty:</strong> I choose proven technologies for mission-critical systems, so you can trust them.</li>
            <li><strong>Systems over Features:</strong> I design "Domain Gates" that ensure data integrity before it reaches databases or ledgers.</li>
            <li><strong>Deterministic Execution:</strong> In finance, law, and operations, software must behave predictably every time.</li>
            <li><strong>Infrastructure as a Service:</strong> Deployment pipelines, security, and maintainability are part of the product, not afterthoughts.</li>
          </ul>
        </section>

        <section>
          <h2>Technical Arsenal</h2>
          <ul>
            <li><strong>AI Perception & Automation:</strong> Python, PyTorch, EasyOCR, Vertex AI, RAG pipelines for practical business applications.</li>
            <li><strong>Blockchain & Smart Contracts:</strong> Solidity, Node.js, Web3.js, Hardhat, Lisk L2—used to build auditable and secure systems.</li>
            <li><strong>Backend Engineering:</strong> Rust (high-performance), Django (business logic), FastAPI.</li>
            <li><strong>Frontend UX & Web Apps:</strong> Next.js, React, Tailwind CSS—focused on clarity and usability.</li>
          </ul>
        </section>

        <section>
          <h2>Representative Work</h2>
          <div className="projectsGrid">
            {projectHighlights.map((proj) => (
              <Link key={proj.name} href={proj.href} className="projectCard">
                <div className="projectImage">
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    width={300}
                    height={300}
                    className="projectImg"
                    priority
                  />
                </div>
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
                <span className="category">{proj.category}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="ctaSection">
          <h2>Let’s Build Practical Systems Together</h2>
          <p>
            Whether it’s AI, blockchain, or traditional software, I help businesses deploy reliable solutions that are easy to integrate and use.
          </p>
          <div className="sec">
            <Link href="/contact" className="ctaBtn">Get in Touch</Link>
          </div>
        </section>

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

          a { color: inherit; text-decoration: none; }

          .aboutPage { max-width: 960px; margin: auto; padding: 2rem 1rem; }

          .header { text-align: center; margin-bottom: 2rem; }
          .header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #fff; }
          .header p { font-size: 1.1rem; line-height: 1.6; color: #ccc; max-width: 700px; margin: 0 auto; }

          section { 
            background: var(--card-bg); 
            padding: 1.5rem; 
            margin-bottom: 2rem; 
            border-radius: 12px; 
            box-shadow: 0 6px 14px var(--card-shadow); 
            backdrop-filter: blur(6px); 
          }

          h2 { 
            color: var(--accent); 
            border-left: 4px solid var(--accent); 
            padding-left: 10px; 
            margin-top: 0; 
            margin-bottom: 1rem; 
          }

          h4 { margin: 0.5rem 0; color: #fff; }
          p, li { font-size: 1rem; line-height: 1.6; color: #ddd; }
          ul { padding-left: 1.5rem; }
          .philosophy-list li { margin-bottom: 10px; }

          .projectsGrid { display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; }
          .projectCard { 
            background: rgba(0,0,0,0.3); 
            border-radius: 12px; 
            padding: 1rem; 
            flex: 1 1 280px; 
            max-width: 320px; 
            text-align: center; 
            transition: transform 0.2s ease, box-shadow 0.2s ease; 
            border: 1px solid rgba(255,255,255,0.1); 
          }
          .projectCard:hover { transform: translateY(-3px); box-shadow: 0 8px 20px var(--card-shadow); border-color: var(--accent); }
          .projectImage { border-radius: 8px; overflow: hidden; margin-bottom: 1rem; }
          .projectImg { width: 100%; height: auto; border-radius: 8px; }
          .category { 
            display: inline-block; 
            margin-top: 0.5rem; 
            font-size: 0.85rem; 
            color: var(--accent); 
            font-family: monospace; 
            border: 1px solid var(--accent); 
            padding: 2px 8px; 
            border-radius: 4px; 
          }

          .ctaSection { text-align: center; }
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
          .ctaBtn:hover { background: #0052cc; }
          .sec { margin-top: 20px; }

          @media (max-width: 768px) { .projectsGrid { flex-direction: column; align-items: center; } }
        `}</style>
      </main>
    </>
  );
}

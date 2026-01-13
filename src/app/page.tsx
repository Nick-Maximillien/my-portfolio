// app/page.tsx (Personal Portfolio)
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// REFINED PROJECT DATA: Focused on the specific tech stack
const selectedProjects = [
  {
    name: "Autobooks AI (Financial Copilot)",
    role: "Architect & Lead Dev",
    tech: "FastAPI • Vertex AI • RAG • React",
    href: "/autobooks",
    image: "/images/autobooks.png",
    description: "An AI agent that helps businesses automate accounting. Uses RAG to bring real-time ledger data into LLMs for factual financial reporting."
  },
  {
    name: "Node.js Web3 Signing Engine",
    role: "Backend Engineer",
    tech: "Node.js • Web3.js • AES Encryption • Lisk L2",
    href: "/node-web3",
    image: "/images/defi.png",
    description: "A secure backend wallet manager that handles keys, gas fees, and L1→L2 bridging, making blockchain interactions seamless and safe."
  },
  {
    name: "Flash USD (ERC20 System)",
    role: "Smart Contract Engineer",
    tech: "Solidity • Next.js • Ethers.js",
    href: "/flash-usd",
    image: "/images/ardhichain.png", 
    description: "A stable-value token system with role-based access and React Dapp for smooth token issuance and transfers."
  },
  {
    name: "Agrosight AI",
    role: "Founder",
    tech: "Computer Vision • WhatsApp API • Offline-First",
    href: "/agrosight",
    image: "/images/shot3.png",
    description: "AI-powered crop disease detection accessible via WhatsApp. Bridging high-tech tools with low-tech accessibility for farmers."
  }
];

export default function PersonalHomePage() {
  return (
    <main className="personalHome">
      
      {/* SECTION 1: WELCOMING HERO */}
      <section className="manifesto">
        <div className="avatar">
          <Image 
            src="/images/hero.png" 
            alt="Nick Muthoki" 
            width={100} 
            height={100} 
            className="profilePic"
          />
        </div>
        <h1>Nicholas Muthoki</h1>
        <h2 className="terminal-text">{`> Systems Architect && Full Stack Engineer`}</h2>
        
        <div className="bio">
          <p>
            I create <em>practical and reliable systems</em> where <strong>financial accuracy</strong> meets <strong>decentralized innovation</strong>.
          </p>
          <p>
            I focus on building software that is <em>trustworthy, understandable, and useful</em>. My approach uses 
            <strong> Domain Gates</strong>: systems that validate and protect data before it reaches the ledger, whether in PostgreSQL, Ethereum Smart Contracts or AI agent workflows.
          </p>
        </div>

        <div className="stack-tags">
          <span>Rust</span>
          <span>Node.js</span>
          <span>Solidity</span>
          <span>React</span>
          <span>AI Agents</span>
        </div>

        <div className="links">
          <a href="https://github.com/Nick-Maximillien" target="_blank" className="link-item">GitHub</a>
          <a href="https://linkedin.com/in/nicholas-muthoki" target="_blank" className="link-item">LinkedIn</a>
          <Link href="/contact" className="link-item primary">Get in Touch</Link>
        </div>
      </section>

      <hr className="divider" />

      {/* SECTION 2: SELECTED WORK */}
      <section className="work-section">
        <h3>// Selected Engineering Work</h3>
        
        <div className="work-list">
          {selectedProjects.map((project) => (
            <Link key={project.name} href={project.href} className="work-item">
              <div className="work-content">
                <div className="work-header">
                  <h4>{project.name}</h4>
                  <span className="role-tag">{project.role}</span>
                </div>
                <p className="tech-stack">{project.tech}</p>
                <p className="description">{project.description}</p>
              </div>
              <div className="work-arrow">→</div>
            </Link>
          ))}
        </div>
        
        <div className="more-work">
          <Link href="/projects" className="text-link">View Full Project Archive</Link>
        </div>
      </section>

      {/* SECTION 3: CURRENT FOCUS */}
      <section className="focus-section">
        <h3>// Current Research & Focus</h3>
        <div className="focus-grid">
          <div className="focus-card">
            <h4>RAG & Financial AI</h4>
            <p>Building “Business Copilots” that bring real-time accounting data into AI for trustworthy reporting and insights.</p>
          </div>
          <div className="focus-card">
            <h4>Headless Web3</h4>
            <p>Making blockchain accessible: Node.js signing engines handle keys and gas fees in the background.</p>
          </div>
          <div className="focus-card">
            <h4>Rust Performance</h4>
            <p>Optimizing high-frequency financial logic with Rust for safety, concurrency, and speed.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        :root {
          --bg: #050505;
          --text: #e0e0e0;
          --accent: #00ff9d;
          --subtle: #333;
        }

        .personalHome {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          background-color: var(--bg);
          color: var(--text);
        }

        .manifesto {
          margin-bottom: 4rem;
        }

        .profilePic {
          border-radius: 50%;
          border: 2px solid #333;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          margin-bottom: 0.5rem;
          color: white;
        }

        .terminal-text {
          font-family: 'Courier New', Courier, monospace;
          font-size: 1.1rem;
          color: #888;
          font-weight: 400;
          margin-bottom: 2rem;
        }

        .bio {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #ccc;
          max-width: 600px;
        }
        
        .bio strong { color: white; font-weight: 600; }

        .stack-tags {
          margin-top: 1.5rem;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stack-tags span {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-family: monospace;
          color: #aaa;
        }

        .links {
          margin-top: 2rem;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .link-item {
          color: #888;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .link-item:hover { color: white; }
        .link-item.primary { color: white; border-bottom: 1px solid white; }

        .divider {
          border: 0;
          height: 1px;
          background: #222;
          margin: 3rem 0;
        }

        h3 {
          font-family: 'Courier New', monospace;
          color: #666;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2rem;
        }

        .work-list { display: flex; flex-direction: column; gap: 1.5rem; }

        .work-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: #0a0a0a;
          border: 1px solid #222;
          padding: 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .work-item:hover {
          border-color: #444;
          transform: translateX(5px);
        }

        .work-header { display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem; }

        .work-header h4 { margin: 0; font-size: 1.2rem; color: white; }
        .role-tag { font-size: 0.75rem; background: #111; color: #888; padding: 2px 8px; border-radius: 4px; border: 1px solid #333; }
        .tech-stack { font-size: 0.85rem; color: #666; font-family: monospace; margin-bottom: 0.8rem; }
        .description { font-size: 0.95rem; color: #aaa; line-height: 1.5; margin: 0; }
        .work-arrow { color: #444; font-size: 1.2rem; }

        .more-work { margin-top: 1.5rem; text-align: right; }
        .text-link { font-size: 0.9rem; color: #888; }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .focus-card {
          background: #0a0a0a;
          padding: 1.5rem;
          border-left: 2px solid #333;
        }

        .focus-card h4 { margin-top: 0; color: white; margin-bottom: 0.5rem; }
        .focus-card p { font-size: 0.9rem; color: #888; line-height: 1.6; margin: 0; }

        @media (max-width: 600px) {
          .work-item { flex-direction: column; }
          .work-arrow { display: none; }
          .focus-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}

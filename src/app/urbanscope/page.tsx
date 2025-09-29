'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UrbanScopePage() {
  return (
    <main className="projectPage">
      <div className="header">
        <Image
          src="/images/urbanscope.png"
          alt="UrbanScope Banner"
          width={400}
          height={350}
          className="banner-img"
        />
        <h1>UrbanScope Chain</h1>
        <p>A blockchain-based system for approving and tracking urban land development proposals.</p>
      </div>

      <section>
        <h2>Overview</h2>
        <p>
          UrbanScope is a decentralized land use approval system that enables urban authorities to record, manage, and track land development proposals on Ethereum. With admin-only controls for submitting, approving, and rejecting proposals, it brings traceability and trust to the often opaque urban planning process.
        </p>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> Next.js + Tailwind CSS</li>
          <li><strong>Smart Contract:</strong> Solidity (Sepolia Testnet)</li>
          <li><strong>Integration:</strong> Ethers.js + MetaMask</li>
          <li><strong>Metadata Links:</strong> IPFS-ready proposal URIs</li>
          <li><strong>Hosting:</strong> Vercel</li>
        </ul>
      </section>

      <section>
        <h2>Smart Contract Highlights</h2>
        <ul>
          <li>✅ Admin-only proposal creation</li>
          <li>✅ Land use types and location descriptions</li>
          <li>✅ <code>approveChange()</code> and <code>rejectChange()</code> to finalize decisions</li>
          <li>✅ Event logs for transparency (<code>ProposalSubmitted</code>, <code>ProposalApproved</code>, etc.)</li>
          <li>✅ Read-only access to all proposals on-chain</li>
        </ul>
      </section>

      <section>
        <h2>UI Preview</h2>
        <Image src="/images/urbanscope2.png" alt="Proposal Table View" width={600} height={400} className="screenshot-img"/>
        <Image src="/images/urbanscope1.png" alt="Proposal Submission Form" width={600} height={400} className="screenshot-img"/>
      </section>

      <section>
        <h2>📽️ Walkthrough Video</h2>
        <div className="video-wrapper">
          <iframe src="https://www.youtube.com/embed/Jyge3qTS46k" title="Walkthrough Video" allowFullScreen></iframe>
        </div>
      </section>

      <section className="links">
        <h2>Live Links</h2>
        <Link href="https://urbanscope.vercel.app" target="_blank">🌐 Live DApp</Link>
        <Link href="https://sepolia.etherscan.io/address/0x191dfa511e14cbdf4298edcc5b15fc1f0353335a" target="_blank">🔍 Etherscan</Link>
        <Link href="https://github.com/Nick-Maximillien/urbanscope" target="_blank">📦 GitHub</Link>
      </section>

      <section>
        <h2>My Role</h2>
        <p>
          I built the smart contract, implemented the front-end interface, and deployed the platform to Vercel and Sepolia. I also handled wallet integration, metadata design, and structured the proposal flow to align with real-world urban planning workflows.
        </p>
      </section>

      <section>
        <h2>Vision</h2>
        <p>
          UrbanScope demonstrates how blockchain can support land governance by adding transparency and auditability. In contexts like Africa where urban expansion often lacks oversight, this project is a blueprint for decentralized civic infrastructure.
        </p>
      </section>

      {/* Inline styles */}
      <style jsx>{`
        :root {
          --background: #000000;
          --foreground: #ffffff;
          --accent: #0074d9;
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-shadow: rgba(255, 255, 255, 0.1);
        }

        .projectPage {
          max-width: 960px;
          margin: auto;
          padding: 2rem 1rem;
          background: var(--background);
          color: var(--foreground);
          font-family: 'Segoe UI', Roboto, sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .banner-img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
          margin-bottom: 1rem;
        }

        .header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .header p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        section {
          background: var(--card-bg);
          padding: 1.5rem;
          margin-bottom: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 14px var(--card-shadow);
          backdrop-filter: blur(6px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        section:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px var(--card-shadow);
        }

        h2 {
          color: var(--accent);
          border-left: 4px solid var(--accent);
          padding-left: 10px;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        p, li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--foreground);
        }

        ul {
          padding-left: 1.5rem;
        }

        .screenshot-img {
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 1rem auto;
          display: block;
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
        }

        .video-wrapper iframe {
          width: 100%;
          height: 360px;
          border: none;
          margin-top: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(255,255,255,0.1);
        }

        .links a {
          display: inline-block;
          margin: 0.3rem 1rem 1rem 0;
          background: #003366;
          color: white;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: background 0.2s ease;
        }

        .links a:hover {
          background: #0052cc;
        }

        /* Portrait responsive */
        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          .video-wrapper iframe {
            height: 240px;
          }
          .screenshot-img {
            max-width: 100%;
          }
          section {
            padding: 1rem;
          }
        }

        /* Landscape responsive */
        @media (orientation: landscape) and (min-width: 768px) {
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: left;
            gap: 2rem;
          }
          .header p {
            max-width: 50%;
          }
          .screenshot-img {
            max-width: 45%;
          }
          .video-wrapper iframe {
            height: 400px;
          }
          section {
            padding: 2rem;
          }
        }
      `}</style>
    </main>
  );
}

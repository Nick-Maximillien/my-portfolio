'use client'

import Image from "next/image";
import Link from "next/link";

export default function VotingPage() {
  return (
    <main className="voting-page">
      <header className="project-header">
        <div className="header-content">
          <h1>Voting DApp</h1>
          <p>Blockchain Voting for Agricultural Cooperatives — Transparent, Tamper-Proof Elections</p>
          <Image
            src="/images/voting.png"
            alt="Voting DApp Banner"
            width={960}
            height={400}
            className="project-banner"
          />
        </div>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          This decentralized application enables cooperatives to manage transparent voting on leadership, finances, and critical decisions. It leverages Ethereum smart contracts to ensure each vote is verifiable, anonymous, and immutable.
        </p>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> Next.js, Tailwind CSS</li>
          <li><strong>Smart Contracts:</strong> Solidity, Sepolia Testnet</li>
          <li><strong>Wallet Integration:</strong> MetaMask + ethers.js</li>
          <li><strong>Data Visualization:</strong> Recharts</li>
          <li><strong>Hosting:</strong> Vercel</li>
        </ul>
      </section>

      <section>
        <h2>Smart Contract Features</h2>
        <ul>
          <li>Proposal creation and management</li>
          <li>Admin/member role separation</li>
          <li>Vote casting with delegation support</li>
          <li>Real-time on-chain charting</li>
        </ul>
      </section>

      <section>
        <h2>Demo Video</h2>
        <iframe
          src="https://www.youtube.com/embed/0xgP9RxhThQ"
          allowFullScreen
          title="Voting DApp Demo"
        />
      </section>

      <section>
        <h2>Screenshots</h2>
        <div className="screenshot-grid">
          <Image src="/images/voting1.png" alt="Voting Summary" width={480} height={270} className="screenshot" />
          <Image src="/images/voting2.png" alt="Proposal Form" width={480} height={270} className="screenshot" />
        </div>
      </section>

      <section className="links">
        <h2>Links</h2>
        <a href="https://voting-dapp-kktj.vercel.app/" target="_blank" rel="noreferrer">🌐 Live DApp</a>
        <a href="https://github.com/Nick-Maximillien/voting-dapp" target="_blank" rel="noreferrer">📦 GitHub Repo</a>
      </section>

      <section>
        <h2>My Role</h2>
        <p>
          I handled the fullstack development — from writing Solidity contracts to building the frontend interface, integrating wallet connection, and implementing vote charts. This project demonstrates a complete dApp lifecycle including UI/UX, governance logic, and on-chain analytics.
        </p>
      </section>
      <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let us create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
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
    </main>
  );
}

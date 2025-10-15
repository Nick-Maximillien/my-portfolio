// app/in_progress/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function InProgressPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS User ID
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('Please enter a valid email.');
      return;
    }

    const templateParams = {
      subscriber_email: email,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(() => {
        setStatus('Thank you! You will be notified when the project launches.');
        setEmail('');
      })
      .catch(() => {
        setStatus('Failed to send. Please try again later.');
      });
  };

  return (
    <section className="inProgressPage">
      <div className="hero">
        <h1>Upcoming Project</h1>
        <p>
          I’m building an AI-powered Rust DeFi engine on the Internet Computer (ICP). 
          This project combines decentralized finance, high-performance Rust backends, 
          and AI intelligence for real-time insights and automation.
        </p>
      </div>

      <div className="techStack">
        <h2>Technology Stack</h2>
        <div className="techGrid">
          <div className="techCard">
            <Image src="/logos/rust.png" alt="Rust" width={60} height={60} />
            <p>Rust</p>
            <span>Superfast backend programming for AI and DeFi engines.</span>
          </div>
          <div className="techCard">
            <Image src="/logos/devops.png" alt="AI" width={60} height={60} />
            <p>AI</p>
            <span>Machine learning and predictive intelligence integrated into DeFi.</span>
          </div>
          <div className="techCard">
            <Image src="/logos/blockchain.png" alt="DeFi" width={60} height={60} />
            <p>DeFi</p>
            <span>Decentralized finance protocols on ICP blockchain.</span>
          </div>
          <div className="techCard">
            <Image src="/logos/icp.png" alt="ICP" width={60} height={60} />
            <p>ICP</p>
            <span>Internet Computer for decentralized, scalable deployment.</span>
          </div>
        </div>
      </div>

      <div className="comingSoon">
        <h2>Coming Soon</h2>
        <p>
          The engine is currently under development. Expect high-performance AI-backed DeFi tools, 
          Rust-based backends, and seamless blockchain integration soon.
        </p>
        <Link href={"/"}><Image src="/logos/inProgress.png" alt="Under Construction" width={300} height={250} /></Link>
      </div>
      <div>
      <Link href="https://github.com/Nick-Maximillien/rust-ai-defi" target="_blank">
              📦 GitHub Source
            </Link>
          </div>

      <div className="notifyForm">
        <h2>Notify Me</h2>
        <p>Enter your email to receive updates on this project:</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
      <div className="ctaSection sec">
        <Link href="/" className="ctaBtn">Back</Link>
      </div>
      <style jsx>{`
        .inProgressPage {
          background-color: #000;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          padding: 2rem 1rem;
          text-align: center;
        }

        .hero {
          margin-bottom: 3rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          color: #00aaff;
        }

        .hero p {
          font-size: 1.2rem;
          color: #ccc;
          max-width: 700px;
          margin: 1rem auto 0;
        }

        .techStack {
          margin-bottom: 3rem;
        }

        .techStack h2 {
          font-size: 2rem;
          color: #00aaff;
          margin-bottom: 1.5rem;
        }

        .techGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          justify-items: center;
        }

        .techCard {
          background-color: #111;
          padding: 1rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .techCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }

        .techCard p {
          margin-top: 0.5rem;
          font-weight: bold;
          color: #fff;
        }

        .techCard span {
          display: block;
          margin-top: 0.3rem;
          font-size: 0.85rem;
          color: #ccc;
        }

        .comingSoon {
          margin-top: 3rem;
        }

        .comingSoon h2 {
          font-size: 2rem;
          color: #00aaff;
          margin-bottom: 1rem;
        }

        .comingSoon p {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: #ccc;
        }

        .notifyForm {
          margin-top: 3rem;
        }

        .notifyForm h2 {
          font-size: 2rem;
          color: #00aaff;
          margin-bottom: 0.5rem;
        }

        .notifyForm p {
          color: #ccc;
          margin-bottom: 1rem;
        }

        .notifyForm form {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .notifyForm input[type="email"] {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          flex: 1 0 250px;
        }

        .notifyForm button {
          background-color: #00aaff;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }

        .notifyForm button:hover {
          background-color: #0088cc;
        }

        .notifyForm .status {
          margin-top: 1rem;
          color: #0f0;
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
          .sec {
          margin-top: 40px;
          }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .techGrid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}

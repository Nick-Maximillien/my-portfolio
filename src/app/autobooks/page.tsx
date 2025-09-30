'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AutoBooksPage() {
  return (
    <>
      <main className="projectPage">
        <div className="heade">
          <h1>AutoBooks AI</h1>
          <p>AI-powered accounting and financial copilot for SMEs — IFRS-compliant, real-time insights, and document intelligence.</p>
        </div>

        <section>
          <h2>What It Does</h2>
          <p>
            AutoBooks AI automates bookkeeping, financial analysis, and document processing. Businesses upload invoices, receipts, bank statements, or purchase orders, and the system extracts data, balances books, and provides actionable insights — all in real-time and fully IFRS compliant.
          </p>
          <div className="links">
            <Link href="https://www.canva.com/design/DAGuQ1jsWuw/le2KZHSP_blKFtxkXvi9FA/edit?utm_content=DAGuQ1jsWuw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
              📁 View in Canva
            </Link>
          </div>
        </section>

        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> Next.js (Static Export), Tailwind CSS</li>
            <li><strong>Backend:</strong> FastAPI + OCR/NLP AI Models</li>
            <li><strong>Database:</strong> Django + PostgreSQL</li>
            <li><strong>Storage:</strong> Cloudinary</li>
            <li><strong>Messaging:</strong> Email & Webhooks</li>
            <li><strong>Fallback:</strong> Predefined finance templates (offline logic)</li>
            <li><strong>Hosting:</strong> Vercel, Railway, Render</li>
          </ul>
        </section>

        <section>
          <h2>IFRS-for-SMEs Domain Precision</h2>
          <p>
            Built on top of our AI engine, AutoBooks encodes the entire IFRS for SMEs accounting standard in Python. Every account, journal, and transaction is automatically validated against IFRS rules. Automated double-entry, classification, and reporting ensure books are precise, compliant, and ready for audits — no manual intervention required.
          </p>
          <Image
            src="/images/ifrs.png"
            alt="IFRS Domain Precision Layer"
            width={600}
            height={400}
            className="screenshot-img"
          />
        </section>

        <section>
          <h2>🎥 Demo Videos</h2>
          <h3>Web App Demo</h3>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/YOUR_WEB_DEMO" title="Web Demo" allowFullScreen></iframe>
          </div>

          <h3 style={{marginTop: '2rem'}}>Document Upload Demo</h3>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/YOUR_DOC_DEMO" title="Document Demo" allowFullScreen></iframe>
          </div>
        </section>

        <section>
          <h2>Live Screenshots</h2>
          {['dash1.png','dash2.png','dash3.png','invoice.png','copilot.png','report.png'].map((img) => (
            <Image key={img} src={`/images/${img}`} alt={img} width={600} height={400} className="screenshot-img"/>
          ))}
        </section>

        <section className="links">
          <h2>Live Links</h2>
          <Link href="https://autobooks-ai.vercel.app" target="_blank">🌐 Web App</Link>
          <Link href="/signup" target="_blank">📝 Sign Up</Link>
          <Link href="https://www.notion.so/AutoBooks-AI-Launchkit" target="_blank">📁 Notion Launchkit</Link>
        </section>

        <section>
          <h2>Notes from the Builder</h2>
          <p>
            AutoBooks AI was built with a focus on real SMEs — delivering clean, precise, and actionable financial intelligence. Every feature is designed to minimize friction, maximize automation, and make bookkeeping effortless. It runs silently, letting businesses focus on growth, not manual accounting.
          </p>
        </section>
        <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let us create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

        {/* Inline JSX Styles */}
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

          .projectPage {
            max-width: 960px;
            margin: auto;
            padding: 2rem 1rem;
          }

          .header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .header h1 {
            font-size: 2rem;
            color: var(--foreground);
            margin-bottom: 0.5rem;
          }

          .header p {
            font-size: 1rem;
            color: var(--foreground);
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

          h3 {
            color: var(--foreground);
            margin-top: 1rem;
            margin-bottom: 0.5rem;
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
            .video-wrapper iframe {
              height: 240px;
            }
            .screenshot-img {
              max-width: 100%;
            }
            .header h1 {
              font-size: 1.5rem;
            }
            .header p {
              font-size: 0.95rem;
            }
            section {
              padding: 1rem;
            }
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
    </>
  );
}

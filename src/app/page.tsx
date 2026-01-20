// src/app/page.tsx
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="overlay" />
          <div className="hero-content">
            <h1>MedGate Forensic</h1>
            <p className="subtitle">
              Auditable Medical AI · Clinical Compliance · Forensic Evidence
            </p>

            <div className="hero-actions">
              <Link href="/audit" className="btn primary">
                Run Compliance Audit
              </Link>
              <Link href="/research" className="btn secondary">
                Explore Clinical Protocols
              </Link>
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section className="value">
          <p>
            MedGate Forensic transforms clinical AI outputs into{" "}
            <strong>traceable, protocol-aligned, auditable evidence</strong>.
            <br />
            Built for regulators, reviewers, and high-stakes healthcare systems.
          </p>
        </section>

        {/* FOOTER */}
        <footer>
          Designed for regulated environments · No hallucinations · Full trace
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #0a0f1c;
          --text: #e6e8ee;
          --muted: #9aa4b2;
          --blue: #3b82f6;
          --border: rgba(255, 255, 255, 0.15);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 78vh;
          background-image: url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 15, 28, 0.75),
            rgba(10, 15, 28, 0.9)
          );
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
        }

        h1 {
          font-size: 3.8rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.2rem;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* BUTTONS */
        .btn {
          padding: 0.9rem 1.8rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }

        .btn.primary {
          background: var(--blue);
          color: white;
          border-color: var(--blue);
        }

        .btn.primary:hover {
          background: #2563eb;
        }

        .btn.secondary {
          background: transparent;
          color: var(--text);
        }

        .btn.secondary:hover {
          border-color: var(--blue);
          color: var(--blue);
        }

        /* VALUE */
        .value {
          padding: 4rem 2rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--muted);
        }

        .value strong {
          color: var(--text);
          font-weight: 600;
        }

        /* FOOTER */
        footer {
          margin-top: auto;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--muted);
          opacity: 0.7;
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.6rem;
          }
        }
      `}</style>
    </>
  );
}

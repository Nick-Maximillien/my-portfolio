'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { uploadForensicDocument, ForensicResponse } from '../lib/api';

export default function AuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<NonNullable<ForensicResponse['agent_trace']>>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      // Clear previous logs
      setLogs([{ 
        timestamp: new Date().toISOString(), 
        step: "INIT", 
        message: "🚀 Uploading document to secure enclave...", 
        status: "INFO" 
      }]);

      const result = await uploadForensicDocument(
        file,
        'Full compliance audit'
      );

      // Once the result comes back, we replace the loading logs with the ACTUAL server trace
      if (result.agent_trace) {
        setLogs(result.agent_trace);
      } else {
        // Fallback if no trace returned
        setLogs(prev => [...prev, {
            timestamp: new Date().toISOString(),
            step: "FINISH",
            message: "✅ Audit processing complete.",
            status: "SUCCESS"
        }]);
      }
      
      // Store result and redirect
      localStorage.setItem(result.task_id, JSON.stringify(result));
      
      // Short delay to let user see "Success"
      setTimeout(() => {
        router.push(`/dashboard?reportId=${result.task_id}`);
      }, 1500);

    } catch (error) {
      console.error(error);
      setLogs(p => [...p, {
        timestamp: new Date().toISOString(),
        step: "ERROR",
        message: "❌ Critical Failure: Document processing failed.",
        status: "CRITICAL"
      }]);
      alert('Error: Document upload or audit failed.');
      setLoading(false);
    }
  };

  return (
    <>
      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="overlay" />
          <div className="hero-content">
            <h1>Compliance Audit</h1>
            <p>
              Deterministic forensic validation of medical claims against
              executable clinical protocols.
            </p>
          </div>
        </section>

        {/* PANEL */}
        <section className="panel">
          <div className={`dropzone ${loading ? 'loading' : ''}`}>
            <input
              type="file"
              accept=".pdf" 
              onChange={handleFileUpload}
              disabled={loading}
            />

            {!loading ? (
              <>
                <p className="primary-text">Upload Medical Record</p>
                <p className="secondary-text">
                  PDF Document · No patient identifiers · Local secure processing
                </p>
                <span className="hint">Click or drag file to begin</span>
              </>
            ) : (
              <div className="log-container">
                {logs.map((log, i) => (
                  <div key={i} className="log-entry">
                    <span className="log-timestamp">
                        {new Date(log.timestamp).toLocaleTimeString([], {hour12: false})}
                    </span>
                    <span className={`log-step ${log.status?.toLowerCase() || 'info'}`}>
                        {log.step}
                    </span>
                    <span className="log-msg">{log.message}</span>
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            )}
          </div>
        </section>

        <footer>
          Protocol-driven · Evidence-first · Fully traceable
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #0a0f1c;
          --panel: #11172a;
          --border: rgba(255, 255, 255, 0.18);
          --text: #e6e8ee;
          --muted: #9aa4b2;
          --blue: #3b82f6;
          --green: #10b981;
          --red: #ef4444;
          --yellow: #f59e0b;
        }

        .page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HERO */
        .hero {
          width: 100%;
          height: 48vh;
          min-height: 320px;
          background-image: url('https://images.unsplash.com/photo-1583912268181-8d8a9d1a6e58');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 15, 28, 0.55),
            rgba(10, 15, 28, 0.95)
          );
        }

        .hero-content {
          position: relative;
          max-width: 720px;
          padding: 0 2rem;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .hero-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--muted);
        }

        /* PANEL */
        .panel {
          width: 100%;
          max-width: 680px;
          margin-top: -4rem;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 3rem;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        .dropzone {
          position: relative;
          border: 2px dashed var(--border);
          border-radius: 14px;
          padding: 4rem 3rem;
          text-align: center;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .dropzone:hover {
          border-color: var(--blue);
          background: rgba(59, 130, 246, 0.05);
        }

        .dropzone.loading {
          border-color: var(--green);
          background: rgba(16, 185, 129, 0.05);
          justify-content: flex-start;
          align-items: stretch;
          padding: 2rem;
          text-align: left;
        }

        .dropzone input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        /* LOG STYLES */
        .log-container {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 0.85rem;
          color: var(--text);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .log-entry {
          display: grid;
          grid-template-columns: 80px 100px 1fr;
          gap: 0.5rem;
          align-items: baseline;
          animation: fadeIn 0.3s ease-out;
        }

        .log-timestamp {
          color: var(--muted);
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .log-step { font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
        .log-step.info { color: var(--blue); }
        .log-step.success, .log-step.finish, .log-step.cleared { color: var(--green); }
        .log-step.error, .log-step.critical { color: var(--red); }
        .log-step.warning { color: var(--yellow); }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .primary-text {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .secondary-text {
          font-size: 0.95rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }

        .hint {
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          opacity: 0.75;
        }

        footer {
          margin-top: auto;
          padding: 3rem 1rem 2rem;
          font-size: 0.8rem;
          color: var(--muted);
          opacity: 0.7;
        }

        @media (max-width: 640px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .panel {
            padding: 2rem;
            margin-top: -3rem;
          }
          .log-entry {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
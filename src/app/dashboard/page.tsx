'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ForensicResponse } from '../lib/api';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const reportId = searchParams.get('reportId');
  
  const [data, setData] = useState<ForensicResponse | null>(null);

  // [NEW] State for toggling rule expansion in the sidebar
  const [expandedViolations, setExpandedViolations] = useState<Set<number>>(new Set());

  const toggleViolation = (index: number) => {
    const next = new Set(expandedViolations);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setExpandedViolations(next);
  };

  useEffect(() => {
    if (reportId) {
      const cached = localStorage.getItem(reportId);
      if (cached) setData(JSON.parse(cached));
    }
  }, [reportId]);

  if (!data)
    return (
      <div className="page-loading">
        Loading Forensic Report...
      </div>
    );

  return (
    <>
      <main className="page">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Audit Dashboard</h1>
            <p className="task-id">TASK ID: {data.task_id}</p>
          </div>
          <div className={`verdict-badge ${data.status === 'CLEARED' ? 'pass' : 'fail'}`}>
            {data.verdict}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="panel">
              <h2>Forensic Summary</h2>
              {/* Sourced from LLM (Narrative) */}
              <p>{data.audit_result.certification_statement || "No summary available."}</p>
            </div>

            <div className="panel">
              <h2>Compliance Matrix</h2>
              <div className="space-y-3">
                {/* Sourced from Forensic Evidence (Deterministic) - PASSED RULES */}
                {data.forensic_evidence?.passed_rules?.map((rule, i) => (
                  <div key={i} className="matrix-item pass">
                    <span>{rule.code}</span>
                    <span>PASS</span>
                  </div>
                ))}
                
                {/* ALSO SHOW FAILED RULES IN MATRIX */}
                {data.forensic_evidence?.violations?.map((v, i) => (
                  <div key={`fail-${i}`} className="matrix-item fail">
                    <span>{v.rule.code}</span>
                    <span>FAIL</span>
                  </div>
                ))}

                {/* Handle Empty State */}
                {(!data.forensic_evidence?.passed_rules?.length && !data.forensic_evidence?.violations?.length) && (
                    <div className="text-gray-500 italic">No rules applicable to this document.</div>
                )}
              </div>
            </div>

            {/* Agent Trace Log */}
            {data.agent_trace && (
              <div className="panel trace-panel">
                <h2>Agent Execution Log</h2>
                <div className="trace-logs">
                  {data.agent_trace.map((log, i) => (
                    <div key={i} className="trace-entry">
                      <span className="trace-time">
                        {new Date(log.timestamp).toLocaleTimeString([], {hour12: false})}
                      </span>
                      <span className={`trace-step ${log.status?.toLowerCase()}`}>
                        {log.step}
                      </span>
                      <span className="trace-msg">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Sourced from FORENSIC EVIDENCE */}
          <div className="panel sidebar">
            <h2>Critical Violations</h2>
            {(!data.forensic_evidence?.violations || data.forensic_evidence.violations.length === 0) ? (
              <p className="no-violations">None detected.</p>
            ) : (
              <div className="space-y-4">
                {data.forensic_evidence.violations.map((v, i) => {
                  const isExpanded = expandedViolations.has(i);
                  return (
                    <div 
                      key={i} 
                      className={`violation-item ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => toggleViolation(i)}
                    >
                      <div className="logic-source">
                        {v.protocol?.title} <span className="opacity-70">({v.rule?.code})</span>
                      </div>
                      
                      {v.rule?.text && (
                        <p className="law-text">"{v.rule.text}"</p>
                      )}
                      
                      <p className="trace">{v.validation_trace}</p>
                      
                      <div className="hint-text">
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <footer>MedGate Forensic · Evidence-first · Protocol-driven</footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #0b1020;
          --panel: #11172a;
          --border: rgba(255,255,255,0.12);
          --text: #e7ebf3;
          --muted: #9aa4b2;
          --blue: #3b82f6;
          --green: #22c55e;
          --red: #ef4444;
          --yellow: #f59e0b;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        .page {
          min-height: 100vh;
          padding: 4rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--muted);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          background: rgba(17, 23, 42, 0.65);
          padding: 2rem 2.5rem;
          border-radius: 20px;
          backdrop-filter: blur(6px);
          border: 1px solid var(--border);
        }

        .dashboard-header h1 {
          font-size: 2.6rem;
          margin-bottom: 0.25rem;
          color: var(--text);
          text-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }

        .task-id {
          font-family: monospace;
          font-size: 0.875rem;
          color: var(--muted);
        }

        .verdict-badge {
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .verdict-badge.pass {
          background: rgba(34,197,94,0.1);
          color: var(--green);
        }
        .verdict-badge.fail {
          background: rgba(239,68,68,0.1);
          color: var(--red);
        }

        .panel {
          background: var(--panel);
          border-radius: 18px;
          padding: 2.25rem;
          border: 1px solid var(--border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }

        .panel h2 {
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
          color: var(--text);
        }

        .panel p {
          color: var(--text);
          line-height: 1.6;
        }

        .matrix-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-family: monospace;
          font-size: 0.875rem;
        }
        .matrix-item.pass {
          background: rgba(34,197,94,0.1);
          color: var(--green);
          border: 1px solid rgba(34,197,94,0.2);
        }
        .matrix-item.fail {
          background: rgba(239,68,68,0.1);
          color: var(--red);
          border: 1px solid rgba(239,68,68,0.2);
        }

        .sidebar {
          border-left: 4px solid var(--red);
        }

        /* --- UPDATED INTERACTIVE VIOLATIONS --- */
        .violation-item {
          padding: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s;
        }
        
        .violation-item:last-child {
          border-bottom: none;
        }

        .violation-item:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .violation-item.expanded {
          background: #151e32;
          border: 1px solid var(--blue);
        }

        .logic-source {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }
        
        .law-text {
          font-size: 0.9rem;
          font-style: italic;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          padding-left: 0.75rem;
          border-left: 2px solid rgba(255,255,255,0.1);
          
          /* TRUNCATION LOGIC */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .violation-item.expanded .law-text {
          -webkit-line-clamp: unset;
          display: block;
          overflow: visible;
        }

        .trace {
          font-size: 0.85rem;
          color: var(--muted);
          margin-top: 0.5rem;
        }

        .hint-text {
          font-size: 0.7rem;
          color: var(--muted);
          margin-top: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.6;
          text-align: right;
        }

        .violation-item:hover .hint-text {
          opacity: 1;
          color: var(--blue);
        }

        .no-violations {
          color: var(--muted);
          font-style: italic;
        }

        .trace-panel {
          background: #0f1523;
        }
        
        .trace-logs {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .trace-entry {
          display: grid;
          grid-template-columns: 80px 100px 1fr;
          gap: 1rem;
          align-items: baseline;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .trace-time {
          color: var(--muted);
          font-size: 0.75rem;
        }

        .trace-step {
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .trace-step.info { color: var(--blue); }
        .trace-step.success { color: var(--green); }
        .trace-step.error { color: var(--red); }
        .trace-step.critical { color: var(--red); }
        .trace-step.warning { color: var(--yellow); }

        .trace-msg {
          color: var(--text);
          line-height: 1.4;
        }

        footer {
          margin-top: 4rem;
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted);
          opacity: 0.75;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
          }
          .trace-entry {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
        }
      `}</style>
    </>
  );
}
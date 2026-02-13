'use client';
import { useState } from 'react';
import { runForensicAgent, ForensicResponse } from '../lib/api';

export default function ResearchPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  
  // State for the Text Answer (The "Intelligence")
  const [summary, setSummary] = useState<string | null>(null);

  // State for Evidence (The "Raw Facts")
  const [facts, setFacts] = useState<Array<{
    protocol: string;
    code: string;
    text: string;
    scope?: string[];
    intent?: string[];
  }>>([]);

  // State for Agent Trace Logs
  const [trace, setTrace] = useState<NonNullable<ForensicResponse['agent_trace']>>([]);

  // State for toggling rule expansion (Set of indices)
  const [expandedRules, setExpandedRules] = useState<Set<number>>(new Set());

  const toggleRule = (index: number) => {
    const next = new Set(expandedRules);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setExpandedRules(next);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setFacts([]);
    setTrace([]);
    setSummary(null); 
    setExpandedRules(new Set()); 

    try {
      setTrace([{ 
        timestamp: new Date().toISOString(), 
        step: "INIT", 
        message: "🚀 Initializing Research Agent...", 
        status: "INFO" 
      }]);

      const uniqueCaseId = `RESEARCH-${Date.now()}`;

      const result = await runForensicAgent({
        case_id: uniqueCaseId,
        query,
        mode: 'research',
        // Research mode allows broader search by default, but we can pass 'clinical' if needed.
        // For now, we leave scope undefined to match "Universal Search" unless specified otherwise.
        claim_data: { events: [] }, 
      });

      if (result.agent_trace) {
        setTrace(result.agent_trace);
      }

      const narrative = result.audit_result?.llm_explanation || result.audit_result?.certification_statement;
      if (narrative) {
        setSummary(narrative);
      }

      const rawFacts = result.forensic_evidence?.retrieved_facts || [];
      
      const displayFacts = rawFacts.map((f: any) => ({
        protocol: f.protocol?.title || "Clinical Protocol",
        code: f.rule_code || "RULE",
        text: f.text || "No description provided.",
        scope: f.scope || [],
        intent: f.intent || []
      }));

      setFacts(displayFacts);

    } catch (err) {
      console.error(err);
      setTrace(prev => [...prev, {
        timestamp: new Date().toISOString(),
        step: "ERROR",
        message: "🔥 System Error: Failed to complete research.",
        status: "CRITICAL"
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="page">
        <header className="heade">
          <h1 style={{"margin": "10px", "fontWeight": "bold"}}>Clinical Protocol Research</h1>
          <p style={{"margin": "10px", "fontSize": "16px", "color": "#bbbbbb"}}>
            Explore deterministic requirements enforced by clinical compliance engines.
          </p>
        </header>

        <section className="search-panel">
          <form onSubmit={handleSearch} className="search-form">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What are the contraindications for fibrinolytic therapy?"
              className="search-input"
              disabled={loading}
            />
            <button disabled={loading} className="search-button">
              {loading ? 'Analyzing...' : 'Research'}
            </button>
          </form>
        </section>

        {/* 1. AGENT LOGS */}
        {trace.length > 0 && (
          <section className="trace-panel">
            <h2>Agent Execution Log</h2>
            <div className="trace-logs">
              {trace.map((log, i) => (
                <div key={i} className="trace-entry">
                  <span className="trace-time">
                    {new Date(log.timestamp).toLocaleTimeString([], {hour12: false})}
                  </span>
                  <span className={`trace-step ${log.status.toLowerCase()}`}>
                    {log.step}
                  </span>
                  <span className="trace-msg">{log.message}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. FORENSIC ANALYSIS */}
        {summary && (
          <section className="analysis-panel">
            <h2>Protocol Interpretation</h2>
            <div 
  className="analysis-disclaimer" 
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#e7ebf3',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    border: '1px solid #d1dbe5',
    fontWeight: '900'
  }}
>
  This explanation is a grounded rendering of retrieved clinical protocol clauses. No clinical decisions, prioritization, or personalization is performed.
</div>

            <div className="analysis-text whitespace-pre-wrap">
              {summary}
            </div>
          </section>
        )}

        {/* 3. EVIDENCE GRID */}
        {facts.length > 0 && (
          <section className="results">
            <h2>Retrieved Clinical Facts</h2>
            <div className="grid">
              {facts.map((req, i) => {
                const isExpanded = expandedRules.has(i);
                return (
                  <div 
                    key={i} 
                    className={`artifact ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleRule(i)}
                  >
                    <span className="check">⚖️</span>
                    <div className="artifact-content">
                      <div className="artifact-header">
                          <div className="meta">
                            {req.protocol} <span className="code">({req.code})</span>
                          </div>
                          <div className="badges">
                            {req.scope?.map(s => <span key={s} className={`badge ${s.toLowerCase()}`}>{s}</span>)}
                            {req.intent?.map(t => <span key={t} className={`badge ${t.toLowerCase()}`}>{t}</span>)}
                          </div>
                      </div>
                      
                      <div className="text">"{req.text}"</div>
                      <div className="hint-text">
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        
        {!loading && summary === null && trace.length > 1 && facts.length === 0 && (
            <div className="no-results">
                <p>No relevant clinical protocols found for this query.</p>
            </div>
        )}

        <footer>Protocol-first · Deterministic · Evidence-driven</footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #0b1020;
          --panel: #121933;
          --border: rgba(255, 255, 255, 0.12);
          --text: #e7ebf3;
          --muted: #9aa4b2;
          --blue: #3b82f6;
          --green: #22c55e;
          --red: #ef4444;
          --yellow: #f59e0b;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        .page {
          min-height: 100vh;
          padding: 4rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
          background-image: linear-gradient(
              rgba(11, 16, 32, 0.92),
              rgba(11, 16, 32, 0.92)
            ),
            url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3');
          background-size: cover;
          background-position: center;
        }

        .header h1 {
          font-size: 2.8rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        .header p {
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .search-panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 2.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
          margin-bottom: 2rem;
          margin-top: 3rem;
        }

        .search-form {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .search-input {
          flex: 1;
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          background: #0f1530;
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 1.05rem;
          outline: none;
        }

        .search-input:focus {
          border-color: var(--blue);
        }

        .search-button {
          padding: 1.25rem 2.25rem;
          border-radius: 12px;
          background: var(--blue);
          color: white;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .search-button:hover {
          background: #2563eb;
        }

        .search-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* --- TRACE LOG STYLES --- */
        .trace-panel {
          background: #0f1523;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 2rem;
          margin-bottom: 2.5rem;
          animation: slideDown 0.4s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .trace-panel h2, .analysis-panel h2, .results h2 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .trace-time { color: var(--muted); font-size: 0.75rem; }
        .trace-step { font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
        .trace-step.info, .trace-step.init { color: var(--blue); }
        .trace-step.success, .trace-step.finish, .trace-step.cleared { color: var(--green); }
        .trace-step.error, .trace-step.critical, .trace-step.halt, .trace-step.crash { color: var(--red); }
        .trace-step.warning, .trace-step.planning { color: var(--yellow); }
        .trace-msg { color: var(--text); line-height: 1.4; }

        /* --- ANALYSIS PANEL --- */
        .analysis-panel {
          background: rgba(59, 130, 246, 0.08); /* Blue Tint */
          border: 1px solid var(--blue);
          border-radius: 18px;
          padding: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .analysis-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #fff;
          font-weight: 400;
        }

        /* --- RESULTS STYLES --- */
        .results {
          background: rgba(18, 25, 51, 0.9);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 2.75rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 1.25rem;
        }

        .artifact {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: #0f1530;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s;
        }

        .artifact:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .artifact.expanded {
          background: #151e32;
          border-color: var(--blue);
        }

        .artifact-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          width: 100%;
        }

        .artifact-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .meta {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--blue); 
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        /* FULL SYSTEM BADGES */
        .badges { display: flex; gap: 4px; flex-wrap: wrap; }
        .badge {
            font-size: 0.6rem;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
            text-transform: uppercase;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        /* Scopes */
        .badge.clinical { background: rgba(59,130,246,0.15); color: #93c5fd; }
        .badge.facility { background: rgba(234,88,12,0.15); color: #fdba74; }
        .badge.billing { background: rgba(234, 179, 8, 0.15); color: #fde047; }
        .badge.legal { background: rgba(236, 72, 153, 0.15); color: #f9a8d4; }

        /* Intents */
        .badge.safety { background: rgba(239,68,68,0.2); color: #fca5a5; }
        .badge.compliance { background: rgba(99, 102, 241, 0.2); color: #a5b4fc; }
        .badge.quality { background: rgba(16,185,129,0.2); color: #6ee7b7; }
        .badge.documentation { background: rgba(168, 85, 247, 0.2); color: #d8b4fe; }

        .code { opacity: 0.7; font-weight: 400; color: #fff; }
        
        .text { 
          line-height: 1.6; 
          color: var(--text); 
          font-style: italic; 
          opacity: 0.9;
          
          /* TRUNCATION LOGIC */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .artifact.expanded .text {
          -webkit-line-clamp: unset;
          display: block;
          overflow: visible;
        }

        .hint-text {
          font-size: 0.7rem;
          color: var(--muted);
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.6;
        }

        .artifact:hover .hint-text {
          opacity: 1;
          color: var(--blue);
        }

        .check { font-size: 1.2rem; margin-top: -0.2rem; flex-shrink: 0; }
        
        .no-results {
            text-align: center;
            color: var(--muted);
            margin-top: 2rem;
            font-style: italic;
        }

        footer {
          margin-top: 4rem;
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted);
          opacity: 0.75;
        }

        @media (max-width: 640px) {
          .header h1 { font-size: 2.2rem; }
          .grid { grid-template-columns: 1fr; }
          .trace-entry { grid-template-columns: 1fr; gap: 0.25rem; }
        }
      `}</style>
    </>
  );
}
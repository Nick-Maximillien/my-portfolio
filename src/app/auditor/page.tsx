'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Activity,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Search,
  Zap,
  Droplet,
  Server,
  Wifi
} from 'lucide-react';
import { ForensicResponse } from '../lib/api';

export default function AuditorDashboard() {
  const [logs, setLogs] = useState<ForensicResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<ForensicResponse | null>(null);

  const fetchLogs = async () => {
    try {
      const res = await fetch('http://localhost:8000/forensic/tasks/');
      const data = await res.json();
      setLogs(data);
      if (!selectedTask && data.length > 0) setSelectedTask(data[0]);
    } catch (e) {
      console.error('Dashboard fetch failed', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper to choose the right icon for sensor types
  const getSensorIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('power') || n.includes('grid')) return <Zap size={18} className="text-yellow-400" />;
    if (n.includes('generator')) return <Server size={18} className="text-blue-400" />;
    if (n.includes('water')) return <Droplet size={18} className="text-blue-500" />;
    if (n.includes('oxygen')) return <Activity size={18} className="text-green-400" />;
    return <Wifi size={18} className="text-slate-400" />;
  };

  return (
    <div className="auditor-root">
      <style jsx>{`
        .auditor-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, #0f172a, #020617);
          color: #cbd5e1;
          font-family: ui-sans-serif, system-ui;
          display: flex;
          flex-direction: column;
        }

        header {
          background: linear-gradient(to bottom, #020617, #020617cc);
          border-bottom: 1px solid #1e293b;
          padding: 20px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .live-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #60a5fa;
        }

        main {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        aside {
          width: 380px;
          background: linear-gradient(to bottom, #020617, #020617aa);
          border-right: 1px solid #1e293b;
          overflow-y: auto;
        }

        .log-item {
          background: #020617;
          border: 1px solid #1e293b;
          border-radius: 14px;
          padding: 14px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .log-item:hover {
          border-color: #334155;
          transform: translateY(-1px);
        }

        .log-item.active {
          border-color: #3b82f6;
          background: linear-gradient(
            to bottom right,
            rgba(59, 130, 246, 0.15),
            rgba(59, 130, 246, 0.05)
          );
          box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2);
        }

        section {
          flex: 1;
          padding: 32px;
          overflow-y: auto;
        }

        .card {
          background: linear-gradient(to bottom right, #020617, #020617cc);
          border: 1px solid #1e293b;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
        }

        .card.valid {
          border-color: rgba(34, 197, 94, 0.3);
        }

        .card.invalid {
          border-color: rgba(239, 68, 68, 0.3);
        }

        .violation {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          padding: 16px;
          margin-top: 16px;
        }

        .passed {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 12px;
          padding: 14px;
          margin-top: 12px;
        }

        /* TELEMETRY GRID STYLES */
        .telemetry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #1e293b;
        }

        .sensor-box {
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sensor-label {
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sensor-value {
          font-size: 20px;
          font-weight: 700;
          color: #f1f5f9;
        }

        .sensor-unit {
          font-size: 12px;
          color: #64748b;
          font-weight: 400;
          margin-left: 4px;
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, display: 'flex', gap: 10 }}>
            <Shield size={26} color="#3b82f6" /> MedGate Command
          </h1>
          <p style={{ fontSize: 11, color: '#64748b', letterSpacing: '0.2em', marginLeft: 36 }}>
            REMOTE FORENSIC AUDITOR · L4
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div className="live-pill">
            <span style={{ width: 8, height: 8, background: '#3b82f6', borderRadius: '50%' }} />
            Live Stream
          </div>
          <button onClick={fetchLogs}>
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </header>

      {/* BODY */}
      <main>
        {/* STREAM */}
        <aside>
          <div style={{ padding: 16, fontSize: 11, color: '#64748b', letterSpacing: '0.15em' }}>
            AUDIT STREAM · {logs.length}
          </div>
          <div style={{ padding: 8, display: 'grid', gap: 8 }}>
            {logs.map((log) => (
              <div
                key={log.task_id}
                className={`log-item ${selectedTask?.task_id === log.task_id ? 'active' : ''}`}
                onClick={() => setSelectedTask(log)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {log.verdict === 'VALID' ? (
                      <CheckCircle size={14} color="#22c55e" />
                    ) : (
                      <AlertTriangle size={14} color="#ef4444" />
                    )}
                    <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{log.case_id}</span>
                  </div>
                  <span style={{ fontSize: 10, color: '#64748b' }}>
                    {log.created_at
                      ? new Date(log.created_at).toLocaleTimeString()
                      : 'Now'}
                  </span>
                </div>
                <div style={{ fontSize: 10, color: '#475569', marginTop: 4 }}>
                  {log.forensic_evidence?.mode === 'iot_stream' ? '📡 Sensor Telemetry' : '📄 Document Audit'}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* DETAILS */}
        <section>
          {selectedTask ? (
            <>
              {/* STATUS CARD */}
              <div className={`card ${selectedTask.verdict === 'VALID' ? 'valid' : 'invalid'}`}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 12}}>
                  <h2 style={{ fontSize: 28, fontWeight: 800 }}>
                    {selectedTask.verdict === 'VALID'
                      ? 'Compliance Verified'
                      : 'Violation Detected'}
                  </h2>
                  {selectedTask.notification_channel && (
                    <div style={{fontSize: 11, background: '#1e293b', padding: '4px 10px', borderRadius: 4, color: '#94a3b8'}}>
                      Alert: {selectedTask.notification_channel}
                    </div>
                  )}
                </div>

                {/* TELEMETRY VISUALIZATION (Added This Block) */}
                {selectedTask.claim_data?.events && selectedTask.claim_data.events.length > 0 && (
                  <div className="telemetry-grid">
                    {selectedTask.claim_data.events.map((event, idx) => (
                      <div key={idx} className="sensor-box">
                        <div className="sensor-label">
                          {getSensorIcon(event.name)} {event.name}
                        </div>
                        <div className="sensor-value">
                          {event.value}
                          {event.unit && <span className="sensor-unit">{event.unit}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* RULES & VIOLATIONS CARD */}
              <div className="card">
                <h3 style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color:'#64748b', marginBottom: 16}}>DETERMINISTIC FORENSIC GATES</h3>

                {selectedTask.forensic_evidence?.violations?.map((v, i) => (
                  <div key={i} className="violation">
                    <p style={{ fontSize: 13, fontFamily: 'monospace' }}>
                      ❌ {v.validation_trace || "Constraint Mismatch"}
                    </p>
                  </div>
                ))}

                {selectedTask.forensic_evidence?.passed_rules?.map((r, i) => (
                  <div key={i} className="passed">
                    <div style={{display:'flex', gap: 8, alignItems:'center'}}>
                      <CheckCircle size={14} color="#22c55e" /> 
                      <span style={{fontSize:11, fontWeight:700, color:'#22c55e'}}>{r.code}</span>
                    </div>
                    <p style={{ margin: '4px 0 0 22px', fontStyle: 'italic', fontSize: 13, opacity: 0.8 }}>
                      {r.text}
                    </p>
                  </div>
                ))}

                {(!selectedTask.forensic_evidence?.passed_rules?.length && !selectedTask.forensic_evidence?.violations?.length) && (
                   <p style={{fontSize: 13, fontStyle:'italic', color:'#64748b', textAlign:'center'}}>
                     No specific rules triggered for this event context.
                   </p>
                )}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', opacity: 0.4, marginTop: 100 }}>
              <Search size={64} style={{margin:'0 auto 16px'}} />
              <p>Select an audit event from the stream</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
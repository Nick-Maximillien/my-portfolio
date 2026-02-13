// src/app/page.tsx
"use client";
import Link from "next/link";
import { ShieldCheck, Microscope, Cpu, LayoutDashboard, Info, Database, Activity } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="page">
        <div className="scanline" />
        
        {/* HERO */}
        <section className="hero">
          {/* BLURRED OVERLAY */}
          <div className="overlay" />
          
          {/* Top Right Status */}
          <div className="top-nav">
             <Link href="/about" className="status-badge">
                <div className="led-green" />
                <span className="status-text">SYSTEM ONLINE</span>
                <div className="sep" />
                <Info size={14} className="info-icon"/>
             </Link>
          </div>

          <div className="hero-layout">
            
            {/* CENTER STAGE: Title + Controls */}
            <div className="center-stage">
                
                {/* TITLE GROUP */}
                <div className="title-group">
                    <h1>MedGate <span className="highlight">Forensic</span></h1>
                    <p className="subtitle">
                    Auditable Medical AI · Clinical Compliance · Forensic Evidence
                    </p>
                </div>

                {/* MECHANICAL CONTROL DECK */}
                <div className="control-deck">
                
                {/* BUTTON 1: AUDIT */}
                <Link href="/audit" className="mech-btn primary-mech">
                    <div className="icon-well">
                        <ShieldCheck size={28} strokeWidth={1.5} />
                    </div>
                    <div className="btn-content">
                        <span className="tech-label">01 // COMPLIANCE LAYER</span>
                        <span className="agent-name">Audit Agent</span>
                    </div>
                    <div className="corner-accent" />
                </Link>

                {/* BUTTON 2: RESEARCH */}
                <Link href="/research" className="mech-btn">
                    <div className="icon-well">
                        <Microscope size={28} strokeWidth={1.5} />
                    </div>
                    <div className="btn-content">
                        <span className="tech-label">02 // KNOWLEDGE BASE</span>
                        <span className="agent-name">Research</span>
                    </div>
                    <div className="corner-accent" />
                </Link>

                {/* BUTTON 3: IOT */}
                <Link href="/iot" className="mech-btn">
                    <div className="icon-well">
                        <Cpu size={28} strokeWidth={1.5} />
                    </div>
                    <div className="btn-content">
                        <span className="tech-label">03 // LIVE TELEMETRY</span>
                        <span className="agent-name">IoT Sentinel</span>
                    </div>
                    <div className="corner-accent" />
                </Link>

                {/* BUTTON 4: DASHBOARD */}
                <Link href="/auditor" className="mech-btn">
                    <div className="icon-well">
                        <LayoutDashboard size={28} strokeWidth={1.5} />
                    </div>
                    <div className="btn-content">
                        <span className="tech-label">04 // SYSTEM OVERSIGHT</span>
                        <span className="agent-name">Dashboard</span>
                    </div>
                    <div className="corner-accent" />
                </Link>

                </div>
            </div>

            {/* SIDE STAGE: Data Corpus Tray */}
            <div className="side-stage">
                <div className="corpus-tray">
                    <div className="tray-header">
                        <Database size={14} className="tray-icon"/>
                        <span className="tray-title">LIVE CORPUS // v2.1</span>
                    </div>
                    
                    <div className="tray-scroll">
                        {/* REED 1: HIV */}
                        <div className="data-reed">
                            <div className="reed-status-bar" />
                            <div className="reed-content">
                                <div className="reed-top">
                                    <span className="reed-name">HIV Guidelines</span>
                                    <span className="reed-tag clinical">CLINICAL</span>
                                </div>
                                <div className="reed-meta">
                                    <span>2022 Edition · NASCOP</span>
                                    <span className="reed-count">350+ Rules</span>
                                </div>
                            </div>
                        </div>

                        {/* REED 2: KQMH */}
                        <div className="data-reed">
                            <div className="reed-status-bar" />
                            <div className="reed-content">
                                <div className="reed-top">
                                    <span className="reed-name">KQMH Core Stds</span>
                                    <span className="reed-tag quality">QUALITY</span>
                                </div>
                                <div className="reed-meta">
                                    <span>2018 · 12 Dimensions</span>
                                    <span className="reed-count">240+ Rules</span>
                                </div>
                            </div>
                        </div>

                        {/* REED 3: CERTIFICATION */}
                        <div className="data-reed">
                            <div className="reed-status-bar" />
                            <div className="reed-content">
                                <div className="reed-top">
                                    <span className="reed-name">Certification Manual</span>
                                    <span className="reed-tag grading">GRADING</span>
                                </div>
                                <div className="reed-meta">
                                    <span>2020 · Star Rating Logic</span>
                                    <span className="reed-count">17 Gates</span>
                                </div>
                            </div>
                        </div>

                        {/* REED 4: INFRA */}
                        <div className="data-reed">
                            <div className="reed-status-bar" />
                            <div className="reed-content">
                                <div className="reed-top">
                                    <span className="reed-name">MOH Facility Stds</span>
                                    <span className="reed-tag infra">INFRA</span>
                                </div>
                                <div className="reed-meta">
                                    <span>Level 1-6 Structure</span>
                                    <span className="reed-count">Fixed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tray-footer">
                        <Activity size={12} className="pulse-icon"/>
                        <span>Vector Index: Synced</span>
                    </div>
                </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-line" />
          <p>Designed for regulated environments · No hallucinations · Full trace</p>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #03060b;
          --text: #e2e8f0;
          --muted: #94a3b8;
          --blue: #3b82f6;
          --blue-dim: rgba(59, 130, 246, 0.1);
          --cyan: #06b6d4;
          --border: rgba(255, 255, 255, 0.08);
          --btn-bg: rgba(11, 17, 33, 0.85);
          --btn-hover: rgba(19, 28, 51, 0.95);
          --well-bg: #050912;
          --tray-bg: rgba(5, 9, 18, 0.65);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          height: 100vh;
          overflow: hidden; 
        }

        .page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        /* Scanline */
        .scanline {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 5;
            opacity: 0.3;
        }

        /* HERO */
        .hero {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         /* background-image: url("https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=2000&q=80"); */

          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 6, 15, 0.4);
          backdrop-filter: blur(4px); 
          -webkit-backdrop-filter: blur(4px);
          z-index: 1;
        }

        /* TOP NAV */
        .top-nav {
            position: absolute;
            top: 2rem;
            right: 2rem;
            z-index: 10;
        }

        .status-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 16px;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid var(--border);
            border-radius: 99px;
            text-decoration: none;
            transition: border-color 0.2s;
            backdrop-filter: blur(10px);
        }
        
        .status-badge:hover { border-color: var(--muted); }

        .led-green {
            width: 8px; height: 8px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 8px #10b981;
        }
        
        .status-text {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            color: var(--muted);
        }

        .sep { width: 1px; height: 12px; background: var(--border); }
        .info-icon { color: var(--text); opacity: 0.7; }


        /* HERO LAYOUT - SPLIT STAGE */
        .hero-layout {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          padding: 0 2rem;
          display: flex;
          flex-direction: row; 
          align-items: center;
          justify-content: center;
          gap: 4rem; 
        }

        /* CENTER STAGE */
        .center-stage {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
        }

        /* SIDE STAGE (TRAY) */
        .side-stage {
            width: 300px;
            flex-shrink: 0;
            /* FIXED: Removed display:none and simplified animation */
            display: block; 
            animation: fadeInRight 0.6s ease-out;
            position: relative;
            top: -20px;
        }
        
        @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        /* TITLES */
        .title-group {
            margin-bottom: 3.5rem;
            text-align: center;
            width: 100%;
        }

        h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0 0 1rem 0;
          line-height: 1;
          color: white;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        
        .highlight {
            background: linear-gradient(to right, #3b82f6, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--muted);
          margin: 0;
          font-weight: bold;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        /* CONTROL DECK */
        .control-deck {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            width: 100%;
        }

        /* MECHANICAL BUTTONS */
        .mech-btn {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            background: var(--btn-bg);
            border: 1px solid var(--border);
            padding: 1.75rem 2rem;
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.2s ease-out;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
        }
        
        .mech-btn:hover {
            background: var(--btn-hover);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }
        
        .mech-btn:active { transform: translateY(1px); }

        .icon-well {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: var(--well-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--muted);
            flex-shrink: 0;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
            transition: color 0.2s, border-color 0.2s;
        }

        .mech-btn:hover .icon-well {
            color: #fff;
            border-color: rgba(255,255,255,0.15);
        }

        .btn-content {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .tech-label {
            font-size: 0.7rem;
            font-family: 'JetBrains Mono', monospace; 
            text-transform: uppercase;
            color: var(--cyan);
            opacity: 0.8;
            letter-spacing: 0.05em;
        }

        .agent-name {
            font-size: 1.35rem; 
            font-weight: 600;
            color: #fff;
            letter-spacing: -0.02em;
        }

        .corner-accent {
            position: absolute;
            top: 0; right: 0;
            width: 0; height: 0;
            border-style: solid;
            border-width: 0 20px 20px 0;
            border-color: transparent rgba(255,255,255,0.05) transparent transparent;
            transition: border-color 0.2s;
        }
        .mech-btn:hover .corner-accent {
            border-color: transparent var(--cyan) transparent transparent;
        }

        .primary-mech {
            background: linear-gradient(145deg, rgba(15, 28, 48, 0.9), rgba(11, 17, 33, 0.9));
            border-color: rgba(59, 130, 246, 0.3);
        }
        .primary-mech:hover {
            border-color: var(--blue);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
        }
        .primary-mech .tech-label { color: var(--blue); }
        .primary-mech .icon-well { color: var(--blue); background: rgba(59, 130, 246, 0.1); }
        .primary-mech:hover .icon-well { color: #fff; }


        /* --- CORPUS TRAY STYLES --- */
        .corpus-tray {
            background: var(--tray-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            backdrop-filter: blur(16px);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            box-shadow: 0 20px 60px -10px rgba(0,0,0,0.6);
            height: auto;
        }

        .tray-header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
            color: var(--muted);
        }

        .tray-title {
            font-size: 0.8rem;
            font-family: 'JetBrains Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: var(--cyan);
            font-weight: 700;
        }

        .tray-scroll {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        /* DATA REED */
        .data-reed {
            display: flex;
            align-items: stretch;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 4px;
            overflow: hidden;
            transition: all 0.2s ease;
            cursor: default;
        }

        .data-reed:hover {
            background: rgba(255,255,255,0.06);
            border-color: rgba(255,255,255,0.15);
            transform: translateX(-4px);
        }

        .reed-status-bar {
            width: 3px;
            background: var(--muted);
            opacity: 0.3;
            transition: all 0.2s;
        }
        .data-reed:hover .reed-status-bar { width: 4px; background: var(--cyan); opacity: 1; }

        .reed-content {
            padding: 10px 12px;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .reed-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .reed-name {
            font-size: 0.85rem;
            color: #f1f5f9;
            font-weight: 600;
            letter-spacing: 0.01em;
        }

        .reed-tag {
            font-size: 0.55rem;
            padding: 2px 5px;
            border-radius: 2px;
            font-weight: 700;
            letter-spacing: 0.05em;
        }
        .reed-tag.clinical { background: rgba(59,130,246,0.15); color: #93c5fd; }
        .reed-tag.quality { background: rgba(16,185,129,0.15); color: #6ee7b7; }
        .reed-tag.grading { background: rgba(245,158,11,0.15); color: #fcd34d; }
        .reed-tag.infra { background: rgba(139,92,246,0.15); color: #c4b5fd; }

        .reed-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.7rem;
            color: var(--muted);
            font-family: system-ui;
        }

        .reed-count { color: var(--cyan); opacity: 0.9; font-weight: 500; }

        .tray-footer {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.7rem;
            color: rgba(255,255,255,0.4);
            padding-top: 1rem;
            border-top: 1px solid var(--border);
            margin-top: auto;
        }
        
        .pulse-icon {
            color: #10b981;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
        }


        /* FOOTER */
        footer {
          margin-top: auto;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          width: 100%;
          position: relative;
          z-index: 2;
        }
        
        .footer-line {
            width: 100px;
            height: 1px;
            background: var(--border);
            margin: 0 auto 1rem auto;
            opacity: 0.5;
        }

        /* FIXED RESPONSIVE HIDING */
        @media (max-width: 768px) {
          .hero-layout { flex-direction: column; gap: 2rem; }
          .side-stage { display: none; } /* Hide only on mobile */
          .control-deck { max-width: 600px; grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem; }
          .mech-btn { padding: 1.25rem; }
          .page { height: auto; overflow-y: auto; }
        }
      `}</style>
    </>
  );
}
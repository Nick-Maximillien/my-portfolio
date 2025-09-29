'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmartAgrovetPage() {
  return (
    <>
      <main className="projectPage">
        <div className="heads">
          <h1>Smart Agrovet Webstore</h1>
          <p>Empowering modern farmers through e-commerce and AI integration</p>
          <div className="header-buttons">
            <Link href="https://agrosight.netlify.app" target="_blank">🌐 Live Site</Link>
            <Link href="https://github.com/Nick-Maximillien/online-store" target="_blank">📦 GitHub Repo</Link>
          </div>
        </div>

        <section>
          <h2>📌 Project Overview</h2>
          <p>
            Smart Agrovet is a full-featured online store for farm inputs, designed to streamline access to seeds, tools, and equipment for small and large-scale farmers. It's also intended to integrate with Agrosight AI — an AI-powered diagnosis engine that helps farmers identify crop issues via WhatsApp.
          </p>
        </section>

        <section>
          <h2>🎯 Goals</h2>
          <ul>
            <li>Create a mobile-first e-commerce experience for farmers</li>
            <li>Enable smart browsing and checkout for agri-products</li>
            <li>Serve as a frontend entry point for AI-powered crop diagnosis</li>
          </ul>
        </section>

        <section>
          <h2>🧰 Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> Next.js, Tailwind CSS, TypeScript</li>
            <li><strong>Backend:</strong> Django REST Framework</li>
            <li><strong>CMS:</strong> Django Admin Panel</li>
            <li><strong>Image Storage:</strong> Cloudinary</li>
            <li><strong>Deployment:</strong> Netlify (frontend), Railway (backend)</li>
          </ul>
        </section>

        <section>
          <h2>👨‍💻 My Role</h2>
          <p>
            I worked as the sole fullstack developer and product architect. I handled:
          </p>
          <ul>
            <li>Designing Django models and API endpoints</li>
            <li>Building a fast, mobile-optimized frontend with Next.js</li>
            <li>Setting up Cloudinary for real-time image scaling</li>
            <li>Creating an admin CMS for store owners</li>
            <li>Managing deployment pipelines for both frontend and backend</li>
          </ul>
        </section>

        <section>
          <h2>🚧 Challenges</h2>
          <p>
            Rural user performance was a key concern — Cloudinary’s CDN helped optimize image delivery. Another challenge was building a system flexible enough to scale into a broader AI ecosystem (e.g. connecting product data with diagnosis results).
          </p>
        </section>

        <section>
          <h2>📈 Outcome & Lessons Learned</h2>
          <p>
            The project served as a foundational block for Agrosight’s broader vision. I deepened my experience with REST API design, frontend performance tuning, and designing systems with scalable AI integration in mind.
          </p>
        </section>

        <section>
          <h2>📬 Let’s Work Together</h2>
          <p>
            Need an e-commerce solution tailored for your industry — or want to blend AI with online sales? Let's build it.
          </p>
          <p>
            <Link href="contactPage.html">📨 Contact Me</Link> <br/>
            📧 <a href="mailto:nicholasmuthoki@gmail.com">nicholasmuthoki@gmail.com</a>
          </p>
        </section>

        <style jsx>{`
          :root {
            --background: #f4f8fc;
            --foreground: #333;
            --accent: #1a73e8;
            --card-bg: #ffffff;
            --card-shadow: rgba(0,0,0,0.05);
          }
          body {
            margin:0;
            font-family:'Segoe UI', Roboto, sans-serif;
            background: var(--background);
            color: var(--foreground);
          }
          a { color: var(--accent); text-decoration:none; }
          a:hover { text-decoration:underline; }

          .projectPage {
            max-width: 960px;
            margin:auto;
            padding:2rem 1rem;
          }

          .header {
            text-align:center;
            margin-bottom:2rem;
          }

          .header-buttons {
            margin-top:1rem;
          }

          .header-buttons a {
            display:inline-block;
            background:var(--accent);
            color:white;
            text-decoration:none;
            padding:0.5rem 1rem;
            margin:0.3rem;
            border-radius:6px;
            transition:background 0.2s ease;
          }

          .header-buttons a:hover {
            background:#1259c3;
          }

          section {
            background: var(--card-bg);
            padding:1.5rem;
            margin-bottom:2rem;
            border-radius:12px;
            box-shadow: 0 6px 14px var(--card-shadow);
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
            margin-top:0;
            margin-bottom:1rem;
          }

          ul { padding-left:1.5rem; }
          li { margin-bottom:0.5rem; line-height:1.6; }

          @media (max-width:768px) {
            .header-buttons a { display:block; width:80%; margin:0.5rem auto; }
            h1 { font-size:1.8rem; }
          }

          @media (orientation: landscape) and (min-width:768px) {
            .header {
              display:flex;
              align-items:center;
              justify-content:space-between;
              text-align:left;
              gap:2rem;
            }
            .header p { max-width:50%; }
            section { padding:2rem; }
          }
        `}</style>
      </main>
    </>
  );
}

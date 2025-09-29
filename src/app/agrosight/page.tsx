'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AgrosightPage() {
  return (
    <>
      <main className="projectPage">
        <div className="header">
          <h1>Agrosight AI Assistant</h1>
          <p>Computer vision for rural agriculture — deployable on WhatsApp, web & offline.</p>
        </div>

        <section>
          <h2>What It Does</h2>
          <p>
            Agrosight AI is a real-time crop disease detection platform. Farmers upload images via WhatsApp or web,
            and the system returns localized Swahili advice based on AI diagnosis. It’s designed to run lean, offline-first, and field-tested.
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
            <li><strong>Backend:</strong> FastAPI + YOLOv8 (ONNX)</li>
            <li><strong>Database:</strong> Django + PostgreSQL</li>
            <li><strong>Storage:</strong> Cloudinary</li>
            <li><strong>Messaging:</strong> WhatsApp + Celery + Redis</li>
            <li><strong>Fallback:</strong> Swahili expert templates (offline logic)</li>
            <li><strong>Hosting:</strong> Vercel, Railway, Render</li>
          </ul>
        </section>

        <section>
          <h2>🎥 Demo Videos</h2>
          <h3>WhatsApp Assistant Demo</h3>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/vNyGnRv35yE" title="WhatsApp Demo" allowFullScreen></iframe>
          </div>

          <h3 style={{marginTop: '2rem'}}>Web Assistant Demo</h3>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/-FRqdW6BjxI" title="Web Demo" allowFullScreen></iframe>
          </div>
        </section>

        <section>
          <h2>Live Screenshots</h2>
          {['shot3.png','shot1.png','shot2.png','dash.png','dash1.png','dash5.png','dash6.png','dash7.png'].map((img) => (
            <Image key={img} src={`/images/${img}`} alt={img} width={600} height={400} className="screenshot-img"/>
          ))}
        </section>

        <section className="links">
          <h2>Live Links</h2>
          <Link href="https://agrosight-ai.vercel.app" target="_blank">🌐 Web App</Link>
          <Link href="https://agrosight-ai.vercel.app/whatsapp" target="_blank">💬 WhatsApp Assistant</Link>
          <Link href="https://www.notion.so/Agrosight-AI-23cfd0d4350d80d9a25dccef402872d3" target="_blank">📁 Notion Launchkit</Link>
        </section>

        <section>
          <h2>Notes from the Builder</h2>
          <p>
            This platform was built in focused solitude to serve the most overlooked users: rural farmers. Every line of code, every model, and every insight is designed for clarity, speed, and offline usability.
            The system runs silently — delivering intelligence, not noise.
          </p>
        </section>

        {/* Inline Styles */}
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
            margin-bottom: 0.5rem;
          }

          .header p {
            font-size: 1rem;
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

'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AminikaMedicalPage() {
  const screenshots = [
    'aminika1.png',
    'aminika2.png',
    'aminika3.png',
    'aminika4.png',
  ];

  return (
    <>
      <main className="projectPage">
        {/* Header */}
        <div className="header">
          <h1>Aminika Medical Services</h1>
          <p>
            Accessible, affordable, and high-quality healthcare with patient-centered care.
          </p>
          <div className="header-buttons">
            <Link href="https://aminika-medical.netlify.app" target="_blank">
              🌐 Live Site
            </Link>
            <Link href="https://github.com/Nick-Maximillien/aminika-medical" target="_blank">
              📦 GitHub Source
            </Link>
          </div>
        </div>

        {/* Overview */}
        <section>
          <h2>Overview</h2>
          <p>
            Aminika Medical Services is a healthcare provider dedicated to delivering compassionate, professional, and high-quality medical care to the community.
            With facilities at Tatu City (Ruiru-Kiambu road) and Mugutha (behind Spa Mall, Juja), the platform also integrates patient information management and appointment scheduling.
          </p>
        </section>

        {/* Mission & Vision */}
        <section>
          <h2>Mission & Vision</h2>
          <p><strong>Mission:</strong> Provide compassionate, patient-centered healthcare with professionalism, affordability, and innovation.</p>
          <p><strong>Vision:</strong> To be a leading medical service provider, trusted and renowned for excellence across the region.</p>
        </section>

        {/* Goals */}
        <section>
          <h2>Goals</h2>
          <ul>
            <li>Provide patients with clear information about services and facilities</li>
            <li>Streamline appointment booking and patient communication</li>
            <li>Integrate insurance management and coverage information</li>
            <li>Ensure mobile-first responsive web access for local communities</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> Next.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js + Express</li>
            <li><strong>Database:</strong> PostgreSQL</li>
            <li><strong>Deployment:</strong> Netlify (frontend), Railway (backend)</li>
            <li><strong>Other:</strong> Cloudinary for images, Stripe for payment integration</li>
          </ul>
        </section>

        {/* Screenshots */}
        <section>
          <h2>UI Screenshots</h2>
          <div className="screenshots-grid">
            {screenshots.map((img) => (
              <Image
                key={img}
                src={`/images/${img}`}
                alt={img}
                width={600}
                height={400}
                className="screenshot-img"
              />
            ))}
          </div>
        </section>

        {/* Video Demos */}
        <section>
          <h2>🎥 Demo Videos</h2>
          <h3>Website Walkthrough</h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Aminika Web Demo"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2>Challenges Solved</h2>
          <p>
            Ensuring smooth access to healthcare information for rural and urban users,
            optimizing appointment workflows, and integrating multiple insurance cover systems.
            Mobile-first design and fast loading times were key considerations.
          </p>
        </section>

        {/* Outcome */}
        <section>
          <h2>Outcome & Lessons Learned</h2>
          <p>
            The platform successfully provided a central hub for patients to access services, understand insurance coverage, and book appointments. It reinforced the importance of mobile-first design, clear information hierarchy, and seamless integration between frontend, backend, and third-party services.
          </p>
        </section>

        {/* Contact / Call to Action */}
        <section>
          <h2>Interested in a healthcare web app?</h2>
          <p>
            Let's build something impactful together. <Link href="/contactPage.html">Contact me</Link> to discuss your project.
          </p>
        </section>

        {/* Styles */}
        <style jsx>{`
          :root {
            --background: #0077cc;
            --foreground: #fff;
            --card-bg: #fff;
            --card-color: #333;
            --accent: #003366;
            --card-shadow: rgba(0,0,0,0.1);
          }

          body {
            margin:0;
            font-family:'Segoe UI', Roboto, sans-serif;
            background: var(--background);
            color: var(--foreground);
          }

          a { text-decoration:none; color: inherit; }
          a:hover { text-decoration: underline; }

          .projectPage {
            max-width: 960px;
            margin: auto;
            padding: 2rem 1rem;
          }

          .header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .header-buttons {
            margin-top: 1rem;
          }

          .header-buttons a {
            display: inline-block;
            background: var(--foreground);
            color: var(--background);
            text-decoration: none;
            padding: 0.5rem 1rem;
            margin: 0.3rem;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.2s ease, color 0.2s ease;
          }

          .header-buttons a:hover {
            background: #005fa3;
            color: #fff;
          }

          section {
            background: var(--card-bg);
            color: var(--card-color);
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 12px;
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
            margin-top: 0;
            margin-bottom: 1rem;
          }

          ul {
            padding-left: 1.5rem;
          }

          li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }

          .screenshots-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
          }

          .screenshot-img {
            width: 100%;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .video-wrapper iframe {
            width: 100%;
            height: 360px;
            border: none;
            margin-top: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          @media (max-width: 768px) {
            .header-buttons a {
              display: block;
              width: 80%;
              margin: 0.5rem auto;
            }
            h1 { font-size: 1.8rem; }
            h2 { font-size: 1.4rem; }
          }

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
            section { padding: 2rem; }
          }
        `}</style>
      </main>
    </>
  );
}

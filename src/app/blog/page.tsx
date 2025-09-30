'use client';
import React from 'react';
import Link from 'next/link';

export default function BlogWebsitePage() {
  return (
    <>
      <main className="projectPage">
        <div className="header">
          <h1>📚 Blog Website Case Study</h1>
          <p>Built with React and Strapi CMS for modern publishing</p>
          <div className="header-buttons">
            <Link href="https://muema-william.netlify.app" target="_blank">🌐 Live Site</Link>
            <Link href="https://github.com/Nick-Maximillien/react-blog" target="_blank">📦 GitHub Frontend</Link>
            <Link href="https://github.com/Nick-Maximillien/my-strapi-blog" target="_blank">📦 GitHub Backend</Link>
          </div>
        </div>

        <section>
          <h2>Overview</h2>
          <p>
            This blog platform was designed to help content creators, small businesses, and thought leaders publish and manage their posts effortlessly. It's built with <strong>React</strong> on the frontend and <strong>Strapi</strong> as the headless CMS backend.
          </p>
        </section>

        <section>
          <h2>Objectives</h2>
          <ul>
            <li>Build a clean and modern blog interface</li>
            <li>Fetch and display blog posts dynamically using an API</li>
            <li>Make it easy for non-technical users to add content via Strapi</li>
            <li>Ensure responsiveness and fast performance</li>
          </ul>
        </section>

        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>React.js</strong> — frontend framework</li>
            <li><strong>React Router</strong> — client-side navigation</li>
            <li><strong>Strapi CMS</strong> — backend content management</li>
            <li><strong>Axios / Fetch</strong> — for API communication</li>
            <li><strong>Bootstrap</strong> — for responsive grid and layout</li>
            <li><strong>Netlify</strong> — frontend hosting</li>
            <li><strong>Render</strong> — backend hosting</li>
          </ul>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Homepage with featured and latest blog posts</li>
            <li>Single post page with rich content formatting</li>
            <li>Dynamic routing using React Router</li>
            <li>Mobile-responsive and lightweight UI</li>
            <li>Admin dashboard via Strapi to manage posts and authors</li>
          </ul>
        </section>

        <section>
          <h2>Challenges Solved</h2>
          <p>
            Integrating a headless CMS like Strapi with React involved understanding APIs, managing dynamic routing, and securing CORS and image assets. I implemented clean UI layouts using Bootstrap's grid system and ensured fast performance across devices.
          </p>
        </section>

        <section>
          <h2>Ideal For</h2>
          <ul>
            <li>Content creators who want an easy-to-manage blog</li>
            <li>Agencies looking to offer clients a flexible publishing system</li>
            <li>Businesses that want a branded blog to boost SEO</li>
          </ul>
        </section>

        <section>
          <h2>Interested in a custom blog?</h2>
          <p>
            Let’s work together! <Link href="contactPage.html">Contact me</Link> to discuss your blog project.
          </p>
        </section>

        <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let's create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

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
            font-family: 'Segoe UI', Roboto, sans-serif;
            background: var(--background);
            color: var(--foreground);
          }

          a { text-decoration:none; }
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
            background: var(--foreground);
            color: var(--background);
            text-decoration:none;
            padding:0.5rem 1rem;
            margin:0.3rem;
            border-radius:6px;
            font-weight:bold;
            transition: background 0.2s ease, color 0.2s ease;
          }

          .header-buttons a:hover {
            background: #005fa3;
            color: #fff;
          }

          section {
            background: var(--card-bg);
            color: var(--card-color);
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
            padding-left:10px;
            margin-top:0;
            margin-bottom:1rem;
          }

          ul {
            padding-left:1.5rem;
          }
          li {
            margin-bottom:0.5rem;
            line-height:1.6;
          }

          @media (max-width:768px) {
            .header-buttons a {
              display:block;
              width:80%;
              margin:0.5rem auto;
            }
            h1 {
              font-size:1.8rem;
            }
            h2 {
              font-size:1.4rem;
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

          @media (orientation: landscape) and (min-width:768px) {
            .header {
              display:flex;
              align-items:center;
              justify-content:space-between;
              text-align:left;
              gap:2rem;
            }
            .header p {
              max-width:50%;
            }
            section {
              padding:2rem;
            }
          }
        `}</style>
      </main>
    </>
  );
}

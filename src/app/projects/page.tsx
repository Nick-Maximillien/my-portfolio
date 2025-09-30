// app/projects/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = {
  AI: [
    {
      name: "Agrosight AI",
      href: "/agrosight",
      image: "/images/shot3.png",
      description: "Real-time crop disease detection platform deployable on WhatsApp, web & offline."
    },
    {
      name: "AutoBooks AI",
      href: "/autobooks",
      image: "/images/autobooks.png",
      description: "Automated AI accounting assistant for B2B."
    }
  ],
  Blockchain: [
    {
      name: "Rust DeFi Engine",
      href: "/rust-defi",
      image: "/images/defi.png",
      description: "AI-powered Rust engine for DeFi applications."
    },
    {
      name: "Voting DApp",
      href: "/voting",
      image: "/images/voting.png",
      description: "Blockchain Voting for Agricultural Cooperatives — Transparent, Tamper-Proof Elections."
    },
    {
      name: "UrbanScope Chain",
      href: "/urbanscope",
      image: "/images/urbanscope.png",
      description: "Blockchain land use approval system for urban development proposals."
    },
    {
      name: "ArdhiChain (SmartLands)",
      href: "/ardhichain",
      image: "/images/ardhichain.png",
      description: "Blockchain Land Registry – Mint and manage property NFTs on Ethereum."
    }
  ],
  Fullstack: [
    {
      name: "Aminika Medical Services",
      href: "/aminika",
      image: "/images/aminika.png",
      description: "Healthcare platform providing appointment scheduling and patient information management."
    },
    {
      name: "Smart Agrovet Webstore",
      href: "/store",
      image: "/images/agroshop.png",
      description: "E-commerce platform for farm inputs with AI-powered crop diagnosis integration."
    },
    {
      name: "Blog Website",
      href: "/blog",
      image: "/images/blog.png",
      description: "React + Strapi headless CMS blog platform for modern content publishing."
    }
  ]
};

export default function ProjectsPage() {
  return (
    <section className="projectsPag">
      <div className="her">
        <h1 className="projectsTitle">My Projects</h1>
        <p>Explore my work across AI, Blockchain, and Fullstack development</p>
      </div>

      {Object.keys(projects).map((category) => (
        <div key={category} className="categorySection">
          <h2>{category}</h2>
          <div className="projectsGrid">
            {projects[category as keyof typeof projects].map((project) => (
              <Link key={project.name} href={project.href} className="projectCard">
                <div className="projectImage">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="projectImg"
                    priority
                  />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let's create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

      <style jsx>{`
        .projectsPag {
          background-color: #000;
          color: #fff;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', sans-serif;
        }
        .projectsTitle {
          margin: 2rem;
        }

        .her {
          text-align: center;
          margin-bottom: 2rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          color: #00aaff;
        }

        .hero p {
          font-size: 1.2rem;
          color: #ccc;
        }

        .categorySection {
          margin-bottom: 3rem;
        }

        .categorySection h2 {
          color: #00aaff;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .projectsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .projectCard {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          padding: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
          color: #fff;
        }

        .projectCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }

        .projectImage {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .projectImg {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .projectCard h3 {
          color: #00aaff;
          margin: 0.5rem 0;
        }

        .projectCard p {
          color: #ccc;
          font-size: 0.95rem;
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

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .projectsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

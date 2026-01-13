'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = {
  "Fintech & AI": [
    {
      name: "AutoBooks AI",
      href: "/autobooks",
      image: "/images/autobooks.png",
      description: "Financial Copilot using RAG and Vertex AI to automate IFRS accounting."
    },
    {
      name: "Agrosight AI",
      href: "/agrosight",
      image: "/images/shot3.png",
      description: "Offline-first computer vision platform for crop disease detection on Edge devices."
    }
  ],
  "Web3 Architecture": [
    {
      name: "Node.js Web3 Signing Engine",
      href: "/node-web3", // Create route
      image: "/images/defi.png",
      description: "Secure backend service for invisible wallet management, AES encryption, and L1->L2 bridging."
    },
    {
      name: "Flash USD System",
      href: "/flash-usd", // Create route
      image: "/images/ardhichain.png",
      description: "ERC20 utility token ecosystem with React Dapp and Role-Based Access Control (RBAC)."
    },
    {
      name: "Rust DeFi Engine",
      href: "/rust-defi", // Create route
      image: "/images/defi.png",
      description: "High-performance matching engine built in Rust for decentralized finance applications."
    },
    {
      name: "Voting DApp",
      href: "/voting",
      image: "/images/voting.png",
      description: "Tamper-proof voting system for cooperatives deployed on Lisk L2."
    }
  ],
  "Fullstack Systems": [
    {
      name: "Aminika Medical Services",
      href: "/aminika",
      image: "/images/aminika.png",
      description: "HIPAA-compliant healthcare platform for patient data management."
    },
    {
      name: "Smart Agrovet Webstore",
      href: "/store",
      image: "/images/agroshop.png",
      description: "Next.js E-commerce platform integrated with AI diagnostic tools."
    }
  ]
};

export default function ProjectsPage() {
  return (
    <section className="projectsPage">
      <div className="her">
        <h1 className="projectsTitle">Engineering Portfolio</h1>
        <p>A collection of rigorous systems across AI, Blockchain, and Fintech.</p>
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
        <h2>Ready to Build?</h2>
        <p>I am available for technical consulting and high-impact contract roles.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

      <style jsx>{`
        .projectsPage { background-color: #000; color: #fff; padding: 2rem 1rem; font-family: 'Segoe UI', sans-serif; max-width: 960px; margin: auto; }
        .projectsTitle { margin: 0; font-size: 2.5rem; color: #00aaff; }
        .her { text-align: center; margin-bottom: 3rem; }
        .her p { font-size: 1.2rem; color: #ccc; margin-top: 10px; }
        
        .categorySection { margin-bottom: 4rem; }
        .categorySection h2 { color: #00aaff; font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 1px solid #333; padding-bottom: 10px; display: inline-block; }
        
        .projectsGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .projectCard { background-color: #111; border-radius: 12px; overflow: hidden; padding: 1rem; transition: transform 0.3s, box-shadow 0.3s; text-decoration: none; color: #fff; border: 1px solid #222; }
        .projectCard:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3); border-color: #00aaff; }
        
        .projectImage { width: 100%; height: 200px; overflow: hidden; border-radius: 10px; margin-bottom: 1rem; }
        .projectImg { object-fit: cover; width: 100%; height: 100%; }
        
        .projectCard h3 { color: #fff; margin: 0.5rem 0; font-size: 1.2rem; }
        .projectCard p { color: #aaa; font-size: 0.95rem; line-height: 1.5; }
        
        .ctaSection { text-align: center; }
        .ctaBtn { display: inline-block; margin-top: 1rem; padding: 10px 18px; border-radius: 6px; background: #0074d9; color: #fff; text-decoration: none; font-weight: bold; transition: background 0.2s ease; }
        .ctaBtn:hover { background: #0052cc; }
        .sec { margin-top: 20px; margin-bottom: 40px; }
        
        @media (max-width: 768px) { .projectsGrid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
// app/skills/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = {
  AI: [
    { name: "Python", logo: "/logos/python.png", description: "Primary language for AI, ML, and data processing." },
    { name: "PyTorch", logo: "/logos/pytorch.png", description: "Framework for deep learning and neural networks." },
    { name: "Ultralytics YOLO", logo: "/logos/yolo.png", description: "Real-time object detection for computer vision tasks." },
    { name: "Albumentations", logo: "/logos/albumentations.png", description: "Data augmentation for image-based ML projects." },
    { name: "Computer Vision", logo: "/logos/vision.png", description: "AI systems that analyze visual data." },
    { name: "Machine Learning", logo: "/logos/learning.png", description: "Building predictive models and insights from data." },
    { name: "Data Annotation", logo: "/logos/label.png", description: "Manual and automated labeling for model training." },
    { name: "Colab", logo: "/logos/colab.png", description: "Cloud-based platform for AI experiments and GPU training." },
    { name: "OpenAI", logo: "/logos/openai.png", description: "Leveraging GPT models and OpenAI tools for advanced AI solutions." },
    { name: "LLaMA", logo: "/logos/llama.png", description: "Large language models for NLP tasks and custom AI solutions." },
    { name: "EasyOCR", logo: "/logos/ocr.png", description: "Optical character recognition AI model for text extraction from images." },
    { name: "LangChain", logo: "/logos/langchain.png", description: "Framework to build applications with language models." },
    { name: "ResNet50", logo: "/logos/resnet.png", description: "Deep convolutional neural network for image classification." },
    { name: "AI for Good", logo: "/logos/good.png", description: "Applying AI solutions for social and agricultural impact." },
    { name: "Domain Precision", logo: "/logos/precision.png", description: "Specialized AI models for domain-specific solutions." }
  ],
  Blockchain: [
    { name: "Solidity", logo: "/logos/solidity.png", description: "Smart contract programming on Ethereum." },
    { name: "Ethereum", logo: "/logos/ethereum.png", description: "Building decentralized applications and token systems." },
    { name: "Web3.py", logo: "/logos/web3.png", description: "Python library to interact with Ethereum blockchain." },
    { name: "Rust", logo: "/logos/rust.png", description: "High-performance programming for blockchain and AI backends." },
    { name: "ICP", logo: "/logos/icp.png", description: "Internet Computer Protocol for decentralized, scalable cloud applications." },
    { name: "Smart Contracts", logo: "/logos/contract.png", description: "Automated blockchain logic for decentralized apps." },
    { name: "ethers.js", logo: "/logos/ethers.png", description: "JavaScript library to interact with Ethereum." },
    { name: "Infura", logo: "/logos/infura.png", description: "Blockchain infrastructure provider for Ethereum nodes." },
    { name: "Hardhat", logo: "/logos/hardhat.png", description: "Ethereum development environment for testing and deployment." },
    { name: "Remix", logo: "/logos/remix.png", description: "Browser-based IDE for Ethereum smart contracts." },
    { name: "Sepolia", logo: "/logos/sepolia.png", description: "Ethereum testnet for safe smart contract deployment." },
    { name: "Base", logo: "/logos/base.png", description: "Layer 2 blockchain platform for faster transactions." },
    { name: "Layer2", logo: "/logos/layer2.png", description: "Scaling solutions for Ethereum and other chains." }
  ],
  Frontend: [
    { name: "Next.js", logo: "/logos/next.png", description: "React framework for SSR and static site generation." },
    { name: "React", logo: "/logos/react.png", description: "Component-based frontend development for web apps." },
    { name: "TypeScript", logo: "/logos/typescript.png", description: "Typed superset of JavaScript for safer and scalable frontend development." },
    { name: "JavaScript", logo: "/logos/js.png", description: "Core web programming language for interactive interfaces." },
    { name: "HTML", logo: "/logos/html.png", description: "Markup language for structuring web content." },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png", description: "Utility-first CSS framework for rapid, responsive design." },
    { name: "CSS", logo: "/logos/css.png", description: "Styling and layout for modern web applications." }
  ],
  Backend: [
  { name: "Django", logo: "/logos/django.png", description: "Python framework for scalable web applications and APIs." },
  { name: "Rust", logo: "/logos/rust.png", description: "Superfast backend development for AI and DeFi engines." },
  { name: "REST APIs", logo: "/logos/rest.png", description: "Building reliable and maintainable endpoints for clients." },
  { name: "PostgreSQL", logo: "/logos/postgres.png", description: "Robust relational database management system." },
  { name: "Redis", logo: "/logos/redis.png", description: "In-memory data store for caching and fast operations." },
  { name: "Twilio", logo: "/logos/twilio.png", description: "Messaging and communication integration for notifications, WhatsApp, and SMS services." },
  { name: "Messaging Integration", logo: "/logos/messaging.png", description: "Integrating various messaging platforms for seamless user communication." },
  { name: "FinTech", logo: "/logos/fintech.png", description: "Building financial technology solutions such as AutoBooks AI for automated accounting." }
  ],
  DevOps: [
    { name: "Docker", logo: "/logos/docker.png", description: "Containerization for consistent deployment of microservices." },
    { name: "Microservices", logo: "/logos/microservices.png", description: "Modular service architecture for scalable systems." },
    { name: "Render", logo: "/logos/render.png", description: "Cloud platform for hosting web services and microservices." },
    { name: "Vercel", logo: "/logos/vercel.png", description: "Platform for deploying frontend applications and static sites." },
    { name: "Netlify", logo: "/logos/netlify.png", description: "Frontend hosting and serverless functions platform." },
    { name: "Cloud Computing", logo: "/logos/cloud.png", description: "Leveraging cloud infrastructure for scalable apps." },
    { name: "Git & GitHub", logo: "/logos/github.png", description: "Version control and collaborative software development." }
  ],
  Personal: [
  { name: "Communication", logo: "/logos/comms.png", description: "Clear and effective interpersonal and professional communication." },
  { name: "Team Collaboration", logo: "/logos/team.png", description: "Working efficiently with diverse teams to deliver results." },
  { name: "Problem Solving", logo: "/logos/problem.png", description: "Analytical thinking and creative solutions for complex challenges." },
  { name: "Organization", logo: "/logos/organization.png", description: "Organizational skill: guiding projects towards success with vision, structure, and accountability."},
  { name: "Time Management", logo: "/logos/time.png", description: "Efficiently prioritizing tasks and meeting deadlines consistently." },
  { name: "Adaptability", logo: "/logos/adaptability.png", description: "Quickly adjusting to changes and new technologies in dynamic environments." },
  { name: "Networking", logo: "/logos/networking.png", description: "Building and maintaining meaningful professional relationships." },
  { name: "Mentorship", logo: "/logos/mentorship.png", description: "Supporting the growth and development of team members and peers." },
  { name: "Social Entrepreneurship", logo: "/logos/social.png", description: "Creating social impact through innovative solutions." },
  { name: "Rural Development Awareness", logo: "/logos/rural.png", description: "Understanding challenges and opportunities in rural communities." },
  { name: "Innovation Management", logo: "/logos/innovation.png", description: "Driving creative and effective problem solving in projects." },
  { name: "Product Development Awareness", logo: "/logos/product.png", description: "Understanding processes for building impactful products." }
]
};


export default function SkillsPage() {
  return (
    <section className="skillsPag">
      <div className="her">
        <h1 className="skillTitle">My Skills</h1>
        <p className="skillSubtitle">Technical, professional skills, and tools that I use to build AI, Blockchain, Fullstack systems and innovate.</p>
      </div>

      {Object.keys(skills).map((category) => (
        <div key={category} className="categorySection">
          <div className="categoryHeader">
            <h2>{category}</h2>
          </div>
          <div className="skillsGrid">
            {skills[category as keyof typeof skills].map((skill) => (
              <div key={skill.name} className="skillCard">
                <div className="skillLogo">
                  <Image src={skill.logo} alt={skill.name} width={60} height={60} />
                </div>
                <p className="skillName">{skill.name}</p>
                <p className="skillDesc">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <section className="ctaSection">
        <h2>Work With Me</h2>
        <p>Ready to start a project, collaborate with your team, or get expert guidance? Let us create impactful solutions together.</p>
      </section>
      <div className="ctaSection sec">
        <Link href="/contact" className="ctaBtn">Get in Touch</Link>
      </div>

      <style jsx>{`
        .skillsPag {
          background-color: #000;
          color: #fff;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', sans-serif;
        }
          .skillLogo {
          border-radius: 100px
          }

        .her {
          text-align: center;
          margin-bottom: 5px;
        }

        .her h1 {
          font-size: 2.5rem;
          color: #00aaff;
        }

        .her p {
          font-size: 1.2rem;
          color: #ccc;
        }
          .skillTitle {
          padding: 1rem;
          }
          .skillSubtitle {
          padding: 1rem;
          }

        .categorySection {
          margin-bottom: 3rem;
        }

        .categoryHeader {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .categoryHeader h2 {
          font-size: 2rem;
          color: #00aaff;
        }

        .skillsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }

        .skillCard {
          background-color: #111;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .skillCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }

        .skillName {
          margin-top: 0.5rem;
          font-weight: bold;
          color: #fff;
        }

        .skillDesc {
          font-size: 0.85rem;
          margin-top: 0.3rem;
          color: #ccc;
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

          .skillsGrid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}

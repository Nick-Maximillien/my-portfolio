'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const contacts = [
  { name: 'Email', href: 'mailto:nicholasmuthoki@gmail.com', logo: '/images/email1.png' },
  { name: 'WhatsApp', href: 'https://agrosight-ai.vercel.app/message', logo: '/images/whatsapp.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-muthoki-5642a7288', logo: '/images/linkedIn1.png' },
  { name: 'Notion', href: 'https://www.notion.so/Nick-s-Lab', logo: '/images/notion.png' },
  { name: 'GitHub', href: 'https://github.com/Nick-Maximillien', logo: '/images/github.png' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_IDS!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Failed to send. Please try again later.');
      });
  };

  // ✅ JSON-LD structured data for Google Knowledge Graph
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ithoka Microsystems',
    image: 'https://ithoka.vercel.app/logos/logo.png',
    description:
      'Ithoka Microsystems — AI & Blockchain engineering firm offering consulting, fullstack development, and R&D innovation.',
    url: 'https://ithoka.vercel.app/contact',
    email: 'nicholasmuthoki@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
    },
    sameAs: [
      'https://www.linkedin.com/in/nicholas-muthoki-5642a7288',
      'https://github.com/Nick-Maximillien',
      'https://www.notion.so/Nick-s-Lab',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'nicholasmuthoki@gmail.com',
        contactType: 'customer support',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
    ],
  };

  return (
    <main className="contactPag" role="main">
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="her">
        <h1 className="contactTitle">Contact</h1>
        <p className="contactSub">
          Get in touch via email or social links below. We usually respond promptly.
        </p>
      </header>
      <div className="ctaButtons" style={{ marginBottom: '20px' }}>
        <Link href="/onboard" className="ctaBtnOutline">
          Start Your Project
        </Link>
      </div>

      <section className="contactIcons" aria-label="Contact Methods">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`Contact us via ${contact.name}`}
          >
            <Image
              src={contact.logo}
              alt={`${contact.name} icon`}
              width={50}
              height={50}
            />
            <span>{contact.name}</span>
          </a>
        ))}
      </section>

      {!submitted ? (
        <section aria-labelledby="contact-form">
          <h2 id="contact-form" className="sr-only">
            Contact Form
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} aria-label="Contact Form">
            <h2>Send a Message</h2>

            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                required
                aria-required="true"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                required
                aria-required="true"
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                required
                aria-required="true"
              ></textarea>
            </label>

            <input type="submit" value="Send" aria-label="Send message" />
          </form>
        </section>
      ) : (
        <div className="thankYou">
          <h2>Thank you!</h2>
          <p>Your message has been sent. I will get back to you shortly.</p>
          <Link href="/" className="ctaBtn">
            Back to Home
          </Link>
        </div>
      )}

      <div className="ctaButtons">
        <Link href="/ai-blockchain-projects" className="ctaBtn">
          Explore Our Projects
        </Link>
        <a href="https://ithoka.vercel.app/onboard" className="ctaBtnOutline">
          Start Your Project
        </a>
      </div>

      <footer>
        <blockquote>
          “The future belongs to those who believe in the beauty of their dreams.”
          <p className="founder">– Eleanor Roosevelt</p>
        </blockquote>
      </footer>

      <style jsx>{`
        .contactPag {
          background-color: #000;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          padding: 2rem 1rem;
        }
        .her {
          text-align: center;
          margin-bottom: 2rem;
        }
        .her h1 {
          font-size: 2.5rem;
          color: #00aaff;
        }
        .her p {
          font-size: 1.2rem;
          color: #ccc;
        }
        .contactTitle {
          padding: 1rem;
        }
        .contactSub {
          padding: 1rem;
        }
        .contactIcons {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .contactIcons a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #fff;
          transition: transform 0.2s ease-in-out;
        }
        .contactIcons a:hover {
          transform: scale(1.05);
        }
        .contactIcons span {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        form {
          max-width: 600px;
          margin: auto;
          background-color: #111;
          padding: 2rem;
          border-radius: 12px;
        }
        form h2 {
          color: #00aaff;
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        input[type='text'],
        input[type='email'],
        textarea {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.25rem;
          border-radius: 5px;
          border: 1px solid #333;
          background-color: #222;
          color: #fff;
          font-family: inherit;
        }
        textarea {
          height: 120px;
          resize: vertical;
        }
        input[type='submit'] {
          background-color: #00aaff;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          margin-top: 1rem;
        }
        input[type='submit']:hover {
          background-color: #0088cc;
        }
        .thankYou {
          text-align: center;
          padding: 2rem;
          border-radius: 12px;
          background: #f0f8ff;
          color: #003366;
          max-width: 600px;
          margin: auto;
        }
        blockquote {
          margin-top: 3rem;
          text-align: center;
          font-style: italic;
          font-size: 1rem;
          color: #ccc;
        }
        .founder {
          font-weight: bold;
          margin-top: 0.5rem;
          color: #00aaff;
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          form {
            padding: 1rem;
          }
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </main>
  );
}

'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <p>
          &copy; {year} Nick Muthoki | All rights reserved.
        </p>
        <div className="footerLinks">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

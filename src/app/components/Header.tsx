'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).classList.contains('menuIcon')
      ) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="row headerContainer">
        <div className="head">
          {/* Logo */}
          <div className="logo">
            <Image
              className="logoImg"
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={70}
              priority
            />
          </div>

          {/* Dropdown menu for portrait */}
          <nav className="nav dropdown-nav">
            <ul className="theMenu">
              <li className="dropdown-container" style={{ position: 'relative' }}>
                <figure className="menu" onClick={() => setDropDownOpen(!dropDownOpen)}>
                  <Image
                    className="dropbtn menuIcon"
                    src="/images/menu.png"
                    alt="Menu"
                    width={35}
                    height={35}
                  />
                </figure>

                {mounted && dropDownOpen &&
                  createPortal(
                    <ul
                      ref={dropdownRef}
                      className="dropdown-list"
                      style={{
                        position: 'absolute',
                        top: '70px', // distance below header
                        right: '20px',
                        backgroundColor: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        listStyle: 'none',
                        padding: '10px 0',
                        minWidth: '150px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                        zIndex: 2000,
                      }}
                    >
                      <li className="menuItem"><Link href="/">Home</Link></li>
                      <li className="menuItem"><Link href="/about">About</Link></li>
                      <li className="menuItem"><Link href="/services">Services</Link></li>
                      <li className="menuItem"><Link href="/projects">Projects</Link></li>
                      <li className="menuItem"><Link href="/skills">Skills</Link></li>
                      <li className="menuItem"><Link href="/contact">Contact</Link></li>
                    </ul>,
                    document.body
                  )
                }
              </li>
            </ul>
          </nav>

          {/* Inline menu for landscape */}
          <nav className="nav inline-nav">
            <ul className="inlineMenu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

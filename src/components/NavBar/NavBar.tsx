'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // TODO: Make sure the links are correct once the pages/routes are created.
  const navItems = [
    { label: 'Cybersecurity', href: '/cybersecurity' },
    { label: 'Consulting Services', href: '/consulting-services' },
    { label: 'Managed IT Services', href: '/managed-it-services' },
    { label: 'Company', href: '/company' },
    { label: 'Contact Us', href: '/contact' },
    // { label: 'Support', href: '/support' },
    // { label: "Partners", href: "/partners" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityContent}>
          <a
            href='https://tripleesupport.screenconnect.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.utilityButton}
          >
            Remote Help
          </a>
          <a href='mailto:help@tripleetech.ca' className={styles.utilityButton}>
            Trouble Ticket
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.navContent}>
          {/* Brand/Logo */}
          <Link href='/' className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image
                src='/icons/logo-sm.svg'
                alt='Triple E Technology Solutions logo. Small blue cube with letter E on all sides.'
                width={120}
                height={40}
              />
              <div className={styles.brandText}>
                <span className={styles.brandName}>
                  Triple E Technology Solutions
                </span>
                <span className={styles.brandTagline}>
                  Your Business IT Solution
                </span>
              </div>
            </div>
            <div className={styles.mobileLogoWrapper}>
              <Image
                src='/icons/logo-sm.svg'
                alt='Triple E Technology Solutions logo. Small blue cube with letter E on all sides.'
                width={120}
                height={40}
              />
              <span className={styles.mobileBrandName}>Triple E Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label='Toggle mobile menu'
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

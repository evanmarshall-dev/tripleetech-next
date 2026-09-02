'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.scss';
import { BUSINESS } from '@/lib/business';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLLIElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileOpenDropdown(null);
  };

  // Click handler - toggles dropdown (for touch devices and explicit clicks)
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Hover handlers with small delay to prevent accidental triggers
  const handleMouseEnter = useCallback((label: string) => {
    // Clear any pending close timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // Open dropdown immediately on hover
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Close dropdown after a small delay (allows moving to dropdown menu)
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const handleMobileDropdownToggle = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  // Keyboard handler for accessibility
  const handleKeyDown = (event: React.KeyboardEvent, label: string) => {
    if (event.key === 'Escape') {
      setOpenDropdown(null);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDropdownToggle(label);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    // Close dropdown on Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      // Clean up timeout on unmount
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const navItems: NavItem[] = [
    { label: 'Cybersecurity', href: '/cybersecurity' },
    { label: 'Managed Services', href: '/managed-service-provider' },
    { label: 'Consulting', href: '/consulting-services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <rect width='20' height='14' x='2' y='3' rx='2' />
              <line x1='8' x2='16' y1='21' y2='21' />
              <line x1='12' x2='12' y1='17' y2='21' />
            </svg>
            Remote Help
          </a>
          <a href={`mailto:${BUSINESS.email}`} className={styles.utilityButton}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
              <path d='M14 2v4a2 2 0 0 0 2 2h4' />
              <path d='M10 12h4' />
              <path d='M10 16h4' />
            </svg>
            Submit Ticket
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.navContent}>
          {/* Brand/Logo */}
          <Link href='/' className={styles.brand}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoContainer}>
                <Image
                  src='/icons/logo-sm.svg'
                  alt='Triple E Technology Solutions logo. Small blue cube with letter E on all sides.'
                  fill
                  sizes='48px'
                />
              </div>
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
              <div className={styles.logoContainer}>
                <Image
                  src='/icons/logo-sm.svg'
                  alt='Triple E Technology Solutions logo. Small blue cube with letter E on all sides.'
                  fill
                  sizes='48px'
                />
              </div>
              <span className={styles.mobileBrandName}>Triple E Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className={styles.navLinks}>
            {navItems.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className={styles.dropdownContainer}
                  ref={dropdownRef}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(item.label)}
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup='true'
                  >
                    {item.label}
                    <span
                      className={`${styles.dropdownArrow} ${openDropdown === item.label ? styles.open : ''}`}
                      aria-hidden='true'
                    >
                      ▾
                    </span>
                  </button>
                  {openDropdown === item.label && (
                    <ul className={styles.dropdownMenu}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={styles.dropdownLink}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
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
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className={styles.mobileDropdownContainer}>
                  <button
                    className={styles.mobileDropdownButton}
                    onClick={() => handleMobileDropdownToggle(item.label)}
                    aria-expanded={mobileOpenDropdown === item.label}
                  >
                    {item.label}
                    <span
                      className={`${styles.dropdownArrow} ${mobileOpenDropdown === item.label ? styles.open : ''}`}
                      aria-hidden='true'
                    >
                      ▾
                    </span>
                  </button>
                  {mobileOpenDropdown === item.label && (
                    <ul className={styles.mobileDropdownMenu}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={styles.mobileDropdownLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

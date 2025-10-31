"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Support", href: "/support" },
    { label: "Partners", href: "/partners" },
    { label: "Company", href: "/company" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityContent}>
          <button className={styles.utilityButton}>Remote Help</button>
          <button className={styles.utilityButton}>Trouble Ticket</button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.navContent}>
          {/* Brand/Logo */}
          <Link href='/' className={styles.brand}>
            Triple E Technology
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
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? "✕" : "☰"}
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
                  onClick={() => setIsMobileMenuOpen(false)}>
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

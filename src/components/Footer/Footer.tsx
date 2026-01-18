import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

// Navigation structure for the footer
const footerNavigation = {
  services: {
    title: 'Products & Services',
    links: [
      {
        label: 'Cybersecurity Solutions',
        href: '/cybersecurity',
      },
      {
        label: 'Managed Detection & Response',
        href: '/managed-detection-response',
      },
      {
        label: 'Consulting Services',
        href: '/consulting-services',
      },
      {
        label: 'Managed Service Provider',
        href: '/managed-service-provider',
      },
    ],
  },
  support: {
    title: 'Support',
    links: [
      {
        label: 'Remote Help',
        href: 'https://tripleesupport.screenconnect.com/',
      },
      { label: 'Trouble Ticket', href: 'mailto:help@tripleetech.ca' },
      { label: 'Knowledge Base', href: '/support/knowledge-base' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Newsroom', href: '/newsroom' },
    ],
  },
};

// Social media links
const socialLinks = [
  //   {
  //     label: "LinkedIn",
  //     href: "https://www.linkedin.com/company/triple-e-technology-solutions",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="20"
  //         height="20"
  //         viewBox="0 0 24 24"
  //         fill="currentColor"
  //         aria-hidden="true"
  //       >
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //       </svg>
  //     ),
  //   },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tripleetechnologysolutions/',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/results?search_query=triple+e+technology+solutions',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Navigation Columns */}
          <div className={styles.navColumns}>
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key} className={styles.navColumn}>
                <h3 className={styles.columnTitle}>{section.title}</h3>
                <ul className={styles.navList}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.navLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact & Social Column */}
            <div className={styles.navColumn}>
              <h3 className={styles.columnTitle}>Connect With Us</h3>
              <address className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <strong>Address:</strong>
                  <br />
                  <a
                    href='https://maps.app.goo.gl/LFzgK3LUeMkzHtUj8'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    535 Main Street
                    <br />
                    Kentville, NS B4N 1L4
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <strong>Email:</strong>{' '}
                  <a href='mailto:help@tripleetech.ca'>help@tripleetech.ca</a>
                </p>
                <p className={styles.contactItem}>
                  <strong>Phone:</strong>{' '}
                  <a href='tel:+1-902-365-7333'>(902) 365-7333</a>
                </p>
              </address>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.socialLink}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            {/* Logo */}
            <div className={styles.bottomLogo}>
              <Link href='/' aria-label='Triple E Technology Solutions home'>
                <div className={styles.logoContainer}>
                  <Image
                    src='/icons/logo-sm.svg'
                    alt='Triple E Technology Solutions'
                    fill
                  />
                </div>
              </Link>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
              <p>
                Copyright © {currentYear} Triple E Technology Solutions, Inc.
                All Rights Reserved.
              </p>
              <p className={styles.craftedBy}>
                Carefully crafted by{' '}
                <a
                  href='https://www.evanmarshall.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  www.evanmarshall.dev
                </a>
              </p>
            </div>

            {/* Legal Links */}
            <nav className={styles.legalNav} aria-label='Legal navigation'>
              <ul className={styles.legalLinks}>
                <li>
                  <Link href='/terms-of-service'>Terms of Service</Link>
                </li>
                <li className={styles.divider} aria-hidden='true'>
                  |
                </li>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

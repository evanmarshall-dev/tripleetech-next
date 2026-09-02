'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/CybersecurityHero/CybersecurityHero.module.scss';

const CybersecurityHero = () => {
  return (
    <section className={styles.hero} aria-label='Hero section'>
      <div className={styles.heroContent}>
        {/* Background Image with Next.js Optimization */}
        <div className={styles.imageWrapper}>
          <Image
            src='/images/homepage-cybersecurity.jpg'
            alt='Triple E Tech: Monochromatic map of the world.'
            fill
            quality={90}
            sizes='100vw'
            className={styles.heroImage}
            role='presentation'
          />
          {/* Dark overlay for better text contrast */}
          <div className={styles.overlay} aria-hidden='true' />
        </div>

        {/* Content Overlay */}
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            {/* Eyebrow text */}
            <p className={styles.badge} aria-label='Category'>
              CYBERSECURITY SOLUTIONS
            </p>

            {/* Main Heading */}
            <h2 className={styles.heading}>
              With Triple E, cybersecurity isn&apos;t just a service, it&apos;s
              a partnership.
            </h2>

            {/* Stats Grid */}
            {/* <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Monitoring</span>
              </div>
              <div className={styles.statItem}>
                <Counter
                  value={15}
                  suffix=' min'
                  step={2}
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>Response Time</span>
              </div>
              <div className={styles.statItem}>
                <Counter
                  value={99.9}
                  suffix='%'
                  step={10}
                  decimals={1}
                  className={styles.statNumber}
                />
                <span className={styles.statLabel}>Threats Blocked</span>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className={styles.ctaGroup}>
              <Link
                href='/cybersecurity#offerings-heading'
                className={styles.primaryCta}
              >
                Explore Cybersecurity
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHero;

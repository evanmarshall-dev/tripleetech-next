import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/CybersecurityHero/CybersecurityHero.module.scss';

const CybersecurityHero = () => {
  return (
    <section
      className={styles.hero}
      aria-labelledby='cybersecurity-hero-heading'
    >
      <div className={styles.heroContent}>
        {/* Background Image with Next.js Optimization */}
        <div className={styles.imageWrapper}>
          <Image
            src='/images/homepage-cybersecurity.jpg'
            alt=''
            fill
            // Below the fold, lazy-loaded, and sitting under a dark overlay:
            // quality 90 cost 91KB against 58KB at 75 for no visible gain.
            quality={75}
            sizes='100vw'
            className={styles.heroImage}
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
            <h2 id='cybersecurity-hero-heading' className={styles.heading}>
              With Triple E, cybersecurity isn&apos;t just a service, it&apos;s
              a partnership.
            </h2>

            {/* Stats Grid */}

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

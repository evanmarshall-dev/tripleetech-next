import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label='Hero section'>
      <div className={styles.heroContent}>
        {/* Background Image with Next.js Optimization */}
        <div className={styles.imageWrapper}>
          <Image
            src='/images/hero-xl.jpg'
            alt=''
            fill
            priority
            // `priority` emits the <link rel=preload> but not fetchpriority on
            // the <img> itself in Next 16, and Lighthouse's LCP request
            // discovery audit checks for the attribute. This is the LCP element.
            fetchPriority='high'
            // The LCP element, so its download is the dominant LCP phase
            // (817ms of a 1124ms LCP when traced against production). 90 cost
            // 28KB against 18KB at 75, on a photo sitting under a dark overlay.
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
              TECHNOLOGY SOLUTIONS
            </p>

            {/* Main Heading */}
            <h1 className={styles.heading}>
              Empowering Businesses To Reach Their Potential Through Technology
              Solutions
            </h1>

            {/* Subheading */}
            <p className={styles.subheading}>
              Building lasting partnerships through innovative technology,
              reliable support, and solutions that help your business thrive.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaGroup}>
              <Link href='/contact' className={styles.primaryCta}>
                Get Started
              </Link>
              <Link
                href='/managed-service-provider'
                className={styles.secondaryCta}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

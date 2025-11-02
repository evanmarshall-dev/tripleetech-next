"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} aria-label='Hero section'>
      <div className={styles.heroContent}>
        {/* Background Image with Next.js Optimization */}
        <div className={styles.imageWrapper}>
          <Image
            src='/images/hero-xl.png'
            alt=''
            fill
            priority
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
            <p className={styles.eyebrow} aria-label='Category'>
              TECHNOLOGY SOLUTIONS
            </p>

            {/* Main Heading */}
            <h1 className={styles.heading}>
              Powering Innovation Through Expert Technology Solutions
            </h1>

            {/* Subheading */}
            <p className={styles.subheading}>
              Delivering enterprise-grade IT solutions that transform businesses
              through innovation, security, and seamless integration
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaGroup}>
              <Link href='/contact' className={styles.primaryCta}>
                Get Started
              </Link>
              <Link href='/services' className={styles.secondaryCta}>
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

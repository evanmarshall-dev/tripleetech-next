"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import styles from "@/components/MDR/MDR.module.scss";

const Counter = ({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  step,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  step?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        let displayValue = latest;
        if (step) {
          displayValue = Math.round(latest / step) * step;
        }
        ref.current.textContent =
          prefix + displayValue.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix, prefix, step]);

  return <span ref={ref} className={className} />;
};

const MDR = () => {
  return (
    <section className={styles.mdr} aria-label='Hero section'>
      <div className={styles.mdrContent}>
        {/* Background Image with Next.js Optimization */}
        <div className={styles.imageWrapper}>
          <Image
            src='/images/world.png'
            alt='Triple E Tech: Monochromatic map of the world.'
            fill
            priority
            quality={90}
            sizes='100vw'
            className={styles.mdrImage}
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
              MANAGED DETECTION &amp; RESPONSE
            </p>

            {/* Main Heading */}
            <h1 className={styles.heading}>
              With Triple E, cybersecurity isn&apos;t just a service, it&apos;s
              a partnership.
            </h1>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
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
            </div>

            {/* CTA Buttons */}
            {/* TODO: Make sure the corresponding pages/routes match the link once created. */}
            <div className={styles.ctaGroup}>
              <Link href='/mdr' className={styles.primaryCta}>
                Explore MDR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MDR;

import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './cybersecurity.module.scss';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Cybersecurity Solutions',
  description:
    'Enterprise-level cybersecurity without the complexity. Threat detection, 24/7 monitoring, and rapid response for businesses in the Annapolis Valley.',
  path: '/cybersecurity',
});

const CybersecurityPage = () => {
  const securityServices = [
    {
      title: 'Threat Monitoring',
      icon: '/icons/monitoring-icon.svg',
      description:
        'Continuous 24/7 monitoring of your systems to detect and respond to threats in real-time, keeping your business protected around the clock.',
    },
    {
      title: 'Expert Analysis',
      icon: '/icons/analysis-icon.svg',
      description:
        'Human expertise combined with AI-powered tools to analyze threats, reduce false positives, and provide actionable insights.',
    },
    {
      title: 'Data Protection',
      icon: '/icons/data-protection-icon.svg',
      description:
        'Advanced encryption and backup solutions that safeguard your critical business data and ensure rapid recovery with minimal downtime.',
    },
    {
      title: 'Incident Response',
      icon: '/icons/response-icon.svg',
      description:
        'Expert-led rapid response to security incidents, minimizing damage and getting your business back on track quickly and safely.',
    },
  ];

  const protectionFeatures = [
    {
      title: 'Proactive Defense',
      description:
        'We stay ahead of emerging threats with continuous threat intelligence and proactive security measures that prevent attacks before they happen.',
    },
    {
      title: 'Compliance Support',
      description:
        'Navigate industry regulations with confidence. We help ensure your security practices meet all necessary compliance requirements.',
    },
    {
      title: 'Security Culture',
      description:
        'Build a security-first mindset across your organization with ongoing training, awareness programs, and best practice guidance.',
    },
    {
      title: 'Business Continuity',
      description:
        'Comprehensive backup and disaster recovery plans that keep your business running smoothly, even in the face of cyber incidents.',
    },
  ];

  const cybersecurityOfferings = [
    'Intelligent Malicious Behaviour Detection and Remediation',
    'Dark Web Monitoring',
    'Intelligent spam filtering',
    'Phishing Simulation and Awareness training',
    'Multifactor authentication',
    '24/7 Monitored Security Information and Event Management (SIEM)',
    '24/7 Monitoring by our Security Operations Centre (SOC)',
  ];

  return (
    <>
      <NavBar />
      <main className={styles.cybersecurityPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>CYBERSECURITY SOLUTIONS</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Build Your Security Foundation with Confidence
              </h1>
              <p className={styles.heroSubtitle}>
                Enterprise-level protection designed for businesses like yours
              </p>
              <Link href='/contact' className={styles.heroCta}>
                Start the Conversation
              </Link>
            </div>
            <div className={styles.heroGraphic} aria-hidden='true'>
              <div className={styles.graphicContainer}>
                <div className={styles.shieldGrid}>
                  <div
                    className={styles.securityLayer}
                    style={{ '--delay': '0s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.securityLayer}
                    style={{ '--delay': '0.2s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.securityLayer}
                    style={{ '--delay': '0.4s' } as React.CSSProperties}
                  />
                </div>
                <div className={styles.lockIcon}>
                  <svg
                    viewBox='0 0 100 100'
                    className={styles.lockSvg}
                    aria-hidden='true'
                  >
                    <defs>
                      <linearGradient
                        id='lockGradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='var(--color-accent)'
                          stopOpacity='0.8'
                        />
                        <stop
                          offset='100%'
                          stopColor='var(--color-secondary)'
                          stopOpacity='0.6'
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d='M50 10 L50 30 M30 30 L70 30 L70 80 L30 80 Z M45 55 L45 65 M55 55 L55 65 M40 50 L60 50 L60 70 L40 70 Z'
                      stroke='url(#lockGradient)'
                      strokeWidth='3'
                      fill='none'
                      className={styles.lockPath}
                    />
                  </svg>
                </div>
                <div className={styles.protectionRing} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} aria-labelledby='about-heading'>
          <div className={styles.container}>
            <h2 id='about-heading' className={styles.sectionTitle}>
              Cybersecurity Made Simple
            </h2>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                Cybersecurity doesn&apos;t have to be overwhelming. At the heart
                of every strong defense is a secure foundation—one that protects
                your data, prepares your team, and puts the right tools in place
                to respond quickly if something goes wrong.
              </p>
              <p className={styles.aboutText}>
                With the right plan, you can help prevent threats, detect issues
                early, and recover data smoothly with minimal downtime.
                We&apos;re here to guide you through it, step by step, with
                solutions that match your business&apos;s unique needs.
              </p>
              <p className={styles.aboutText}>
                Let&apos;s build your cybersecurity strategy together—reach out
                to start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Security Services Grid */}
        <section className={styles.values} aria-labelledby='services-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>COMPREHENSIVE PROTECTION</p>
            <h2 id='services-heading' className={styles.sectionTitle}>
              Security Solutions That Work For You
            </h2>
            <p className={styles.sectionSubtitle}>
              From threat monitoring to employee training, we cover all aspects
              of your cybersecurity needs
            </p>
            <div className={styles.valuesGrid}>
              {securityServices.map((service) => (
                <article key={service.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Image
                      src={service.icon}
                      alt=''
                      width={64}
                      height={64}
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className={styles.valueTitle}>{service.title}</h3>
                  <p className={styles.valueDescription}>
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Approach Section */}
        <section className={styles.whyUs} aria-labelledby='partnership-heading'>
          <div className={styles.container}>
            <div className={styles.whyUsContent}>
              <div className={styles.whyUsText}>
                <p className={styles.badge}>OUR APPROACH</p>
                <h2 id='partnership-heading' className={styles.sectionTitle}>
                  Protection Starts with Partnership
                </h2>
                <p className={styles.whyUsIntro}>
                  When it comes to cybersecurity, we believe protection starts
                  with partnership. Our approach goes beyond firewalls and
                  antivirus software—we take the time to understand your
                  business, your people, and your unique challenges.
                </p>
                <p className={styles.whyUsDescription}>
                  From proactive threat monitoring to employee awareness
                  training, we help you create a security culture that keeps
                  your data, systems, and customers safe.
                </p>
                <p className={styles.whyUsDescription}>
                  Whether you&apos;re looking to strengthen your defenses,
                  recover from a breach, or develop a long-term security
                  strategy, our team stands beside you every step of the way.
                  With Triple E, you gain more than just technical expertise—you
                  gain a trusted ally committed to your success and peace of
                  mind.
                </p>
              </div>
              <div className={styles.whyUsImage}>
                <Image
                  src='/images/cybersecurity-approach.jpg'
                  alt='Cybersecurity team working together to protect business systems'
                  width={600}
                  height={500}
                  className={styles.collaborationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Protection Features */}
        <section className={styles.features} aria-labelledby='features-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>COMPLETE PROTECTION</p>
            <h2 id='features-heading' className={styles.sectionTitle}>
              Building a Security Culture
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive cybersecurity that protects every aspect of your
              business
            </p>
            <ul className={styles.featuresList}>
              {protectionFeatures.map((feature) => (
                <li key={feature.title} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cybersecurity Offerings Section */}
        <section
          className={styles.offerings}
          aria-labelledby='offerings-heading'
        >
          <div className={styles.container}>
            <div className={styles.offeringsContent}>
              <p className={styles.offeringsBadge}>CYBERSECURITY OFFERINGS</p>
              <h2 id='offerings-heading' className={styles.offeringsTitle}>
                Enterprise-Level Protection, Without the Complexity
              </h2>
              <ul className={styles.offeringsList}>
                {cybersecurityOfferings.map((offering) => (
                  <li key={offering} className={styles.offeringsItem}>
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Ready to Strengthen Your Security?
            </h2>
            <p className={styles.ctaText}>
              With Triple E, you&apos;re not just outsourcing IT—you&apos;re
              gaining a trusted partner who understands your goals, your
              challenges, and your vision for the future.
            </p>
            <div className={styles.ctaButtons}>
              <Link href='/contact' className={styles.ctaPrimary}>
                I am Ready
              </Link>
              <Link
                href='/managed-service-provider'
                className={styles.ctaSecondary}
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CybersecurityPage;

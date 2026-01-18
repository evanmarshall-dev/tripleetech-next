import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './managed-detection-response.module.scss';

export const metadata = {
  title: 'Managed Detection & Response (MDR) | Triple E Technology Solutions',
  description:
    'Proactive cybersecurity with 24/7 threat monitoring, real-time detection, and rapid response. MDR services that combine advanced technology with human expertise for businesses in the Annapolis Valley.',
};

const ManagedDetectionResponsePage = () => {
  const mdrCapabilities = [
    {
      title: '24/7 Monitoring',
      icon: '/icons/monitoring-icon.svg',
      description:
        'Continuous surveillance of your systems around the clock, ensuring threats are identified the moment they emerge—day or night.',
    },
    {
      title: 'Real-Time Detection',
      icon: '/icons/detection-icon.svg',
      description:
        'Advanced threat detection technology that identifies suspicious activity in real time, catching threats before they can cause damage.',
    },
    {
      title: 'Rapid Response',
      icon: '/icons/response-icon.svg',
      description:
        'Swift action when threats are detected. Our team responds immediately to contain and neutralize security incidents.',
    },
    {
      title: 'Expert Analysis',
      icon: '/icons/analysis-icon.svg',
      description:
        'Human expertise combined with AI-powered tools to analyze threats, reduce false positives, and provide actionable insights.',
    },
  ];

  const mdrBenefits = [
    {
      title: 'Proactive Protection',
      description:
        'Stay ahead of evolving cyber threats with continuous monitoring that prevents attacks before they impact your business operations.',
    },
    {
      title: 'Reduced Downtime',
      description:
        'Minimize business disruption with rapid threat containment and recovery that keeps your operations running smoothly.',
    },
    {
      title: 'Peace of Mind',
      description:
        'Rest easy knowing your systems are protected by experts who care as much about your business security as you do.',
    },
    {
      title: 'Aligned Security',
      description:
        'Security strategies that align with your business goals and operations, not one-size-fits-all solutions.',
    },
  ];

  return (
    <>
      <NavBar />
      <main className={styles.mdrPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>MANAGED DETECTION & RESPONSE</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Strengthening Security with MDR
              </h1>
              <p className={styles.heroSubtitle}>
                24/7 threat monitoring, detection, and response—backed by
                experts who care
              </p>
              <Link href='/contact' className={styles.heroCta}>
                Protect Your Business
              </Link>
            </div>
            <div className={styles.heroGraphic} aria-hidden='true'>
              <div className={styles.graphicContainer}>
                <div className={styles.radarGrid}>
                  <div
                    className={styles.radarSweep}
                    style={{ '--delay': '0s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.radarRing}
                    style={{ '--delay': '0.5s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.radarRing}
                    style={{ '--delay': '1s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.radarRing}
                    style={{ '--delay': '1.5s' } as React.CSSProperties}
                  />
                </div>
                <div className={styles.shieldCore}>
                  <svg
                    viewBox='0 0 100 100'
                    className={styles.shieldSvg}
                    aria-hidden='true'
                  >
                    <defs>
                      <linearGradient
                        id='mdrGradient'
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
                      d='M50 10 L85 25 L85 55 Q85 80 50 95 Q15 80 15 55 L15 25 Z'
                      stroke='url(#mdrGradient)'
                      strokeWidth='2'
                      fill='none'
                      className={styles.shieldPath}
                    />
                    <path
                      d='M40 50 L47 57 L62 42'
                      stroke='url(#mdrGradient)'
                      strokeWidth='4'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className={styles.checkPath}
                    />
                  </svg>
                </div>
                <div className={styles.detectionPulse} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} aria-labelledby='about-heading'>
          <div className={styles.container}>
            <h2 id='about-heading' className={styles.sectionTitle}>
              Cybersecurity Built Into Everything
            </h2>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                In today&apos;s digital landscape, cybersecurity can&apos;t be
                an afterthought—it has to be built into everything you do.
                That&apos;s why, at Triple E Technology Solutions, our Managed
                Service Provider (MSP) offering includes Managed Detection and
                Response (MDR)—a proactive approach to keeping your business
                safe from evolving cyber threats.
              </p>
              <p className={styles.aboutText}>
                MDR combines advanced technology with human expertise to
                continuously monitor your systems, detect suspicious activity,
                and respond quickly to potential threats. It&apos;s like having
                a 24/7 security team watching over your business, ready to take
                action the moment something doesn&apos;t look right.
              </p>
              <p className={styles.aboutText}>
                But what really sets Triple E apart is our people-first
                approach. We don&apos;t just install tools and walk away—we work
                closely with your team to ensure your security strategy aligns
                with how you do business. From early threat detection to rapid
                response and recovery, our focus is on minimizing risk while
                building your confidence in the technology that drives your
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section
          className={styles.values}
          aria-labelledby='capabilities-heading'
        >
          <div className={styles.container}>
            <p className={styles.badge}>MDR CAPABILITIES</p>
            <h2 id='capabilities-heading' className={styles.sectionTitle}>
              How We Protect Your Business
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive threat detection and response powered by technology
              and expertise
            </p>
            <div className={styles.valuesGrid}>
              {mdrCapabilities.map((capability) => (
                <article key={capability.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Image
                      src={capability.icon}
                      alt=''
                      width={64}
                      height={64}
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className={styles.valueTitle}>{capability.title}</h3>
                  <p className={styles.valueDescription}>
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className={styles.whyUs} aria-labelledby='partnership-heading'>
          <div className={styles.container}>
            <div className={styles.whyUsContent}>
              <div className={styles.whyUsText}>
                <p className={styles.badge}>A TRUE PARTNERSHIP</p>
                <h2 id='partnership-heading' className={styles.sectionTitle}>
                  More Than Cybersecurity
                </h2>
                <p className={styles.whyUsIntro}>
                  Cyber threats evolve every day—your protection should too.
                  That&apos;s why Triple E Technology Solutions includes Managed
                  Detection and Response (MDR) as part of our managed services.
                </p>
                <p className={styles.whyUsDescription}>
                  We continuously monitor your systems, detect potential threats
                  in real time, and take swift action to keep your business
                  secure and running smoothly.
                </p>
                <p className={styles.whyUsDescription}>
                  With Triple E, cybersecurity isn&apos;t just a
                  service—it&apos;s a partnership. Our team combines
                  cutting-edge tools with personal, proactive support to ensure
                  your defenses align with your goals and operations. You gain
                  peace of mind knowing your technology is protected by experts
                  who care as much about your business as you do.
                </p>
              </div>
              <div className={styles.whyUsImage}>
                <Image
                  src='/images/mdr-partnership.jpg'
                  alt='MDR security team monitoring and responding to threats'
                  width={600}
                  height={500}
                  className={styles.collaborationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Features Section */}
        <section className={styles.features} aria-labelledby='benefits-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>WHY MDR MATTERS</p>
            <h2 id='benefits-heading' className={styles.sectionTitle}>
              Your Business, Protected
            </h2>
            <p className={styles.sectionSubtitle}>
              The advantages of having dedicated threat detection and response
            </p>
            <ul className={styles.featuresList}>
              {mdrBenefits.map((benefit) => (
                <li key={benefit.title} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{benefit.title}</h3>
                  <p className={styles.featureDescription}>
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats} aria-label='MDR statistics'>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Threat Monitoring</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>&lt;15</span>
                <span className={styles.statLabel}>Min Response Time</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Threat Coverage</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>Tolerance for Risk</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Ready to Strengthen Your Defenses?
            </h2>
            <p className={styles.ctaText}>
              With Triple E Technology Solutions, you gain more than
              cybersecurity—you gain a true partner committed to keeping your
              business protected, prepared, and empowered.
            </p>
            <div className={styles.ctaButtons}>
              <Link href='/contact' className={styles.ctaPrimary}>
                Get MDR Protection
              </Link>
              <Link href='/cybersecurity' className={styles.ctaSecondary}>
                View All Cybersecurity
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ManagedDetectionResponsePage;

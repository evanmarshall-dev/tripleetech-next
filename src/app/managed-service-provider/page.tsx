import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './managed-service-provider.module.scss';
import { buildMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/lib/breadcrumbs';
import { ServiceJsonLd } from '@/lib/service';

export const metadata = buildMetadata({
  title: 'Managed Service Provider',
  description:
    'Your trusted Managed Service Provider in the Annapolis Valley. Proactive IT management, 24/7 monitoring, and support for growing businesses.',
  path: '/managed-service-provider',
});

const ManagedServiceProviderPage = () => {
  const benefits = [
    {
      title: '24/7 Monitoring',
      icon: '/icons/monitoring-icon.svg',
      description:
        'Peace of mind knowing your systems are monitored around the clock, with issues identified and resolved before they impact your business.',
    },
    {
      title: 'Predictable Costs',
      icon: '/icons/costs-icon.svg',
      description:
        'Predictable IT costs through a tailored monthly service plan that fits your budget and eliminates surprise expenses.',
    },
    {
      title: 'Proactive Support',
      icon: '/icons/support-icon.svg',
      description:
        'Proactive support that prevents issues before they disrupt your operations, keeping your business running smoothly.',
    },
    {
      title: 'Dedicated Partnership',
      icon: '/icons/partnership-icon.svg',
      description:
        'A team that cares about your success as much as you do, providing relationship-driven service you can count on.',
    },
  ];

  const serviceFeatures: { title: string; description?: string }[] = [
    {
      title: 'System Management',
      description:
        'Complete management of your IT infrastructure including servers, networks, and workstations—all handled by our expert team.',
    },
    {
      title: 'Security & Compliance',
      description:
        'Comprehensive security monitoring and compliance support to protect your business data and meet industry requirements.',
    },
    {
      title: 'Help Desk Support',
      description:
        'Responsive, knowledgeable support when you need it. Our team is always ready to help your employees stay productive.',
    },
    {
      title: 'Strategic Planning',
      description:
        'Long-term technology planning that aligns with your business goals and prepares you for future growth.',
    },
    { title: 'Business Continuity and Disaster Planning' },
    { title: 'Network Infrastructure Support' },
    { title: 'Workstation Software and Hardware Support' },
    { title: 'Server Software and Hardware Support' },
    { title: 'Printer Support' },
    { title: 'Cloud Solutions' },
    { title: 'Office 365' },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Managed Service Provider',
            path: '/managed-service-provider',
          },
        ]}
      />
      <ServiceJsonLd
        name='Managed IT Services'
        description='Your trusted Managed Service Provider in the Annapolis Valley. Proactive IT management, 24/7 monitoring, and support for growing businesses.'
        path='/managed-service-provider'
        serviceType='Managed IT Services'
      />
      <NavBar />
      <main id='main-content' className={styles.mspPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>MANAGED SERVICE PROVIDER</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Technology That Works For Your Business
              </h1>
              <p className={styles.heroSubtitle}>
                Your dedicated IT team, always in your corner
              </p>
              <Link href='/contact' className={styles.heroCta}>
                Get Started
              </Link>
            </div>
            <div className={styles.heroGraphic} aria-hidden='true'>
              <div className={styles.graphicContainer}>
                <div className={styles.networkGrid}>
                  <div
                    className={styles.networkNode}
                    style={{ '--delay': '0s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.networkNode}
                    style={{ '--delay': '0.2s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.networkNode}
                    style={{ '--delay': '0.4s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.networkNode}
                    style={{ '--delay': '0.6s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.networkNode}
                    style={{ '--delay': '0.8s' } as React.CSSProperties}
                  />
                </div>
                <div className={styles.centralHub}>
                  <svg
                    viewBox='0 0 100 100'
                    className={styles.hubSvg}
                    aria-hidden='true'
                  >
                    <defs>
                      <linearGradient
                        id='hubGradient'
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
                    <circle
                      cx='50'
                      cy='50'
                      r='35'
                      stroke='url(#hubGradient)'
                      strokeWidth='2'
                      fill='none'
                      className={styles.hubCircle}
                    />
                    <path
                      d='M35 50 L45 50 L50 40 L55 60 L60 50 L65 50'
                      stroke='url(#hubGradient)'
                      strokeWidth='3'
                      fill='none'
                      className={styles.hubPulse}
                    />
                  </svg>
                </div>
                <div className={styles.connectionRing} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} aria-labelledby='about-heading'>
          <div className={styles.container}>
            <h2 id='about-heading' className={styles.sectionTitle}>
              Your IT Partner, Not Just a Provider
            </h2>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                At Triple E Technology Solutions, we believe great technology
                shouldn&apos;t just run your business—it should empower it. As
                your Managed Service Provider (MSP), we take the stress out of
                managing day-to-day IT operations so you can focus on what
                matters most: your people, your clients, and your growth.
              </p>
              <p className={styles.aboutText}>
                Our managed services are designed to feel like an extension of
                your team. We proactively monitor your systems, minimize
                downtime, and keep your technology running smoothly—all while
                providing the responsive, relationship-driven support you can
                count on.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.values} aria-labelledby='benefits-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>WHY PARTNER WITH US</p>
            <h2 id='benefits-heading' className={styles.sectionTitle}>
              What You Gain with Triple E
            </h2>
            <p className={styles.sectionSubtitle}>
              By partnering with a Managed Service Provider like Triple E, you
              gain more than just IT support
            </p>
            <div className={styles.valuesGrid}>
              {benefits.map((benefit) => (
                <article key={benefit.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Image
                      src={benefit.icon}
                      alt=''
                      width={64}
                      height={64}
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className={styles.valueTitle}>{benefit.title}</h3>
                  <p className={styles.valueDescription}>
                    {benefit.description}
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
                <p className={styles.badge}>YOUR DEDICATED IT TEAM</p>
                <h2 id='partnership-heading' className={styles.sectionTitle}>
                  Always In Your Corner
                </h2>
                <p className={styles.whyUsIntro}>
                  Technology should work for your business, not against it. As
                  your Managed Service Provider (MSP), Triple E Technology
                  Solutions takes care of your IT systems so you can focus on
                  what matters most.
                </p>
                <p className={styles.whyUsDescription}>
                  We proactively manage, monitor, and maintain your
                  technology—keeping everything secure, efficient, and ready to
                  grow with you.
                </p>
                <p className={styles.whyUsDescription}>
                  Think of us as your dedicated IT team, always in your corner.
                  From daily support to long-term strategy, we deliver reliable,
                  relationship-driven service that helps your business thrive
                  with confidence and clarity.
                </p>
              </div>
              <div className={styles.whyUsImage}>
                <Image
                  src='/images/managed-services-team.jpg'
                  alt='Triple E team providing managed IT services support'
                  width={600}
                  height={500}
                  sizes='(min-width: 1280px) 576px, (min-width: 1024px) 45vw, 100vw'
                  className={styles.collaborationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Features Section */}
        <section className={styles.features} aria-labelledby='features-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>OUR SERVICES</p>
            <h2 id='features-heading' className={styles.sectionTitle}>
              Comprehensive IT Management
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to keep your technology running smoothly
            </p>
            <ul className={styles.featuresList}>
              {serviceFeatures.map((feature) => (
                <li key={feature.title} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  {feature.description && (
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Ready to Simplify Your IT?
            </h2>
            <p className={styles.ctaText}>
              With Triple E, you&apos;re not just outsourcing IT—you&apos;re
              gaining a trusted partner who understands your goals, your
              challenges, and your vision for the future.
            </p>
            <div className={styles.ctaButtons}>
              <Link href='/contact' className={styles.ctaPrimary}>
                Schedule a Consultation
              </Link>
              <Link href='/cybersecurity' className={styles.ctaSecondary}>
                View Cybersecurity
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ManagedServiceProviderPage;

import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './consulting-services.module.scss';
import { buildMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/lib/breadcrumbs';
import { ServiceJsonLd } from '@/lib/service';

export const metadata = buildMetadata({
  title: 'IT Consulting Services',
  description:
    'Strategic IT consulting that aligns technology with your business goals. Expert guidance and practical solutions for businesses in the Annapolis Valley.',
  path: '/consulting-services',
});

const ConsultingServicesPage = () => {
  const consultingServices = [
    {
      title: 'Strategic Planning',
      icon: '/icons/strategy-icon.svg',
      description:
        'Technology roadmaps that align with your business vision, helping you make smart decisions today that prepare you for tomorrow.',
    },
    {
      title: 'Infrastructure Assessment',
      icon: '/icons/infrastructure-icon.svg',
      description:
        'Comprehensive evaluation of your current IT environment to identify opportunities for optimization and improvement.',
    },
    {
      title: 'Digital Transformation',
      icon: '/icons/transformation-icon.svg',
      description:
        'Guidance on modernizing systems and processes to improve efficiency, productivity, and competitive advantage.',
    },
    {
      title: 'Security Roadmapping',
      icon: '/icons/security-roadmap-icon.svg',
      description:
        'Develop a clear cybersecurity strategy that protects your business while supporting growth and compliance requirements.',
    },
  ];

  const consultingBenefits = [
    {
      title: 'Business Alignment',
      description:
        'Technology strategies designed around your unique business goals, challenges, and vision for growth—not cookie-cutter solutions.',
    },
    {
      title: 'Clear Guidance',
      description:
        'Actionable recommendations you can understand and implement, with our team supporting you every step of the way.',
    },
    {
      title: 'Future-Ready Solutions',
      description:
        "Plans that solve today's problems while preparing your business for tomorrow's opportunities and challenges.",
    },
    {
      title: 'Predictable Costs',
      description:
        'Solutions that fit your budget and deliver real value, with transparent communication about costs and timelines.',
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'IT Consulting Services', path: '/consulting-services' },
        ]}
      />
      <ServiceJsonLd
        name='IT Consulting Services'
        description='Strategic IT consulting that aligns technology with your business goals. Expert guidance and practical solutions for businesses in the Annapolis Valley.'
        path='/consulting-services'
        serviceType='IT Consulting'
      />
      <NavBar />
      <main className={styles.consultingPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>CONSULTING SERVICES</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Strategic IT Consulting
              </h1>
              <p className={styles.heroSubtitle}>
                Technology guidance that moves your business forward
              </p>
              <Link href='/contact' className={styles.heroCta}>
                Start the Conversation
              </Link>
            </div>
            <div className={styles.heroGraphic} aria-hidden='true'>
              <div className={styles.graphicContainer}>
                {/* Growth Chart Bars */}
                <div className={styles.chartContainer}>
                  <div
                    className={styles.chartBar}
                    style={
                      {
                        '--height': '40%',
                        '--delay': '0s',
                      } as React.CSSProperties
                    }
                  />
                  <div
                    className={styles.chartBar}
                    style={
                      {
                        '--height': '55%',
                        '--delay': '0.15s',
                      } as React.CSSProperties
                    }
                  />
                  <div
                    className={styles.chartBar}
                    style={
                      {
                        '--height': '45%',
                        '--delay': '0.3s',
                      } as React.CSSProperties
                    }
                  />
                  <div
                    className={styles.chartBar}
                    style={
                      {
                        '--height': '70%',
                        '--delay': '0.45s',
                      } as React.CSSProperties
                    }
                  />
                  <div
                    className={styles.chartBar}
                    style={
                      {
                        '--height': '85%',
                        '--delay': '0.6s',
                      } as React.CSSProperties
                    }
                  />
                </div>
                {/* Upward Trend Line */}
                <svg
                  viewBox='0 0 200 120'
                  className={styles.trendSvg}
                  aria-hidden='true'
                >
                  <defs>
                    <linearGradient
                      id='trendGradient'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        stopColor='var(--color-accent)'
                        stopOpacity='0.6'
                      />
                      <stop
                        offset='100%'
                        stopColor='var(--color-secondary)'
                        stopOpacity='1'
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d='M10 100 Q50 90 70 70 T130 40 T190 15'
                    stroke='url(#trendGradient)'
                    strokeWidth='3'
                    fill='none'
                    className={styles.trendLine}
                  />
                  <circle
                    cx='190'
                    cy='15'
                    r='8'
                    fill='var(--color-secondary)'
                    stroke='white'
                    strokeWidth='3'
                    className={styles.trendDot}
                  />
                </svg>
                {/* Planning Grid Background */}
                <div className={styles.planningGrid} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} aria-labelledby='about-heading'>
          <div className={styles.container}>
            <h2 id='about-heading' className={styles.sectionTitle}>
              Building the Right Tech Foundation
            </h2>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                At Triple E Technology Solutions, we don&apos;t just fix
                problems—we help you build the right tech foundation to grow,
                thrive, and innovate. We partner with businesses to deliver
                efficient, effective IT solutions tailored to your goals.
              </p>
              <p className={styles.aboutText}>
                We believe technology should do more than check your email—it
                should move your business forward. Our IT consulting services
                are designed to help you make smart, strategic decisions that
                align your technology with your vision for growth.
              </p>
              <p className={styles.aboutText}>
                We take the time to understand your business—how you work, where
                your challenges lie, and where you want to go. Then we design
                technology strategies that not only solve today&apos;s problems
                but also prepare you for tomorrow&apos;s opportunities. Whether
                it&apos;s optimizing infrastructure, modernizing systems, or
                developing a cybersecurity roadmap, our team provides clear,
                actionable guidance every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.values} aria-labelledby='services-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>OUR EXPERTISE</p>
            <h2 id='services-heading' className={styles.sectionTitle}>
              How We Help Your Business
            </h2>
            <p className={styles.sectionSubtitle}>
              Strategic guidance across all aspects of your technology
              environment
            </p>
            <div className={styles.valuesGrid}>
              {consultingServices.map((service) => (
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

        {/* Partnership Section */}
        <section className={styles.whyUs} aria-labelledby='partnership-heading'>
          <div className={styles.container}>
            <div className={styles.whyUsContent}>
              <div className={styles.whyUsText}>
                <p className={styles.badge}>GENUINE PARTNERSHIP</p>
                <h2 id='partnership-heading' className={styles.sectionTitle}>
                  More Than Just Advice
                </h2>
                <p className={styles.whyUsIntro}>
                  Technology should empower your business—not complicate it. At
                  Triple E Technology Solutions, our consulting services help
                  you align your technology with your goals through clear
                  strategy, expert guidance, and genuine partnership.
                </p>
                <p className={styles.whyUsDescription}>
                  We take time to understand your business and craft practical,
                  future-ready solutions that drive growth, efficiency, and
                  security. With Triple E, you get more than advice—you gain a
                  trusted partner invested in your success.
                </p>
                <p className={styles.whyUsDescription}>
                  With Triple E, consulting isn&apos;t just about
                  recommendations—it&apos;s about relationships. We collaborate
                  closely with your team to ensure every solution fits your
                  goals, your culture, and your budget. Our mission is simple:
                  to empower your business with technology that supports growth,
                  strengthens security, and creates lasting success.
                </p>
              </div>
              <div className={styles.whyUsImage}>
                <Image
                  src='/images/consulting-partnership.jpg'
                  alt='Triple E team collaborating on IT strategy with clients'
                  width={600}
                  height={500}
                  sizes='(min-width: 1280px) 576px, (min-width: 1024px) 45vw, 100vw'
                  className={styles.collaborationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Features Section */}
        <section className={styles.features} aria-labelledby='benefits-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>WHY CHOOSE US</p>
            <h2 id='benefits-heading' className={styles.sectionTitle}>
              The Triple E Difference
            </h2>
            <p className={styles.sectionSubtitle}>
              What sets our consulting services apart
            </p>
            <ul className={styles.featuresList}>
              {consultingBenefits.map((benefit) => (
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
        <section className={styles.stats} aria-label='Consulting statistics'>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Focused</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>360°</span>
                <span className={styles.statLabel}>IT Assessment</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Trusted Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Ready to Build Your IT Strategy?
            </h2>
            <p className={styles.ctaText}>
              Let&apos;s work together to create a technology roadmap that
              supports your business goals and sets you up for lasting success.
            </p>
            <div className={styles.ctaButtons}>
              <Link href='/contact' className={styles.ctaPrimary}>
                Schedule a Consultation
              </Link>
              <Link
                href='/managed-service-provider'
                className={styles.ctaSecondary}
              >
                View Managed Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConsultingServicesPage;

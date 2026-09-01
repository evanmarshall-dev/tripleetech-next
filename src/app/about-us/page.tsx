import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './company.module.scss';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'Meet Triple E Technology Solutions, your locally owned technology partner in the Annapolis Valley. Guided by efficiency, effectiveness, and excellence.',
  path: '/about-us',
});

const CompanyPage = () => {
  const coreValues = [
    {
      title: 'Efficiency',
      icon: '/icons/efficiency.svg',
      description:
        'We help streamline your technology operations to maximize productivity so you can focus on what matters most—growing your business.',
    },
    {
      title: 'Effectiveness',
      icon: '/icons/effectiveness.svg',
      description:
        'Our solutions are designed to deliver real results. We measure success by your outcomes, ensuring every technology investment moves your business forward.',
    },
    {
      title: 'Excellence',
      icon: '/icons/excellence.svg',
      description:
        'We hold ourselves to the highest standards in everything we do—from customer service to technical expertise—because you deserve nothing less.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Local Expertise, Global Standards',
      description:
        'We provide a fresh perspective that combines community values with enterprise-level technology solutions.',
    },
    {
      title: 'End-to-End Solutions',
      description:
        'From initial consultation to ongoing support, we provide complete business technology solutions that scale with your needs.',
    },
    {
      title: 'Partnership Approach',
      description:
        "We're more than just an IT consulting firm—we're your technology partner, committed to understanding your unique challenges and goals.",
    },
    {
      title: 'Responsive Support',
      description:
        "When you need help, we're there. Our team delivers knowledgeable, responsive service that keeps your business running smoothly.",
    },
  ];

  const quickLinks = [
    {
      title: 'Our Services',
      description: 'Explore our comprehensive IT solutions',
      href: '/managed-service-provider',
      icon: '/icons/services-icon.svg',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business from modern threats',
      href: '/cybersecurity',
      icon: '/icons/security-icon.svg',
    },
    {
      title: 'Our Partners',
      description: 'Industry leaders we work with',
      href: '/#partners',
      icon: '/icons/partners-icon.svg',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      href: '/contact',
      icon: '/icons/contact-icon.svg',
    },
  ];

  return (
    <>
      <NavBar />
      <main className={styles.companyPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>ABOUT US</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Technology That Moves Your Business Forward
              </h1>
              <p className={styles.heroSubtitle}>
                Your trusted technology partner
              </p>
              <Link href='/contact' className={styles.heroCta}>
                Get Started
              </Link>
            </div>
            <div className={styles.heroGraphic} aria-hidden='true'>
              {/* Abstract geometric design */}
              <div className={styles.graphicContainer}>
                <div className={styles.cubeGrid}>
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.1s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.2s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.3s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.4s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.5s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.6s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.7s' } as React.CSSProperties}
                  />
                  <div
                    className={styles.cube}
                    style={{ '--delay': '0.8s' } as React.CSSProperties}
                  />
                </div>
                <div className={styles.circuitLines}>
                  <svg viewBox='0 0 400 300' className={styles.circuitSvg}>
                    <defs>
                      <linearGradient
                        id='lineGradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='var(--color-accent)'
                          stopOpacity='0.6'
                        />
                        <stop
                          offset='100%'
                          stopColor='var(--color-secondary)'
                          stopOpacity='0.3'
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d='M0 150 L100 150 L120 100 L180 100 L200 150 L300 150'
                      stroke='url(#lineGradient)'
                      strokeWidth='2'
                      fill='none'
                      className={styles.circuitPath}
                    />
                    <path
                      d='M50 200 L150 200 L170 250 L250 250'
                      stroke='url(#lineGradient)'
                      strokeWidth='2'
                      fill='none'
                      className={styles.circuitPath}
                    />
                    <path
                      d='M100 50 L200 50 L220 100'
                      stroke='url(#lineGradient)'
                      strokeWidth='2'
                      fill='none'
                      className={styles.circuitPath}
                    />
                    <circle
                      cx='100'
                      cy='150'
                      r='4'
                      fill='var(--color-accent)'
                      className={styles.circuitNode}
                    />
                    <circle
                      cx='200'
                      cy='150'
                      r='4'
                      fill='var(--color-accent)'
                      className={styles.circuitNode}
                    />
                    <circle
                      cx='150'
                      cy='200'
                      r='4'
                      fill='var(--color-accent)'
                      className={styles.circuitNode}
                    />
                    <circle
                      cx='200'
                      cy='50'
                      r='4'
                      fill='var(--color-accent)'
                      className={styles.circuitNode}
                    />
                  </svg>
                </div>
                <div className={styles.glowOrb} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} aria-labelledby='about-heading'>
          <div className={styles.container}>
            <h2 id='about-heading' className={styles.sectionTitle}>
              Who We Are
            </h2>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                At Triple E Technology Solutions, we believe that the right IT
                support can empower businesses to thrive. We&apos;re more than
                just an IT consulting firm—we&apos;re your technology partner.
              </p>
              <p className={styles.aboutText}>
                We offer complete, end-to-end business technology solutions. Our
                team is committed to understanding your unique needs and helping
                you build a solid tech foundation so your business can grow with
                confidence.
              </p>
              <p className={styles.aboutText}>
                Guided by our core values—efficiency, effectiveness, and
                excellence—we&apos;re here to deliver responsive, knowledgeable
                service that helps you and your business unlock its full
                potential.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className={styles.values} aria-labelledby='values-heading'>
          <div className={styles.container}>
            <p className={styles.badge}>OUR CORE VALUES</p>
            <h2 id='values-heading' className={styles.sectionTitle}>
              The Three E&apos;s That Drive Us
            </h2>
            <p className={styles.sectionSubtitle}>
              Every decision we make is guided by these fundamental principles
            </p>
            <div className={styles.valuesGrid}>
              {coreValues.map((value) => (
                <article key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Image
                      src={value.icon}
                      alt=''
                      width={64}
                      height={64}
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyUs} aria-labelledby='why-heading'>
          <div className={styles.container}>
            <div className={styles.whyUsContent}>
              <div className={styles.whyUsText}>
                <p className={styles.badge}>WHY TRIPLE E</p>
                <h2 id='why-heading' className={styles.sectionTitle}>
                  More Than Just IT Support
                </h2>
                <p className={styles.whyUsIntro}>
                  We understand that technology can be overwhelming. That&apos;s
                  why we take a partnership approach, working alongside you to
                  build solutions that truly fit your business.
                </p>
                <ul className={styles.whyUsList}>
                  {whyChooseUs.map((item) => (
                    <li key={item.title} className={styles.whyUsItem}>
                      <h3 className={styles.whyUsItemTitle}>{item.title}</h3>
                      <p className={styles.whyUsItemDescription}>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.whyUsImage}>
                <Image
                  src='/images/why-triple-e.jpg'
                  alt='Triple E team collaborating on technology solutions'
                  width={600}
                  height={500}
                  sizes='(min-width: 1280px) 576px, (min-width: 1024px) 45vw, 100vw'
                  className={styles.collaborationImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className={styles.stats} aria-label='Company statistics'>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years of Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support Available</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Focused</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Quick Links Section */}
        <section className={styles.quickLinks} aria-labelledby='links-heading'>
          <div className={styles.container}>
            <h2 id='links-heading' className={styles.sectionTitle}>
              Explore More
            </h2>
            <div className={styles.linksGrid}>
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={styles.linkCard}
                >
                  <div className={styles.linkIcon}>
                    <Image
                      src={link.icon}
                      alt=''
                      width={48}
                      height={48}
                      aria-hidden='true'
                    />
                  </div>
                  <div className={styles.linkContent}>
                    <h3 className={styles.linkTitle}>{link.title}</h3>
                    <p className={styles.linkDescription}>{link.description}</p>
                  </div>
                  <span className={styles.linkArrow} aria-hidden='true'>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            <p className={styles.ctaText}>
              Let&apos;s discuss how Triple E Technology Solutions can help you
              build a stronger technology foundation.
            </p>
            <div className={styles.ctaButtons}>
              <Link href='/contact' className={styles.ctaPrimary}>
                Contact Us Today
              </Link>
              <Link
                href='/managed-service-provider'
                className={styles.ctaSecondary}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CompanyPage;

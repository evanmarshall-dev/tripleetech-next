import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact Us | Triple E Technology Solutions',
  description:
    'Get in touch with Triple E Technology Solutions. Located in Kentville, Nova Scotia, we provide IT support, cybersecurity, and managed services to businesses across the Annapolis Valley.',
  keywords: [
    'IT support Kentville',
    'IT services Annapolis Valley',
    'managed services Nova Scotia',
    'cybersecurity Kentville',
    'contact Triple E',
    'IT consulting Nova Scotia',
  ],
  openGraph: {
    title: 'Contact Us | Triple E Technology Solutions',
    description:
      'Get in touch with Triple E Technology Solutions for IT support, cybersecurity, and managed services in the Annapolis Valley.',
    url: 'https://tripleetech.ca/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tripleetech.ca/contact',
  },
};

// JSON-LD structured data for local business SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Triple E Technology Solutions',
  image: 'https://tripleetech.ca/icons/logo-sm.svg',
  '@id': 'https://tripleetech.ca',
  url: 'https://tripleetech.ca',
  telephone: '+1-902-365-7333',
  email: 'help@tripleetech.ca',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '535 Main Street',
    addressLocality: 'Kentville',
    addressRegion: 'NS',
    postalCode: 'B4N 1L4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.0781,
    longitude: -64.5054,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/tripleetech',
    'https://www.linkedin.com/company/triple-e-technology-solutions',
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 45.0781,
      longitude: -64.5054,
    },
    geoRadius: '100000',
  },
  serviceType: [
    'Managed IT Services',
    'Cybersecurity',
    'IT Consulting',
    'Network Support',
  ],
};

const ContactPage = () => {
  const contactMethods = [
    {
      title: 'Phone',
      value: '902-365-7333',
      href: 'tel:+19023657333',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
      ),
      description: 'Mon-Fri, 8am-5pm AST',
    },
    {
      title: 'Email',
      value: 'help@tripleetech.ca',
      href: 'mailto:help@tripleetech.ca',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <rect width='20' height='16' x='2' y='4' rx='2' />
          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
      ),
      description: 'We respond within 24 hours',
    },
    {
      title: 'Visit Us',
      value: '535 Main Street, Kentville',
      href: 'https://maps.app.goo.gl/oD8KfVuueDWAqTjt7',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
          <circle cx='12' cy='10' r='3' />
        </svg>
      ),
      description: 'Nova Scotia, Canada B4N 1L4',
    },
  ];

  const reasons = [
    {
      title: 'IT Support',
      description:
        'Need help with your technology? Our team is ready to assist with troubleshooting, repairs, and ongoing support.',
    },
    {
      title: 'Security Concerns',
      description:
        "Worried about cyber threats? Let's discuss how we can protect your business with our security solutions.",
    },
    {
      title: 'Managed Services',
      description:
        "Interested in proactive IT management? We'll explain how our MSP services can benefit your business.",
    },
    {
      title: 'Free Consultation',
      description:
        "Not sure what you need? Schedule a free consultation and we'll help you find the right solution.",
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NavBar />
      <main className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-labelledby='hero-heading'>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <p className={styles.badge}>GET IN TOUCH</p>
              <h1 id='hero-heading' className={styles.heroTitle}>
                Let&apos;s Start a Conversation
              </h1>
              <p className={styles.heroSubtitle}>
                Whether you have a question, need support, or want to explore
                how we can help your business—we&apos;re here and ready to
                listen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section
          className={styles.contactMethods}
          aria-labelledby='contact-methods-heading'
        >
          <div className={styles.container}>
            <h2 id='contact-methods-heading' className='visually-hidden'>
              Ways to Contact Us
            </h2>
            <div className={styles.methodsGrid}>
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className={styles.methodCard}
                  target={method.title === 'Visit Us' ? '_blank' : undefined}
                  rel={
                    method.title === 'Visit Us'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>{method.title}</h3>
                    <p className={styles.methodValue}>{method.value}</p>
                    <p className={styles.methodDescription}>
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className={styles.infoSection} aria-labelledby='info-heading'>
          <div className={styles.container}>
            <h2 id='info-heading' className={styles.sectionTitle}>
              How Can We Help?
            </h2>
            <p className={styles.sectionSubtitle}>
              Whether you need IT support, security guidance, or want to explore
              managed services—we&apos;re here to help your business thrive.
            </p>
            <div className={styles.infoGrid}>
              {/* Reach Out For Card */}
              <div className={styles.reasonsCard}>
                <h3 className={styles.reasonsTitle}>Reach Out For</h3>
                <ul className={styles.reasonsList}>
                  {reasons.map((reason) => (
                    <li key={reason.title} className={styles.reasonItem}>
                      <div className={styles.reasonContent}>
                        <h4 className={styles.reasonName}>{reason.title}</h4>
                        <p className={styles.reasonDescription}>
                          {reason.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours Card */}
              <div className={styles.hoursCard}>
                <h3 className={styles.hoursTitle}>Business Hours</h3>
                <dl className={styles.hoursList}>
                  <div className={styles.hoursRow}>
                    <dt>Monday - Thursday</dt>
                    <dd>8:00 AM - 4:30 PM</dd>
                  </div>
                  <div className={styles.hoursRow}>
                    <dt>Friday</dt>
                    <dd>8:00 AM - 4:00 PM</dd>
                  </div>
                  <div className={styles.hoursRow}>
                    <dt>Saturday - Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
                <p className={styles.hoursNote}>
                  Emergency Support available 24/7 for Contracted Clients
                </p>

                {/* Quick Actions */}
                <div className={styles.quickActions}>
                  <a
                    href='https://tripleetech.screenconnect.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.quickAction}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-hidden='true'
                    >
                      <rect width='20' height='14' x='2' y='3' rx='2' />
                      <line x1='8' x2='16' y1='21' y2='21' />
                      <line x1='12' x2='12' y1='17' y2='21' />
                    </svg>
                    Remote Support
                  </a>
                  <a
                    href='https://tripleetech.freshdesk.com/support/tickets/new'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.quickAction}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-hidden='true'
                    >
                      <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
                      <path d='M14 2v4a2 2 0 0 0 2 2h4' />
                      <path d='M10 12h4' />
                      <path d='M10 16h4' />
                    </svg>
                    Submit a Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form - Commented out for now, functionality covered by navbar links
        <section className={styles.mainContent} aria-labelledby='form-heading'>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.formWrapper}>
                <h2 id='form-heading' className={styles.sectionTitle}>
                  Send Us a Message
                </h2>
                <p className={styles.formIntro}>
                  Fill out the form below and we&apos;ll get back to you within
                  one business day.
                </p>
                <form
                  className={styles.contactForm}
                  action='https://formspree.io/f/your-form-id'
                  method='POST'
                >
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='firstName' className={styles.formLabel}>
                        First Name <span aria-hidden='true'>*</span>
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        required
                        autoComplete='given-name'
                        className={styles.formInput}
                        placeholder='John'
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='lastName' className={styles.formLabel}>
                        Last Name <span aria-hidden='true'>*</span>
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        required
                        autoComplete='family-name'
                        className={styles.formInput}
                        placeholder='Doe'
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='email' className={styles.formLabel}>
                        Email <span aria-hidden='true'>*</span>
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        autoComplete='email'
                        className={styles.formInput}
                        placeholder='john@company.com'
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='phone' className={styles.formLabel}>
                        Phone
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        autoComplete='tel'
                        className={styles.formInput}
                        placeholder='902-555-1234'
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='company' className={styles.formLabel}>
                      Company Name
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      autoComplete='organization'
                      className={styles.formInput}
                      placeholder='Your Company Inc.'
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='subject' className={styles.formLabel}>
                      How Can We Help? <span aria-hidden='true'>*</span>
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      required
                      className={styles.formSelect}
                      defaultValue=''
                    >
                      <option value='' disabled>
                        Select a topic...
                      </option>
                      <option value='it-support'>IT Support</option>
                      <option value='managed-services'>Managed Services</option>
                      <option value='cybersecurity'>Cybersecurity</option>
                      <option value='consulting'>IT Consulting</option>
                      <option value='quote'>Request a Quote</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='message' className={styles.formLabel}>
                      Message <span aria-hidden='true'>*</span>
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      className={styles.formTextarea}
                      placeholder='Tell us about your project or question...'
                    />
                  </div>

                  <button type='submit' className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Map Section */}
        <section className={styles.mapSection} aria-labelledby='map-heading'>
          <div className={styles.container}>
            <h2 id='map-heading' className={styles.sectionTitle}>
              Find Us in Kentville
            </h2>
            <p className={styles.mapDescription}>
              Located in the heart of the Annapolis Valley, we proudly serve
              businesses throughout Nova Scotia.
            </p>
            <div className={styles.mapWrapper}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.379296617465!2d-64.50544102368572!3d45.07810105911696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5851b89ea05127%3A0x4aa3ac4cf13e6a6d!2sTriple%20E%20Technology%20Solutions%20Incorporated!5e0!3m2!1sen!2sca!4v1768764381254!5m2!1sen!2sca'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Triple E Technology Solutions location on Google Maps'
              />
            </div>
            <div className={styles.mapAddress}>
              <address>
                <strong>Triple E Technology Solutions</strong>
                <br />
                535 Main Street
                <br />
                Kentville, Nova Scotia
                <br />
                Canada, B4N 1L4
              </address>
              <a
                href='https://maps.app.goo.gl/oD8KfVuueDWAqTjt7'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.directionsLink}
              >
                Get Directions
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <path d='M7 7h10v10' />
                  <path d='M7 17 17 7' />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta} aria-labelledby='cta-heading'>
          <div className={styles.container}>
            <h2 id='cta-heading' className={styles.ctaTitle}>
              Prefer to Talk First?
            </h2>
            <p className={styles.ctaText}>
              Sometimes a quick call is the best way to get answers. Reach out
              and let&apos;s discuss how we can help your business.
            </p>
            <div className={styles.ctaButtons}>
              <a href='tel:+19023657333' className={styles.ctaPrimary}>
                Call +1 (902) 365-7333
              </a>
              <Link href='/about-us' className={styles.ctaSecondary}>
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

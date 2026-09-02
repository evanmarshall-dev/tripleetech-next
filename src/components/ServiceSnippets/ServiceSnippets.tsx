import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSnippets.module.scss';

const ServiceSnippets = () => {
  const serviceSnippetsItems = [
    {
      id: 1,
      title: 'Cybersecurity',
      href: '/cybersecurity',
      description:
        "Cybersecurity doesn't have to be overwhelming. At the heart of every strong defense is a secure foundation—one that protects your data, prepares your team, and puts the right tools in...",
      image: '/images/homepage-service-card-cybersecurity.jpg',
    },
    {
      id: 2,
      title: 'Consulting Services',
      href: '/consulting-services',
      description:
        "At Triple E Technology Solutions, we don't just fix problems—we help you build the right tech foundation to grow, thrive, and innovate. We partner with businesses to deliver efficient, effective IT solutions tailored to your...",
      image: '/images/homepage-service-card-consulting.jpg',
    },
    {
      id: 3,
      title: 'Managed Service Provider',
      href: '/managed-service-provider',
      description:
        "At Triple E Technology Solutions, we believe great technology shouldn't just run your business—it should empower it. As your Managed Service Provider (MSP), we take the stress out of...",
      image: '/images/homepage-service-card-msp.jpg',
    },
  ];

  return (
    <section id='services' className={styles.serviceSnippets}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>SERVICES & SUPPORT</span>
          <h2 className={styles.title}>
            Expert IT Solutions Tailored for Your Success
          </h2>
          <p className={styles.subtitle}>
            From remote support to strategic consulting, we deliver
            comprehensive IT services that keep your business running smoothly
            and securely
          </p>
        </div>

        <div className={styles.serviceSnippetsGrid}>
          {serviceSnippetsItems.map((item) => (
            <article key={item.id} className={styles.serviceSnippetsCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={`${item.title} - Professional IT services illustration`}
                  width={400}
                  height={250}
                  sizes='(min-width: 1024px) 384px, (min-width: 768px) 45vw, 90vw'
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceSnippetsTitle}>{item.title}</h3>
                <p className={styles.serviceSnippetsDescription}>
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className={styles.readMore}
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSnippets;

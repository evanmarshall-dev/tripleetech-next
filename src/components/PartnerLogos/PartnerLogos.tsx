'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './PartnerLogos.module.scss';

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
  url: string;
}

// Sample partner data - replace with actual partner information
const partners: Partner[] = [
  {
    name: 'Fortinet Silver',
    logo: '/images/partners/fortinet-silver.png',
    width: 1999,
    height: 558,
    url: 'https://www.fortinet.com/',
  },
  {
    name: 'Cloudli',
    logo: '/images/partners/cloudli.png',
    width: 581,
    height: 248,
    url: 'https://www.cloudli.com/en-ca/',
  },
  {
    name: 'HP Enterprise',
    logo: '/images/partners/hp-enterprise.png',
    width: 300,
    height: 125,
    url: 'https://store.hp.com/CanadaStore/Merch/Default.aspx',
  },
  {
    name: 'HP',
    logo: '/images/partners/hp.png',
    width: 300,
    height: 300,
    url: 'https://store.hp.com/CanadaStore/Merch/Default.aspx',
  },
  {
    name: 'Lenovo',
    logo: '/images/partners/lenovo.png',
    width: 300,
    height: 98,
    url: 'https://www.lenovo.com/ca/en/',
  },
  {
    name: 'Microsoft Silver',
    logo: '/images/partners/microsoft-silver.png',
    width: 660,
    height: 433,
    url: 'https://partner.microsoft.com/en-ca/community/solutionaggregators',
  },
  {
    name: 'TouchBistro',
    logo: '/images/partners/touchbistro.png',
    width: 300,
    height: 82,
    url: 'https://www.touchbistro.com/',
  },
];

const PartnerLogos = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id='partners'
      className={styles.partnerLogos}
      aria-label='Our Partners'
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.badge}>Trusted Partners</p>
          <h2 className={styles.title}>Partnering with Industry Leaders</h2>
          <p className={styles.subtitle}>
            We work alongside the world&apos;s leading technology companies to
            deliver comprehensive security solutions.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} ref={trackRef}>
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.logoLink}
                aria-label={`Visit ${partner.name} website`}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    sizes='120px'
                    className={styles.logo}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

import { SITE_NAME, SITE_URL } from '@/lib/metadata';

/**
 * LocalBusiness entity for the whole site. Rendered on the homepage (the
 * page Google associates with the organization) and on /contact. Both use
 * the same @id so they describe one entity rather than two. The @id uses a
 * #organization fragment so the business is identified separately from the
 * web page that happens to live at the same URL.
 */
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  image: `${SITE_URL}/icons/logo-sm.svg`,
  '@id': `${SITE_URL}/#organization`,
  url: SITE_URL,
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '16:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:00',
      closes: '16:00',
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
  // serviceType is a Service property, not a LocalBusiness one. hasOfferCatalog
  // is how an Organization declares what it offers.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      'Managed IT Services',
      'Cybersecurity',
      'IT Consulting',
      'Network Support',
    ].map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service },
    })),
  },
};

export function BusinessJsonLd() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
    />
  );
}

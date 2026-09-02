import { SITE_NAME, SITE_URL } from '@/lib/metadata';

/**
 * Single source of truth for the business's name, address, phone and hours.
 *
 * Every component that displays any of this imports it from here. Duplicating
 * it is how the contact page's hours drifted out of sync with the structured
 * data, and how the phone number ended up in three different visible formats.
 *
 * NAP (name, address, phone) consistency is also a local search ranking
 * signal: search engines cross-reference the site against directory listings,
 * and inconsistent formatting weakens the match.
 */
export const BUSINESS = {
  name: SITE_NAME,
  email: 'help@tripleetech.ca',
  phone: {
    /** E.164, for tel: hrefs */
    href: 'tel:+19023657333',
    /** What visitors read. Use this everywhere a number is displayed. */
    display: '(902) 365-7333',
    /** Hyphenated international, the format schema.org expects */
    schema: '+1-902-365-7333',
  },
  address: {
    street: '535 Main Street',
    locality: 'Kentville',
    region: 'NS',
    regionLong: 'Nova Scotia',
    postalCode: 'B4N 1L4',
    country: 'CA',
    countryLong: 'Canada',
  },
  /** Google Business Profile listing, not the bare street address */
  mapUrl: 'https://maps.app.goo.gl/oD8KfVuueDWAqTjt7',
  geo: { latitude: 45.0781, longitude: -64.5054 },
  hours: {
    /** What visitors read */
    display: 'Mon-Thu 8am-4:30pm, Fri 8am-4pm',
    /** Saturday and Sunday are omitted; schema.org reads that as closed */
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '16:30',
      },
      { dayOfWeek: ['Friday'], opens: '08:00', closes: '16:00' },
    ],
  },
  social: [
    'https://www.facebook.com/tripleetech',
    'https://www.linkedin.com/company/triple-e-technology-solutions',
  ],
  services: [
    'Managed IT Services',
    'Cybersecurity',
    'IT Consulting',
    'Network Support',
  ],
};

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
  name: BUSINESS.name,
  image: `${SITE_URL}/icons/logo-sm.svg`,
  '@id': `${SITE_URL}/#organization`,
  url: SITE_URL,
  telephone: BUSINESS.phone.schema,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
  openingHoursSpecification: BUSINESS.hours.schema.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    ...slot,
  })),
  sameAs: BUSINESS.social,
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    geoRadius: '100000',
  },
  // serviceType is a Service property, not a LocalBusiness one. hasOfferCatalog
  // is how an Organization declares what it offers.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: BUSINESS.services.map((service) => ({
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

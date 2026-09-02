import { SITE_URL } from '@/lib/metadata';

type ServiceProps = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

/**
 * Service structured data for the individual service pages.
 *
 * provider references the LocalBusiness by its @id rather than repeating the
 * business details, so there is still exactly one entity definition. This is
 * what the #organization fragment id is for.
 *
 * Service is not itself a rich-result type for most verticals; the value is
 * telling search engines and AI crawlers what each page offers rather than
 * leaving them to infer it from prose.
 */
export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: ServiceProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

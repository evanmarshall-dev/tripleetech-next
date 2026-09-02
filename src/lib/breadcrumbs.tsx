import { SITE_URL } from '@/lib/metadata';

type Crumb = { name: string; path: string };

/**
 * BreadcrumbList structured data. Google can render this as a trail in place
 * of the raw URL in search results.
 *
 * "Home" is prepended automatically, so a page passes only its own crumb.
 * The site is flat, so every trail is two levels; nested sections would pass
 * their ancestors in order.
 */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map(
      (crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
      })
    ),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import type { Metadata } from 'next';

export const SITE_NAME = 'Triple E Technology Solutions';
export const SITE_URL = 'https://www.tripleetech.ca';

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/**
 * Builds a page's metadata with matching canonical, Open Graph, and Twitter
 * tags. Next does not derive `openGraph.title` from `title`, so without this
 * every page would inherit the root layout's social title.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: BuildMetadataArgs): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_CA',
      type: 'website',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'Triple E Technology Solutions — business IT solutions in the Annapolis Valley',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ['/og.png'],
    },
  };
}

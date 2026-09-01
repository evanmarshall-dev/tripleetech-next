import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const routes: Route[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  {
    path: '/managed-service-provider',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  { path: '/cybersecurity', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/consulting-services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about-us', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency,
    priority,
  }));
}

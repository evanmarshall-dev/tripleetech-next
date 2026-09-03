import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Inlines the CSS into the HTML instead of emitting <link rel=stylesheet>.
  // Two stylesheets were blocking first paint: measured against production
  // under mobile throttling the HTML landed at 274ms, the CSS at 473ms and the
  // hero image at 510ms - the LCP image was ready before the browser was
  // allowed to paint it. Removing the round trip cut FCP from 684ms to 432ms
  // locally and render-blocking requests from two to zero.
  //
  // Trade-off: the CSS is re-sent with every document rather than cached
  // across navigations (~20KB/page). Worth it for a mostly one-or-two-page
  // marketing site; revisit if the site grows into something people browse.
  experimental: { inlineCss: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 100],
  },
};

export default nextConfig;

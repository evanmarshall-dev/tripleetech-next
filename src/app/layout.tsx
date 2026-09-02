import type { Metadata } from 'next';
import { inter } from './fonts';
import Widget from '@/components/Widget/Widget';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from '@/lib/metadata';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Google Search Console ownership proof for the www URL-prefix property.
  // Must be server-rendered: the GA-based method fails because gtag is
  // injected by client-side script after load, so the verifier (which does
  // not run JavaScript) never sees it.
  verification: { google: 'OYc2NkwFuBF4pwMrR6MnLE7OPjoWbOa9omaQdnQ3JZw' },
  title: {
    template: '%s | Triple E Technology Solutions',
    default: 'Triple E Technology Solutions',
  },
  description:
    'Locally owned IT solutions from the Annapolis Valley. Triple E delivers managed services, cybersecurity, and IT consulting across Atlantic Canada.',
  openGraph: {
    title: SITE_NAME,
    description:
      'Locally owned IT solutions from the Annapolis Valley. Triple E delivers managed services, cybersecurity, and IT consulting across Atlantic Canada.',
    url: '/',
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
    title: SITE_NAME,
    description:
      'Locally owned IT solutions from the Annapolis Valley. Triple E delivers managed services, cybersecurity, and IT consulting across Atlantic Canada.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior='smooth' lang='en'>
      <body className={`${inter.variable}`}>
        <a href='#main-content' className='skip-link'>
          Skip to main content
        </a>
        {children}
        <Widget />
        {/*
          GA4 loaded at lazyOnload rather than through @next/third-parties,
          which defaults to afterInteractive. gtag.js is 169 KB - the largest
          single resource on the page, bigger than every image and all
          first-party JS combined - and at afterInteractive it competes with
          the hero image for bandwidth during LCP. lazyOnload defers it until
          after the window load event, so it no longer contends.

          Trade-off: the pageview fires a few seconds later, so a visitor who
          leaves almost immediately may not be counted.
        */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy='lazyOnload'
        />
        <Script id='ga-init' strategy='lazyOnload'>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}

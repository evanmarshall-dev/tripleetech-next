import type { Metadata } from 'next';
import { inter } from './fonts';
import Widget from '@/components/Widget/Widget';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from '@/lib/metadata';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}

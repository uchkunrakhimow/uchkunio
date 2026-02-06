import type { SEOProps } from '@/types/seo';

export const seoConfig: Required<Pick<SEOProps, 'title' | 'titleTemplate' | 'description' | 'openGraph' | 'twitter'>> & Partial<SEOProps> = {
  title: 'Uchkun.io',
  titleTemplate: '%s | Uchkun.io',
  description: 'Built with Vite, React, and TypeScript. A modern web application designed for performance and scalability.',
  canonical: 'https://uchkun.io',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uchkun.io',
    siteName: 'Uchkun.io',
    images: [
      {
        url: 'https://uchkun.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Uchkun.io - Modern React Application',
      },
    ],
  },
  twitter: {
    handle: '@uchkun',
    site: '@uchkun',
    cardType: 'summary_large_image',
  },
};

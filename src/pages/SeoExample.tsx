import { SEO } from '@/components/SEO';

const SeoExample = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Advanced SEO in React',
    author: {
      '@type': 'Person',
      name: 'Uchkun',
    },
    datePublished: '2023-10-01',
  };

  return (
    <div className="container mx-auto p-4">
      <SEO
        title="Advanced SEO Implementation"
        description="Learn how to implement a production-ready SEO engine in React using react-helmet-async and structured data."
        canonical="https://uchkun.io/seo-example"
        keywords={['seo', 'react', 'typescript', 'vite']}
        openGraph={{
          title: 'Mastering React SEO',
          description: 'A comprehensive guide to SEO in modern React applications.',
          type: 'article',
          images: [
            {
              url: 'https://uchkun.io/images/seo-guide.jpg',
              width: 1200,
              height: 630,
              alt: 'SEO Guide Cover',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@uchkun_dev',
        }}
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Home', item: 'https://uchkun.io' },
          { name: 'SEO Example', item: 'https://uchkun.io/seo-example' },
        ]}
      />

      <h1 className="text-3xl font-bold mb-4">SEO Implementation Example</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        This page demonstrates the capabilities of our SEO engine. 
        Inspect the page source or use the React Developer Tools to verify the meta tags, 
        JSON-LD structured data, and Open Graph attributes.
      </p>
    </div>
  );
};

export default SeoExample;

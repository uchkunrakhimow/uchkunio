import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo.config';
import type { SEOProps } from '@/types/seo';

export const SEO = ({
  title,
  titleTemplate = seoConfig.titleTemplate,
  description = seoConfig.description,
  canonical,
  keywords,
  noindex = false,
  nofollow = false,
  openGraph,
  twitter,
  structuredData,
  breadcrumbs,
}: SEOProps) => {
  const siteTitle = title || seoConfig.title;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  const mergedOpenGraph = { ...seoConfig.openGraph, ...openGraph };
  const mergedTwitter = { ...seoConfig.twitter, ...twitter };

  const metaTitle = titleTemplate?.replace('%s', siteTitle || '') || siteTitle;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={mergedOpenGraph.type} />
      <meta property="og:url" content={mergedOpenGraph.url || currentUrl} />
      <meta property="og:title" content={mergedOpenGraph.title || metaTitle} />
      <meta property="og:description" content={mergedOpenGraph.description || description} />
      <meta property="og:site_name" content={mergedOpenGraph.siteName} />
      <meta property="og:locale" content={mergedOpenGraph.locale} />
      {mergedOpenGraph.images?.map((image, index) => (
        <meta key={`og-image-${index}`} property="og:image" content={image.url} />
      ))}
      {mergedOpenGraph.images?.[0]?.width && (
        <meta property="og:image:width" content={String(mergedOpenGraph.images[0].width)} />
      )}
      {mergedOpenGraph.images?.[0]?.height && (
        <meta property="og:image:height" content={String(mergedOpenGraph.images[0].height)} />
      )}
      {mergedOpenGraph.images?.[0]?.alt && (
        <meta property="og:image:alt" content={mergedOpenGraph.images[0].alt} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={mergedTwitter.cardType} />
      <meta name="twitter:site" content={mergedTwitter.site} />
      <meta name="twitter:creator" content={mergedTwitter.handle} />
      <meta name="twitter:title" content={title || mergedOpenGraph.title || siteTitle} />
      <meta name="twitter:description" content={description || mergedOpenGraph.description} />
      {mergedOpenGraph.images?.[0] && <meta name="twitter:image" content={mergedOpenGraph.images[0].url} />}

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Breadcrumbs JSON-LD */}
      {breadcrumbs && breadcrumbs.length > 0 && (
         <script type="application/ld+json">
           {JSON.stringify({
             '@context': 'https://schema.org',
             '@type': 'BreadcrumbList',
             itemListElement: breadcrumbs.map((crumb, index) => ({
               '@type': 'ListItem',
               position: index + 1,
               name: crumb.name,
               item: crumb.item,
             })),
           })}
         </script>
      )}
    </Helmet>
  );
};

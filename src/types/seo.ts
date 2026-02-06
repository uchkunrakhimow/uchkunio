export type TwitterCardType = 'summary' | 'summary_large_image' | 'app' | 'player';

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

export interface OpenGraph {
  title?: string;
  description?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'book' | 'music.song' | 'music.album';
  images?: OpenGraphImage[];
  siteName?: string;
  locale?: string;
}

export interface Twitter {
  handle?: string;
  site?: string;
  cardType?: TwitterCardType;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: OpenGraph;
  twitter?: Twitter;
  structuredData?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

const upsertMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const SEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertCanonical(canonical);
  }, [title, description, canonical]);

  return null;
};

export default SEO;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.appnity.co.in';
const DEFAULT_IMAGE = `${SITE_URL}/ap2.png`;

/**
 * SEO Component for dynamic meta tags
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.path - Path after domain (e.g., '/blog')
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.type - Open Graph type (website, article)
 * @param {Object} props.article - Article-specific data for blogs
 * @param {Object} props.structuredData - Custom JSON-LD structured data
 */
const SEOHead = ({
  title = 'Appnity - Premium Software Development & Design Agency',
  description = 'Appnity is a leading software development agency specializing in web development, mobile apps, UI/UX design, and custom SaaS solutions.',
  keywords = 'software development, web development, mobile app development, UI/UX design, SaaS solutions, Appnity',
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  article = null,
  structuredData = null,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = title.includes('Appnity') ? title : `${title} | Appnity`;

  // Generate Article Schema for blog posts
  const generateArticleSchema = () => {
    if (!article) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: article.image || image,
      author: {
        '@type': 'Person',
        name: article.author || 'Appnity Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Appnity',
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_IMAGE,
        },
      },
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      keywords: article.tags?.join(', '),
    };
  };

  // Generate BreadcrumbList Schema
  const generateBreadcrumbSchema = () => {
    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `${SITE_URL}${currentPath}`,
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  };

  const articleSchema = generateArticleSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Appnity" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.datePublished} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

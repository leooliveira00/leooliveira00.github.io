import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description,
  keywords,
  author = "Leonardo Sousa",
  type = "website"
}) => {
  const { t, i18n } = useTranslation('common');
  const currentUrl = window.location.href;
  
  // Use traduções como fallback se não houver props
  const pageTitle = title || t('pageTitle');
  const pageDescription = description || t('pageDescription');
  const pageKeywords = keywords || (
    i18n.language === 'pt-BR' 
      ? "Full Stack Developer, React, Node.js, Python, DevOps, Infraestrutura, Automação, Leonardo Sousa, desenvolvedor"
      : "Full Stack Developer, React, Node.js, Python, DevOps, Infrastructure, Automation, Leonardo Sousa, developer"
  );
  const pageLanguage = i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US';
  const siteName = i18n.language === 'pt-BR' 
    ? "Portfolio - Leonardo Sousa" 
    : "Portfolio - Leonardo Sousa";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={pageLanguage} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={pageLanguage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={pageLanguage} />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;

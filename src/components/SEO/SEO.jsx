import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Desenvolvedor Full Stack Jr | Portfolio Profissional", 
  description = "Desenvolvedor Full Stack com background sólido em infraestrutura de TI. Especializações em React, Node.js, Python, Docker e DevOps.",
  keywords = "desenvolvedor full stack, react, node.js, python, devops, infraestrutura, javascript, portfolio desenvolvedor",
  author = "Leonardo Oliveira",
  type = "website"
}) => {
  const currentUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Portfolio - Desenvolvedor Full Stack" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;

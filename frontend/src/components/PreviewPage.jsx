import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewPage = () => {
  const navigate = useNavigate();
  const [businessData, setBusinessData] = useState({});
  const [productData, setProductData] = useState({});
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load all data from storage
    const business = JSON.parse(localStorage.getItem('businessData') || sessionStorage.getItem('businessData') || '{}');
    const products = JSON.parse(localStorage.getItem('productData') || sessionStorage.getItem('productData') || '{}');
    const industry = sessionStorage.getItem('selectedIndustry') || '';

    setBusinessData(business);
    setProductData(products);
    setSelectedIndustry(industry);
    setIsLoading(false);
  }, []);

  // Enhanced theme colors with gradients and modern aesthetics
  const getThemeColors = (theme) => {
    const themes = {
      blue: {
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#10B981',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        heroBackground: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
        cardBg: '#FAFBFF',
        cardBorder: '#E0E7FF',
        textDark: '#1E293B',
        textLight: '#64748B'
      },
      green: {
        primary: '#059669',
        secondary: '#047857',
        accent: '#3B82F6',
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        heroBackground: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #0891B2 100%)',
        cardBg: '#F0FDF4',
        cardBorder: '#BBF7D0',
        textDark: '#1E293B',
        textLight: '#64748B'
      },
      purple: {
        primary: '#7C3AED',
        secondary: '#6D28D9',
        accent: '#EC4899',
        background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
        heroBackground: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 50%, #EC4899 100%)',
        cardBg: '#FAF5FF',
        cardBorder: '#E9D5FF',
        textDark: '#1E293B',
        textLight: '#64748B'
      },
      orange: {
        primary: '#EA580C',
        secondary: '#DC2626',
        accent: '#059669',
        background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        heroBackground: 'linear-gradient(135deg, #FB923C 0%, #EA580C 50%, #DC2626 100%)',
        cardBg: '#FFF7ED',
        cardBorder: '#FED7AA',
        textDark: '#1E293B',
        textLight: '#64748B'
      }
    };
    return themes[theme] || themes.blue;
  };

  const theme = getThemeColors(businessData.colorTheme);

  // Industry-specific styling and content
  const getIndustryIcon = (industry) => {
    const icons = {
      'Pharmacy': '💊',
      'Cosmetics': '💄',
      'Restaurant': '🍽️',
      'Electronics': '📱',
      'Clothing': '👗',
      'Grocery': '🛒'
    };
    return icons[industry] || '🏪';
  };

  const styles = {
    container: {
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#FAFBFC',
      lineHeight: '1.6'
    },
    previewControls: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      color: 'white',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
    },
    controlButton: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      margin: '0 6px',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    websiteContainer: {
      marginTop: '70px',
      minHeight: '100vh'
    },
    header: {
      background: theme.heroBackground,
      color: 'white',
      padding: '100px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.1)',
      zIndex: 1
    },
    floatingShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 2
    },
    businessName: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '700',
      marginBottom: '24px',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      lineHeight: '1.2'
    },
    industryIcon: {
      fontSize: 'clamp(3rem, 6vw, 5rem)',
      marginBottom: '20px',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    },
    tagline: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      opacity: 0.95,
      marginBottom: '40px',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '40px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'rgba(255,255,255,0.15)',
      padding: '12px 20px',
      borderRadius: '50px',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.3s ease',
      fontSize: '0.95rem',
      fontWeight: '400'
    },
    section: {
      padding: '100px 0',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      textAlign: 'center',
      marginBottom: '60px',
      color: theme.textDark,
      position: 'relative',
      fontWeight: '700'
    },
    sectionTitleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: `linear-gradient(90deg, ${theme.primary}, ${theme.accent})`,
      borderRadius: '2px'
    },
    aboutSection: {
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
      padding: '100px 24px',
      margin: '0',
      position: 'relative'
    },
    aboutContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px'
    },
    aboutCard: {
      background: 'rgba(255,255,255,0.9)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      border: `1px solid ${theme.cardBorder}`,
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    cardTitle: {
      color: theme.primary,
      fontSize: '1.5rem',
      marginBottom: '20px',
      fontWeight: '600'
    },
    cardText: {
      color: theme.textLight,
      lineHeight: '1.7',
      fontSize: '1rem'
    },
    productsSection: {
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      padding: '100px 24px',
      position: 'relative'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    productCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255,255,255,0.8)',
      position: 'relative'
    },
    productImage: {
      width: '100%',
      height: '240px',
      objectFit: 'cover',
      background: `linear-gradient(135deg, ${theme.cardBg}, ${theme.cardBorder})`,
      transition: 'transform 0.4s ease'
    },
    productInfo: {
      padding: '32px'
    },
    productName: {
      fontSize: '1.4rem',
      color: theme.textDark,
      marginBottom: '12px',
      fontWeight: '600',
      lineHeight: '1.3'
    },
    productPrice: {
      fontSize: '1.6rem',
      color: theme.primary,
      fontWeight: '700',
      marginBottom: '16px'
    },
    productDescription: {
      color: theme.textLight,
      lineHeight: '1.6',
      fontSize: '0.95rem'
    },
    servicesSection: {
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
      padding: '100px 24px',
      position: 'relative'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    serviceCard: {
      background: 'rgba(255,255,255,0.9)',
      padding: '40px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      border: `1px solid ${theme.cardBorder}`,
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceIcon: {
      fontSize: '3.5rem',
      marginBottom: '24px',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
    },
    footer: {
      background: theme.heroBackground,
      color: 'white',
      padding: '80px 24px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '48px',
      marginBottom: '48px'
    },
    footerSection: {
      textAlign: 'left'
    },
    footerTitle: {
      fontSize: '1.4rem',
      marginBottom: '24px',
      color: 'white',
      fontWeight: '600'
    },
    footerText: {
      opacity: 0.9,
      lineHeight: '1.7',
      fontSize: '0.95rem'
    },
    paymentMethods: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '16px'
    },
    paymentBadge: {
      background: 'rgba(255,255,255,0.15)',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    loadingContent: {
      textAlign: 'center',
      color: 'white'
    },
    loadingText: {
      fontSize: '2rem',
      marginBottom: '30px',
      fontWeight: '300'
    },
    loadingSpinner: {
      width: '60px',
      height: '60px',
      border: '6px solid rgba(255,255,255,0.3)',
      borderTop: '6px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto'
    }
  };

  const downloadWebsite = () => {
    const htmlContent = generateHTMLContent();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${businessData.businessName || 'website'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateHTMLContent = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessData.businessName || 'My Business'}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; 
            line-height: 1.6;
            color: #1E293B;
        }
        .header { 
            background: ${theme.heroBackground}; 
            color: white; 
            padding: 100px 0; 
            text-align: center; 
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.1);
            z-index: 1;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 24px; 
            position: relative;
            z-index: 2;
        }
        .business-name { 
            font-size: clamp(2.5rem, 5vw, 4rem); 
            margin-bottom: 24px; 
            font-weight: 700;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
            line-height: 1.2;
        }
        .industry-icon {
            font-size: clamp(3rem, 6vw, 5rem);
            margin-bottom: 20px;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }
        .tagline { 
            font-size: clamp(1.1rem, 2vw, 1.4rem); 
            opacity: 0.95; 
            margin-bottom: 40px; 
            font-weight: 300;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        .section { 
            padding: 100px 0; 
        }
        .section-title { 
            font-size: clamp(2rem, 4vw, 3rem); 
            text-align: center; 
            margin-bottom: 60px; 
            color: ${theme.textDark}; 
            font-weight: 700;
            position: relative;
        }
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
            border-radius: 2px;
        }
        .about-section {
            background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
            padding: 100px 24px;
        }
        .about-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .about-card {
            background: rgba(255,255,255,0.9);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border: 1px solid ${theme.cardBorder};
        }
        .card-title {
            color: ${theme.primary};
            font-size: 1.5rem;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .products-section {
            background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
            padding: 100px 24px;
        }
        .products-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
            gap: 32px; 
            max-width: 1200px;
            margin: 0 auto;
        }
        .product-card { 
            background: white; 
            border-radius: 24px; 
            overflow: hidden; 
            box-shadow: 0 25px 50px rgba(0,0,0,0.1); 
            border: 1px solid rgba(255,255,255,0.8);
            transition: transform 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-8px);
        }
        .product-image {
            width: 100%;
            height: 240px;
            object-fit: cover;
            background: linear-gradient(135deg, ${theme.cardBg}, ${theme.cardBorder});
        }
        .product-info { 
            padding: 32px; 
        }
        .product-name { 
            font-size: 1.4rem; 
            color: ${theme.textDark}; 
            margin-bottom: 12px; 
            font-weight: 600;
            line-height: 1.3;
        }
        .product-price { 
            font-size: 1.6rem; 
            color: ${theme.primary}; 
            font-weight: 700; 
            margin-bottom: 16px; 
        }
        .product-description {
            color: ${theme.textLight};
            line-height: 1.6;
            font-size: 0.95rem;
        }
        .footer { 
            background: ${theme.heroBackground}; 
            color: white; 
            padding: 80px 24px 40px; 
            text-align: center; 
            position: relative;
            overflow: hidden;
        }
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 48px;
            margin-bottom: 48px;
        }
        .footer-section {
            text-align: left;
        }
        .footer-title {
            font-size: 1.4rem;
            margin-bottom: 24px;
            font-weight: 600;
        }
        .footer-text {
            opacity: 0.9;
            line-height: 1.7;
            font-size: 0.95rem;
        }
        @media (max-width: 768px) {
            .about-content {
                grid-template-columns: 1fr;
            }
            .products-grid {
                grid-template-columns: 1fr;
            }
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .footer-section {
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="industry-icon">${getIndustryIcon(selectedIndustry)}</div>
            <h1 class="business-name">${businessData.businessName || 'My Business'}</h1>
            <p class="tagline">${businessData.businessDescription || 'Welcome to our business'}</p>
        </div>
    </header>

    <section class="about-section">
    <h2 class="section-title">About ${businessData.businessName || 'Our Business'}</h2>
    <div class="about-content">
        <div class="about-card">
            <h3 class="card-title">Our Story</h3>
            <p>${businessData.businessDescription || 'We are committed to providing excellent products and services to our customers.'}</p>
            ${businessData.establishedYear ? `<p style="margin-top: 16px; color: ${theme.primary}; font-weight: 500;">Established: ${businessData.establishedYear}</p>` : ''}
        </div>
        <div class="about-card">
            <h3 class="card-title">Our Services</h3>
            <p>${businessData.servicesOffered || 'We offer a wide range of quality products and services.'}</p>
            ${businessData.targetAudience ? `<p style="margin-top: 16px; color: ${theme.primary}; font-weight: 500;">Target Audience: ${businessData.targetAudience}</p>` : ''}
        </div>
        <div class="about-card">
            <h3 class="card-title">Target Audience</h3>
            <p>${businessData.targetAudience || 'Our offerings are tailored to meet the needs of our valued customers.'}</p>
        </div>
    </div>
</section>


    <section class="products-section">
        <div class="container">
            <h2 class="section-title">Our Products</h2>
            <div class="products-grid">
                ${productData.products?.map(product => `
                    <div class="product-card">
                        ${product.productImage ? `<img src="${product.productImage}" alt="${product.productName}" class="product-image">` : ''}
                        <div class="product-info">
                            <h3 class="product-name">${product.productName}</h3>
                            ${product.productPrice ? `<div class="product-price">₹${product.productPrice}</div>` : ''}
                            ${product.productDescription ? `<p class="product-description">${product.productDescription}</p>` : ''}
                        </div>
                    </div>
                `).join('') || '<p>No products available</p>'}
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="footer-title">${businessData.businessName || 'My Business'}</h3>
                <p class="footer-text">${businessData.businessDescription || 'Your trusted business partner'}</p>
            </div>
            <div class="footer-section">
                <h3 class="footer-title">Contact Information</h3>
                <p class="footer-text">📧 ${businessData.email || 'contact@business.com'}</p>
                <p class="footer-text">📞 ${businessData.phone || 'Phone not provided'}</p>
                ${businessData.whatsapp ? `<p class="footer-text">📱 ${businessData.whatsapp}</p>` : ''}
            </div>
            <div class="footer-section">
                <h3 class="footer-title">Location</h3>
                <p class="footer-text">${businessData.address || 'Address not provided'}</p>
                ${businessData.website ? `<p class="footer-text">🌐 ${businessData.website}</p>` : ''}
            </div>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 24px; margin-top: 24px;">
  ${businessData.establishedYear
    ? `<p style="opacity: 0.7;">© ${businessData.establishedYear} ${businessData.businessName || 'My Business'}. All rights reserved. | Generated by WebsiteBoss.com</p>`
    : `<p style="opacity: 0.7;">© 2025 ${businessData.businessName || 'My Business'}. All rights reserved. | Generated by WebsiteBoss.com</p>`}
</div>

    </footer>
</body>
</html>`;
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.loadingText}>Loading your website...</div>
          <div style={styles.loadingSpinner}></div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Preview Controls */}
      <div style={styles.previewControls}>
        <div>
          <strong>Preview: {businessData.businessName || 'Website'}</strong>
          <span style={{ marginLeft: '20px', opacity: 0.7 }}>
            Industry: {selectedIndustry} | Theme: {businessData.colorTheme}
          </span>
        </div>
        <div>
          <button style={styles.controlButton} onClick={() => navigate('/website-generator')}>
            ← Back to Generator
          </button>
          <button style={styles.controlButton} onClick={downloadWebsite}>
            💾 Download Website
          </button>
          <button style={{ ...styles.controlButton, background: 'linear-gradient(135deg, #10B981, #059669)' }} onClick={() => alert('Deployment feature coming soon!')}>
            🚀 Deploy Live
          </button>
        </div>
      </div>

      {/* Generated Website */}
      <div style={styles.websiteContainer}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.headerOverlay}></div>
          <div style={styles.floatingShapes}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              animation: 'float 6s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              width: '150px',
              height: '150px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '30px',
              transform: 'rotate(45deg)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}></div>
          </div>
          <div style={styles.headerContent}>
            <div style={styles.industryIcon}>{getIndustryIcon(selectedIndustry)}</div>
            <h1 style={styles.businessName}>{businessData.businessName || 'My Business'}</h1>
            <p style={styles.tagline}>{businessData.businessDescription || 'Welcome to our business'}</p>
            
            <div style={styles.contactInfo}>
              {businessData.email && (
                <div style={styles.contactItem}>
                  <span>📧</span>
                  <span>{businessData.email}</span>
                </div>
              )}
              {businessData.phone && (
                <div style={styles.contactItem}>
                  <span>📞</span>
                  <span>{businessData.phone}</span>
                </div>
              )}
              {businessData.whatsapp && (
                <div style={styles.contactItem}>
                  <span>📱</span>
                  <span>{businessData.whatsapp}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* About Section */}
<section style={styles.aboutSection}>
  <h2 style={{ ...styles.sectionTitle, position: 'relative' }}>
    About {businessData.businessName || 'Our Business'}
    <div style={styles.sectionTitleUnderline}></div>
  </h2>
  <div style={styles.aboutContent}>
    {/* Our Story */}
    <div style={styles.aboutCard}>
      <h3 style={styles.cardTitle}>Our Story</h3>
      <p style={styles.cardText}>
        {businessData.businessDescription || 'We are committed to providing excellent products and services to our customers.'}
      </p>
      {businessData.establishedYear && (
        <p style={{ marginTop: '16px', color: theme.primary, fontWeight: '500' }}>
          <strong>Established: {businessData.establishedYear}</strong>
        </p>
      )}
    </div>

    {/* Our Services */}
    <div style={styles.aboutCard}>
      <h3 style={styles.cardTitle}>Our Services</h3>
      <p style={styles.cardText}>
        {businessData.servicesOffered || 'We offer a wide range of quality products and services.'}
      </p>
    </div>

    {/* Target Audience (New Section) */}
    <div style={styles.aboutCard}>
  <h3 style={styles.cardTitle}>Target Audience</h3>
  <p style={styles.cardText}>
    {businessData.targetAudience && businessData.targetAudience.trim() !== ''
      ? businessData.targetAudience
      : 'Our products are designed to meet the needs of a wide and diverse audience.'}
  </p>
</div>

  </div>


  
</section>


        {/* Products Section */}
        {productData.products && productData.products.length > 0 && (
          <section style={styles.productsSection}>
            <h2 style={{...styles.sectionTitle, position: 'relative'}}>
              Our Products
              <div style={styles.sectionTitleUnderline}></div>
            </h2>
            <div style={styles.productsGrid}>
              {productData.products.map((product, index) => (
                <div key={index} style={styles.productCard}>
                  {product.productImage && (
                    <img 
                      src={product.productImage} 
                      alt={product.productName}
                      style={styles.productImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div style={styles.productInfo}>
                    <h3 style={styles.productName}>{product.productName}</h3>
                    {product.productPrice && (
                      <div style={styles.productPrice}>
  ₹{Number(product.productPrice || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
</div>

                    )}
                    {product.productDescription && (
                      <p style={styles.productDescription}>{product.productDescription}</p>
                    )}
                    {product.productCategory && (
                      <p style={{ color: theme.primary, marginTop: '12px', fontSize: '0.9rem', fontWeight: '500' }}>
                        <strong>Category:</strong> {product.productCategory}
                      </p>
                    )}
                    {product.productSku && (
                      <p style={{ color: theme.textLight, fontSize: '0.8rem', marginTop: '8px' }}>
                        SKU: {product.productSku}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services Section */}
        <section style={styles.servicesSection}>
          <h2 style={{...styles.sectionTitle, position: 'relative'}}>
            Our Services
            <div style={styles.sectionTitleUnderline}></div>
          </h2>
          <div style={styles.servicesGrid}>
            {productData.paymentMethods && productData.paymentMethods.length > 0 && (
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>💳</div>
                <h3 style={styles.cardTitle}>Payment Methods</h3>
                <div style={styles.paymentMethods}>
                  {productData.paymentMethods.map((method, index) => (
                    <span key={index} style={styles.paymentBadge}>
                      {method.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {productData.deliveryOptions && productData.deliveryOptions.length > 0 && (
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>🚚</div>
                <h3 style={styles.cardTitle}>Delivery Options</h3>
                <div style={styles.paymentMethods}>
                  {productData.deliveryOptions.map((option, index) => (
                    <span key={index} style={styles.paymentBadge}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {productData.categories && (
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>📂</div>
                <h3 style={styles.cardTitle}>Product Categories</h3>
                <p style={styles.footerText}>{productData.categories}</p>
              </div>
            )}

            {productData.deliveryAreas && (
              <div style={styles.serviceCard}>
                <div style={styles.serviceIcon}>🗺️</div>
                <h3 style={styles.cardTitle}>Delivery Areas</h3>
                <p style={styles.footerText}>{productData.deliveryAreas}</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>{businessData.businessName || 'My Business'}</h3>
              <p style={styles.footerText}>{businessData.businessDescription || 'Your trusted business partner'}</p>
            </div>
            
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Contact Information</h3>
              <p style={styles.footerText}>📧 {businessData.email || 'contact@business.com'}</p>
              <p style={styles.footerText}>📞 {businessData.phone || 'Phone not provided'}</p>
              {businessData.whatsapp && <p style={styles.footerText}>📱 {businessData.whatsapp}</p>}
            </div>
            
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Location</h3>
              <p style={styles.footerText}>{businessData.address || 'Address not provided'}</p>
              {businessData.website && <p style={styles.footerText}>🌐 {businessData.website}</p>}
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px', marginTop: '24px' }}>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
              © 2024 {businessData.businessName || 'My Business'}. All rights reserved. | 
              Generated by WebsiteBoss.com
            </p>
          </div>
        </footer>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
          
          .product-card:hover .product-image {
            transform: scale(1.05);
          }
          
          .about-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.12);
          }
          
          .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.12);
          }
          
          .contact-item:hover {
            background: rgba(255,255,255,0.25);
            transform: translateY(-2px);
          }
          
          .control-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          
          @media (max-width: 768px) {
            .about-content {
              grid-template-columns: 1fr;
            }
            .products-grid {
              grid-template-columns: 1fr;
            }
            .services-grid {
              grid-template-columns: 1fr;
            }
            .footer-content {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .footer-section {
              text-align: center;
            }
            .contact-info {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PreviewPage;
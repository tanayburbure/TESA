import React, { useState, useEffect } from 'react';

const TryNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Directors', href: '/directors' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    // Base Styles
    cinematicHeader: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
      transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
    },

    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },

    // Logo Styles
    logo: {
      opacity: isLoaded ? 1 : 0,
      animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.3s forwards' : 'none',
    },

    logoText: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '2px',
      position: 'relative',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: isLoaded ? '100%' : '0',
        height: '2px',
        background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)',
        transition: 'width 1s ease-out 1s',
      }
    },

    // Desktop Menu
    desktopMenu: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '2rem',
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },

    menuItem: {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out',
    },

    menuLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '1px',
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },

    linkText: {
      display: 'block',
      transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
    },

    // Mobile Menu Toggle
    menuToggle: {
      display: 'none',
      flexDirection: 'column',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      width: '30px',
      height: '30px',
      justifyContent: 'space-between',
      '@media (max-width: 768px)': {
        display: 'flex',
      }
    },

    hamburgerLine: {
      width: '100%',
      height: '2px',
      background: '#fff',
      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
      transformOrigin: 'center',
    },

    hamburgerLineOpen1: {
      transform: 'rotate(45deg) translate(6px, 6px)',
    },

    hamburgerLineOpen2: {
      opacity: 0,
    },

    hamburgerLineOpen3: {
      transform: 'rotate(-45deg) translate(6px, -6px)',
    },

    // Mobile Menu Overlay
    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.98)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      clipPath: isOpen ? 'circle(150% at top right)' : 'circle(0% at top right)',
    },

    mobileMenu: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'center',
    },

    mobileMenuItem: {
      margin: '2rem 0',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    },

    mobileMenuLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '2px',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
    },

    // Responsive handling
    responsiveHide: {
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },

    responsiveShow: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'flex',
      }
    }
  };

  // CSS animations as a style tag
  const cssAnimations = `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .logo-text::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${isLoaded ? '100%' : '0'};
      height: 2px;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
      transition: width 1s ease-out 1s;
    }

    .menu-link:hover .link-text {
      transform: translateY(-2px);
    }

    .menu-link:hover::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .mobile-menu-link:hover {
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    body {
      padding-top: 80px;
    }

    @media (max-width: 768px) {
      .desktop-menu {
        display: none !important;
      }
      
      .menu-toggle {
        display: flex !important;
      }
      
      .navbar {
        padding: 1rem !important;
      }
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <header style={styles.cinematicHeader}>
        <nav style={styles.navbar}>
          {/* Logo */}
          <div style={styles.logo}>
            <span style={styles.logoText} className="logo-text">O POSITIVE</span>
          </div>

          {/* Desktop Menu */}
          <ul style={styles.desktopMenu} className="desktop-menu">
            {menuItems.map((item, index) => (
              <li 
                key={item.name} 
                style={{
                  ...styles.menuItem,
                  transitionDelay: `${0.5 + index * 0.1}s`
                }}
              >
                <a href={item.href} style={styles.menuLink} className="menu-link">
                  <span style={styles.linkText} className="link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            style={styles.menuToggle}
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span 
              style={{
                ...styles.hamburgerLine,
                ...(isOpen ? styles.hamburgerLineOpen1 : {})
              }}
            ></span>
            <span 
              style={{
                ...styles.hamburgerLine,
                ...(isOpen ? styles.hamburgerLineOpen2 : {})
              }}
            ></span>
            <span 
              style={{
                ...styles.hamburgerLine,
                ...(isOpen ? styles.hamburgerLineOpen3 : {})
              }}
            ></span>
          </button>

          {/* Mobile Menu Overlay */}
          <div style={styles.mobileMenuOverlay}>
            <ul style={styles.mobileMenu}>
              {menuItems.map((item, index) => (
                <li 
                  key={item.name} 
                  style={{
                    ...styles.mobileMenuItem,
                    transitionDelay: `${index * 0.1 + 0.2}s`
                  }}
                >
                  <a 
                    href={item.href} 
                    style={styles.mobileMenuLink}
                    className="mobile-menu-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TryNew;

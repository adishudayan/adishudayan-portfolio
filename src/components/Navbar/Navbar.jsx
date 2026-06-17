import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Smooth appearance on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Handle scroll to add background blur/color
  useEffect(() => {
    // Initialise from current scroll position so pinning/Lenis setup
    // doesn't leave the state stale on first render.
    setScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const darkHeroRoutes = ['/about', '/contact', '/work'];
  const isDarkHero =
    darkHeroRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/case-study/');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    // Force SPA navigation; ScrollToTop component handles scroll/refresh
    e.preventDefault();
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.navbarOpen : ''} ${isDarkHero && !scrolled ? styles.darkHero : ''}`}
      >
        <div className={styles.leftSection}>
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={`${styles.logo} ${styles.logoVisible}`}
          >
            ADISH UDAYAN
          </Link>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
            >
              <span className={styles.linkText} data-text={link.name}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.rightSection}>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`${styles.mobileLink} ${location.pathname === link.path ? styles.mobileActive : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

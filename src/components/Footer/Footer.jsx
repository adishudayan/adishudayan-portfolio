import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef(null);
  const ctaTextRef = useRef(null);

  useEffect(() => {
    // Parallax/Reveal for CTA
    gsap.fromTo(
      ctaTextRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      },
    );
  }, []);

  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    // ScrollToTop component handles scroll/trigger cleanup
  };

  return (
    <footer className={styles.footer} ref={containerRef}>
      <div className={styles.container}>
        {/* Large CTA Section */}
        <div className={styles.ctaSection}>
          <Link
            to="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className={styles.ctaLink}
          >
            <div style={{ overflow: 'hidden' }}>
              <h2 className={styles.ctaText} ref={ctaTextRef}>
                LET'S WORK TOGETHER
              </h2>
            </div>
          </Link>

          <div className={styles.secondaryCTA}>
            <Link
              to="/work"
              onClick={(e) => handleNavClick(e, '/work')}
              className={styles.smallCtaLink}
            >
              I'd rather see more projects
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className={styles.footerLinksGrid}>
          {/* Main Nav */}
          <div className={styles.linkColumn}>
            <Link
              to="/work"
              onClick={(e) => handleNavClick(e, '/work')}
              className={styles.footerLink}
            >
              WORK
            </Link>
            <Link
              to="/about"
              onClick={(e) => handleNavClick(e, '/about')}
              className={styles.footerLink}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className={styles.footerLink}
            >
              CONTACT
            </Link>
          </div>

          {/* Social Nav */}
          <div className={styles.linkColumn}>
            <a
              href="https://linkedin.com/in/adishudayan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LINKEDIN
            </a>
          </div>

          {/* Contact */}
          <div className={styles.linkColumn}>
            <a
              href="mailto:adishudayan62@gmail.com"
              className={styles.footerLink}
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

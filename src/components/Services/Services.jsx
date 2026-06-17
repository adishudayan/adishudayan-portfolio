import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const services = [
  { id: '01', name: 'Product Design', path: '/services/web-experience', image: '/service-product-design.jpg' },
  { id: '02', name: 'UX Strategy', path: '/services/digital-product-services', image: '/service-ux-strategy.jpg' },
  { id: '03', name: 'Design Systems', path: '/services/branding', image: '/service-design-systems.jpg' },
  { id: '04', name: 'AI-Enhanced Solutions', path: '/services/social-campaigns', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop' }
];

export default function Services() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const dotRef = useRef(null);
  const motionPathRef = useRef(null);
  const hoverImageRef = useRef(null);
  const [activeImage, setActiveImage] = useState(services[0].image);

  const xMove = useRef(null);
  const yMove = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (hoverImageRef.current) {
        gsap.set(hoverImageRef.current, { xPercent: -50, yPercent: -50 });
        xMove.current = gsap.quickTo(hoverImageRef.current, "left", { duration: 0.4, ease: "power3" });
        yMove.current = gsap.quickTo(hoverImageRef.current, "top", { duration: 0.4, ease: "power3" });
      }

      // Diamond Drawing & Text Reveal
      const paths = containerRef.current.querySelectorAll(`.${styles.diamondStroke}`);
      const labels = containerRef.current.querySelectorAll(`.${styles.diamondLabel}, .${styles.phaseLabel}, .${styles.dottedLine}`);

      gsap.fromTo(paths,
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );

      // Dot flowing around the double diamond
      if (dotRef.current && motionPathRef.current) {
        gsap.to(dotRef.current, {
          motionPath: {
            path: motionPathRef.current,
            align: motionPathRef.current,
            alignOrigin: [0.5, 0.5],
          },
          duration: 12, // Smooth, slow flow
          ease: 'none',
          repeat: -1,
          // Start playing the dot animation when the diamond starts drawing
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        });
      }

      gsap.fromTo(labels,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );

      // List items reveal
      gsap.fromTo(itemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 40%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (image) => {
    setActiveImage(image);
    gsap.to(hoverImageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out'
    });
  };

  const handleMouseMove = (e) => {
    if (xMove.current && yMove.current) {
      xMove.current(e.clientX);
      yMove.current(e.clientY);
    }
  };

  const handleMouseLeave = () => {
    gsap.to(hoverImageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out'
    });
  };

  return (
    <section className={styles.servicesSection} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.processVisualContainer}>
          <div className={styles.visualWrapper}>
            <svg viewBox="0 0 1000 450" className={styles.diamondSvg}>
              {/* Vertical dotted lines */}
              <line x1="250" y1="50" x2="250" y2="350" className={styles.dottedLine} />
              <line x1="750" y1="50" x2="750" y2="350" className={styles.dottedLine} />

              {/* Horizontal baseline dotted line */}
              <line x1="0" y1="380" x2="1000" y2="380" className={styles.dottedLine} />

              {/* Invisible continuous path for the dot to trace both diamonds */}
              <path
                ref={motionPathRef}
                d="M 0 200 L 250 50 L 500 200 L 750 50 L 1000 200 L 750 350 L 500 200 L 250 350 Z"
                fill="none"
                stroke="none"
              />

              {/* Diamond 1 */}
              <path d="M 0 200 L 250 50 L 500 200 L 250 350 Z" className={styles.diamondStroke} />
              {/* Diamond 2 */}
              <path d="M 500 200 L 750 50 L 1000 200 L 750 350 Z" className={styles.diamondStroke} />

              {/* Dots at intersection/vertices */}
              <circle cx="250" cy="380" r="3" fill="currentColor" />
              <circle cx="500" cy="200" r="3" fill="currentColor" />
              <circle cx="500" cy="380" r="3" fill="currentColor" />
              <circle cx="750" cy="380" r="3" fill="currentColor" />

              {/* The animating dot tracking the border */}
              <circle ref={dotRef} r="6" fill="var(--text-primary)" />

              {/* Phase Labels (Main) */}
              <text x="160" y="210" className={styles.diamondLabel} style={{ textDecoration: 'underline' }}>Discover</text>
              <text x="340" y="210" className={styles.diamondLabel} style={{ textDecoration: 'underline' }}>Define</text>
              <text x="660" y="210" className={styles.diamondLabel} style={{ textDecoration: 'underline' }}>Develop</text>
              <text x="840" y="210" className={styles.diamondLabel} style={{ textDecoration: 'underline' }}>Deliver</text>

              {/* Sub Phase Labels (Below) */}
              <text x="175" y="420" className={styles.phaseLabel}>Research & insights</text>
              <text x="350" y="420" className={styles.phaseLabel}>Problem framing</text>
              <text x="650" y="420" className={styles.phaseLabel}>Ideate & prototype</text>
              <text x="825" y="420" className={styles.phaseLabel}>Test & implement</text>
            </svg>
          </div>

          <div className={styles.subTextContainer}>
            <p className={styles.subText}>
              Good design starts with asking the right questions, not just finding answers.
              I focus on understanding deeply to create thoughtful and impactful solutions.
            </p>
          </div>
        </div>

        <div className={styles.servicesList} onMouseLeave={handleMouseLeave}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceItem}
              ref={el => itemsRef.current[index] = el}
              onMouseEnter={() => handleMouseEnter(service.image)}
              onMouseMove={handleMouseMove}
            >
              <Link to={service.path} className={styles.serviceLink}>
                <span className={styles.serviceId}>[{service.id}]</span>
                <h3 className={styles.serviceTitle}>{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hoverImageContainer} ref={hoverImageRef}>
        <img src={activeImage} alt="Service preview" />
      </div>
    </section>
  );
}

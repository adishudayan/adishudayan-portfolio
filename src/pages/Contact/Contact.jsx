import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Contact.module.css';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.eyebrow}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(`.${styles.heading}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.35 }
      );
      gsap.fromTo(`.${styles.intro}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo(`.${styles.linkItem}`,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.85, stagger: 0.12 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.contact} ref={containerRef}>
      <div className={styles.inner}>

        <div className={styles.top}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.heading}>Let's talk.</h1>
        </div>

        <div className={styles.bottom}>
          <p className={styles.intro}>
            I'm looking for senior product design roles at companies building complex,
            data-driven products: B2B SaaS, internal tools, or anything that makes
            hard systems easier to use. If you're working on something that needs a
            designer who can navigate ambiguity and close the gap between strategy
            and interface, I'd be glad to talk.
          </p>

          <div className={styles.links}>
            <a
              href="mailto:adishudayan62@gmail.com"
              className={styles.linkItem}
            >
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>
                adishudayan62@gmail.com
                <span className={styles.arrow}>↗</span>
              </span>
            </a>

            <a
              href="https://linkedin.com/in/adishudayan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkValue}>
                linkedin.com/in/adishudayan
                <span className={styles.arrow}>↗</span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

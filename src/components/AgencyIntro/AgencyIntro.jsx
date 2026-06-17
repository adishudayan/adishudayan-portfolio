import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import styles from './AgencyIntro.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AgencyIntro() {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const linkRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text lines on scroll
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Reveal link (use ref to avoid undefined CSS-module selector)
      if (linkRef.current) {
        gsap.fromTo(
          linkRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textLines = [
    'Design is about clarity, purpose, and impact.',
    'It’s not just how things look, but how they work,',
    'feel, and connect with people.',
  ];

  const subTextLines = [
    'Bringing clarity to complexity through thoughtful design',
    'aligning user needs with purposeful outcomes.',
  ];

  return (
    <section className={styles.agencyIntro} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.mainTextContainer}>
          {textLines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h2
                className={styles.mainTextLine}
                ref={(el) => {
                  if (el && !textRef.current.includes(el)) {
                    textRef.current.push(el);
                  }
                }}
              >
                {line}
              </h2>
            </div>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.subTextContainer}>
            {subTextLines.map((line, i) => (
              <p key={i} className={styles.subTextLine}>
                {line}
              </p>
            ))}
          </div>

          <div className={styles.agencyLink} ref={linkRef}>
            <Link to="/work" className={styles.link}>
              Explore my work <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef([]);
  const wordmarkRef = useRef(null);
  const reelRef = useRef(null);
  const reelImageContainerRef = useRef(null);
  const heroContentRef = useRef(null);
  const wordmarkContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Refined Cinematic Expansion Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        reelImageContainerRef.current,
        {
          width: '100vw',
          height: '100vh',
          x: () => {
            if (!reelRef.current) return 0;
            const rect = reelRef.current.getBoundingClientRect();
            return -rect.left;
          },
          y: () => {
            if (!reelRef.current) return 0;
            const rect = reelRef.current.getBoundingClientRect();
            return -rect.top;
          },
          borderRadius: '0px',
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0,
      );

      tl.to(
        [
          heroContentRef.current,
          wordmarkContainerRef.current,
          `.${styles.honorsBadge}`,
          `.${styles.reelMeta}`,
        ],
        {
          opacity: 0,
          y: -30,
          pointerEvents: 'none',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.inOut',
        },
        0,
      );

      tl.to(
        `.${styles.reelVideo}`,
        {
          scale: 1.1,
          duration: 1.5,
          ease: 'none',
        },
        0,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return (
      <div style={{ overflow: 'hidden' }}>
        <h1
          className={styles.heroText}
          ref={(el) => {
            if (el && !textRef.current.includes(el)) {
              textRef.current.push(el);
            }
          }}
        >
          {text}
        </h1>
      </div>
    );
  };

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent} ref={heroContentRef}>
            {splitText('Crafting meaningful')}
            {splitText('digital experiences')}
            {splitText('with clarity and purpose.')}
          </div>

          <div className={styles.reelSection} ref={reelRef}>
            <div
              className={styles.reelImageContainer}
              ref={reelImageContainerRef}
            >
              <video
                src="/Portfolio Trailer.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.reelVideo}
              />
            </div>
            <div className={styles.reelMeta}>
              <span>Immersive Design</span>
              <span className={styles.reelTime}>[0:40sec]</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection} ref={wordmarkContainerRef}>
          <div
            className={styles.wordmarkContainer}
            style={{ overflow: 'hidden' }}
          >
            <h1 className={styles.wordmark} ref={wordmarkRef}>
              ADISH
            </h1>
          </div>

          <div className={styles.dummyParagraph}>
            Product designer focused on creating intuitive, user-centered
            digital experiences.
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Cultura.module.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    date: 'Apr 2022 - Present',
    company: 'AyataCommerce',
    position: 'Product Designer',
    logo: '/ayata-logo.png'
  },
  {
    id: 2,
    date: 'Nov 2018 - Apr 2022',
    company: 'Binary Fountain™',
    position: 'Senior Quality Analyst',
    logo: '/binaryfountain-logo.png'
  },
  {
    id: 3,
    date: 'Jan 2016 - Mar 2017',
    company: 'Twixt IT Solutions Pvt Ltd',
    position: 'Junior UI Developer',
    logo: '/twixt-logo.png'
  },
];

export default function Cultura() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Info section reveal
      gsap.fromTo(`.${styles.introSection}`,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );

      // List items reveal
      gsap.fromTo(itemsRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.culturaSection} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.introSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.introText}>
            A timeline of my professional journey, highlighting the companies I've collaborated with and the roles I've played in creating impactful digital experiences.
          </p>
        </div>

        <div className={styles.articlesList}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={styles.articleItem}
              ref={el => itemsRef.current[index] = el}
            >
              <div className={styles.articleLink}>
                <div className={styles.articleMeta}>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <div className={styles.middleSection}>
                  <h3 className={styles.articleTitle}>{exp.company}</h3>
                  <span className={styles.position}>{exp.position}</span>
                </div>
                <div className={styles.logoSection}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className={styles.logo} />
                  ) : (
                    <div className={styles.logoPlaceholder}></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

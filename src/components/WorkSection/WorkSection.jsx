import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WorkSection.module.css';
import { projects } from '../../data/projects';


gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      // Cards reveal
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const imageContainer = card.querySelector(`.${styles.imageWrapper}`);
        const image = card.querySelector(`.${styles.projectImage}`);
        const textInfo = card.querySelector(`.${styles.projectInfo}`);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        });

        // Clip path reveal for image container
        timeline.fromTo(imageContainer,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut' }
        )
          // Subtle zoom out on the image itself
          .fromTo(image,
            { scale: 1.2 },
            { scale: 1, duration: 1.2, ease: 'power3.inOut' },
            '<'
          )
          // Fade up text info
          .fromTo(textInfo,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.6'
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.workSection} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle} ref={titleRef}>Selected Work</h2>
          <Link to="/work" className={styles.viewAll}>View All</Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Link
              to={project.slug ? `/case-study/${project.slug}` : `/work/${project.id}`}
              key={project.id}
              className={styles.projectCard}
              ref={el => cardsRef.current[index] = el}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.overlay}>
                  <span className={styles.exploreText}>Explore</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <div>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

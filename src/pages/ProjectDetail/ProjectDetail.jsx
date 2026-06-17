import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(`.${styles.title}`, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
      );

      gsap.fromTo(`.${styles.category}`, 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(`.${styles.heroImage}`,
        { scale: 1.1 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      );

      // Section Reveals
      const reveals = document.querySelectorAll(`.${styles.narrativeSection}, .${styles.gallery} img`);
      reveals.forEach(el => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project, id]);

  if (!project) {
    return <div className={styles.notFound}>Project not found</div>;
  }

  const nextProject = projects.find(p => p.id === (project.id % projects.length) + 1) || projects[0];

  return (
    <div className={styles.projectDetail} ref={containerRef}>
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroImageContainer}>
          <img src={project.image} alt={project.title} className={styles.heroImage} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.description}>
            {project.description}
          </div>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.details.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>{project.details.client}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Services</span>
              <div className={styles.servicesList}>
                {project.details.services.map(service => (
                  <span key={service} className={styles.metaValue}>{service}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.challenge && (
        <section className={styles.narrativeSection}>
          <div className={styles.narrativeGrid}>
            <h2 className={styles.narrativeTitle}>The Challenge</h2>
            <div className={styles.narrativeContent}>{project.challenge}</div>
          </div>
        </section>
      )}

      <section className={styles.gallery}>
        {project.analyticsImage && (
          <img src={project.analyticsImage} alt="Analytics" className={styles.fullWidthImage} />
        )}
        <div className={styles.splitGallery}>
           {project.mobileImage && (
             <img src={project.mobileImage} alt="Mobile View" className={styles.splitImage} />
           )}
           <img src={project.image} alt="Process" className={styles.splitImage} />
        </div>
      </section>

      {project.solution && (
        <section className={styles.narrativeSection}>
          <div className={styles.narrativeGrid}>
            <h2 className={styles.narrativeTitle}>The Solution</h2>
            <div className={styles.narrativeContent}>{project.solution}</div>
          </div>
        </section>
      )}

      {project.sections && project.sections.map((section, index) => (
        <section key={index} className={styles.narrativeSection}>
          <div className={styles.narrativeGrid}>
            <h2 className={styles.narrativeTitle}>{section.title}</h2>
            <div className={styles.narrativeContent}>{section.content}</div>
          </div>
        </section>
      ))}

      <Link to={`/work/${nextProject.id}`} className={styles.nextProject}>
        <span className={styles.nextLabel}>Next Project</span>
        <h2 className={styles.nextTitle}>{nextProject.title}</h2>
      </Link>
    </div>
  );
}

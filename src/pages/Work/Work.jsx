import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    slug: 'ayataone',
    title: 'AyataOne',
    year: '2026',
    image: '/ayataone-thumbnail.webp',
    desktopImage: '/ayataone-thumbnail.webp',
    mobileImage: '/ayataone-thumbnail-mobile.png',
    description:
      'Replaced Jira, spreadsheets, and monitoring tools with one operations command centre.',
    tags: ['Enterprise UX', 'Dashboard Design', 'Information Architecture'],
  },
  {
    slug: 'invotools',
    title: 'InvoTools',
    year: '2023–2024',
    image: '/invotools-thumbnail.jpg',
    desktopImage: '/invotools-thumbnail.jpg',
    mobileImage: '/invotools-thumbnail-mobile.webp',
    description:
      'Built a greenfield B2B SaaS for enterprise retail brands to manage digital invoices.',
    tags: ['B2B SaaS', 'Enterprise UX', 'Design Systems'],
  },
  {
    slug: 'dateryx',
    title: 'Dateryx',
    year: '2026',
    image: '/dateryx-screen1.png',
    description:
      'Founded and shipped a SaaS that turns spreadsheets into instant dashboards and KPIs.',
    tags: ['Founder Project', 'Data Visualisation', 'AI Product Design'],
  },
  {
    slug: 'voice-commerce',
    title: 'Voice Commerce CUX',
    year: '2025',
    image: '/conversational-ux-thumnail',
    description:
      'Designed a hybrid voice and visual model for completing eCommerce tasks without a screen.',
    tags: ['Conversational UX', 'R&D Concept', 'eCommerce UX'],
  },
];

export default function Work() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro entrance
      gsap.fromTo(
        `.${styles.introEyebrow}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 },
      );
      gsap.fromTo(
        `.${styles.introHeading}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.35 },
      );
      gsap.fromTo(
        `.${styles.introPara}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.6 },
      );

      // Card reveals
      gsap.utils.toArray(`.${styles.card}`).forEach((card, i) => {
        const img = card.querySelector(`.${styles.cardImageWrapper}`);
        const info = card.querySelector(`.${styles.cardInfo}`);

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });

        tl.fromTo(
          img,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut' },
        )
          .fromTo(
            img.querySelector('img') || img,
            { scale: 1.12 },
            { scale: 1, duration: 1.1, ease: 'power3.inOut' },
            '<',
          )
          .fromTo(
            info,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.5',
          );
      });
    }, containerRef);

    const id = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      clearTimeout(id);
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.work} ref={containerRef}>
      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <span className={styles.introEyebrow}>Work</span>
          <h1 className={styles.introHeading}>
            Selected
            <br />
            Case Studies
          </h1>
          <p className={styles.introPara}>
            Most of the work here starts from the same place: systems that have
            grown too complex for the people who depend on them. I design the
            layer that brings clarity back — operational dashboards, SaaS
            platforms, and interaction models for contexts where conventional UI
            isn't enough.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {workItems.map((item, i) => (
              <Link
                to={`/case-study/${item.slug}`}
                key={item.slug}
                className={styles.card}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.overlayLabel}>View case study</span>
                  </div>
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardTags}>
                      {item.tags.map((tag, j) => (
                        <span className={styles.tag} key={j}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.cardYear}>{item.year}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

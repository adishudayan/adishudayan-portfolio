import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);


const stats = [
  { number: '4+', label: 'Years of experience' },
  { number: '40%', label: 'Bounce rate reduction' },
  { number: '6s', label: 'Page load (down from 14s)' },
  { number: '1', label: 'Founder project live' },
];

const clients = [
  { name: 'AyataCommerce',  logo: '/client-logo-ayatacommerce.png'  },
  { name: 'Saint-Gobain',   logo: '/client-logo-saintgobain.png',   large: true },
  { name: 'InvoTools',      logo: '/client-logo-invotools.png',      large: true },
  { name: 'Aashal Foods',   logo: '/client-logo-aashalfoods.png'    },
  { name: 'Rupee Funds',    logo: '/client-logo-rupeefunds.png'     },
  { name: 'Ulla Johnson',   logo: '/client-logo-ullajohnson.png'    },
  { name: 'WealthCreatorz', logo: '/client-logo-wealthcreatorz.png' },
];

function ClientLogo({ name, logo, large }) {
  return (
    <div className={styles.clientLogo}>
      <img
        src={logo}
        alt={name}
        className={`${styles.logoImg} ${large ? styles.logoImgLarge : ''}`}
      />
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.heroEyebrow}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(`.${styles.heroName}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.35 }
      );
      gsap.fromTo(`.${styles.heroStatement}`,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.55 }
      );
      gsap.fromTo(`.${styles.heroMeta}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      gsap.utils.toArray(`.${styles.revealUp}`).forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });

      gsap.utils.toArray(`.${styles.capabilityRow}`).forEach((el, i) => {
        gsap.fromTo(el,
          { x: -20, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: i * 0.07,
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        );
      });

      gsap.utils.toArray(`.${styles.statItem}`).forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    }, containerRef);

    // Refresh after all triggers are registered so positions compute correctly
    const id = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      clearTimeout(id);
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.about} ref={containerRef}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Kerala, India</span>
          <h1 className={styles.heroName}>Adish Udayan</h1>
          <p className={styles.heroStatement}>
            Product designer with 4+ years turning complex<br />
            B2B systems into experiences people trust.
          </p>
          <div className={styles.heroMeta}>
            <span>Lead Product Designer</span>
            <span className={styles.metaDot} />
            <span>Founder, Dateryx</span>
            <span className={styles.metaDot} />
            <span>Masters in AI/ML</span>
            <span className={styles.metaDot} />
            <span>Available for work</span>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Bio ── */}
      <section className={styles.bioSection}>
        <div className={styles.sectionInner}>
          <div className={styles.bioGrid}>
            <div className={styles.portraitCol}>
              <div className={styles.portrait}>
                <img
                  src="/adish-portrait.jpg"
                  alt="Adish Udayan"
                  className={styles.portraitImg}
                />
              </div>
              <div className={styles.portraitCaption}>
                <span>Adish Udayan</span>
                <span>adishudayan62@gmail.com</span>
              </div>
            </div>

            <div className={styles.bioCol}>
              <p className={`${styles.bioLead} ${styles.revealUp}`}>
                I design the tools that enterprise teams depend on, and the products I believe the world needs.
              </p>
              <div className={styles.bioParagraphs}>
                <p className={styles.revealUp}>
                  At AyataCommerce, I lead design across enterprise dashboards, admin portals, and eCommerce experiences for global brands. My work has driven real outcomes: a 40% reduction in bounce rate on a client site, and a page load improvement from 14 seconds down to 6. The kind of changes that look like numbers but feel like respect for the user's time.
                </p>
                <p className={styles.revealUp}>
                  Outside my day role, I founded Dateryx, a spreadsheet analytics SaaS that turns Excel and CSV files into instant dashboards and KPIs, no setup required. It's a product built from a real frustration: too many teams drown in data they can't act on.
                </p>
                <p className={styles.revealUp}>
                  Before product design, I spent 3.5 years as a Senior Quality Analyst at Binary Fountain, a Press Ganey company, leading a team that analysed healthcare data at scale. That background gave me something most designers don't have: a genuine comfort with data, systems thinking, and the operational realities behind the UI.
                </p>
                <p className={styles.revealUp}>
                  I'm currently pursuing a Masters in AI/ML, and I can write front-end code. Both of these close the gap between design intent and shipped product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div className={styles.statItem} key={i}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className={styles.expertiseSection}>
        <div className={styles.sectionInner}>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseLabelCol}>
              <span className={`${styles.sectionLabel} ${styles.revealUp}`}>Expertise</span>
            </div>
            <div className={styles.expertiseContent}>
              <p className={`${styles.expertisePara} ${styles.revealUp}`}>
                My practice covers the full arc of product design — from early-stage information architecture through to shipped, production-ready interfaces. Most of my work sits at the harder end of the complexity curve: enterprise dashboards and data visualisation tools where making things legible is the actual design problem, and design systems that have to hold together across teams, products, and time. Building Dateryx put AI-assisted product design at the centre of my process, and earlier work in conversational UX and eCommerce UX has shaped how I approach interaction models beyond the conventional screen.
              </p>
              <ul className={styles.expertiseList}>
                {[
                  'Product & UX Design',
                  'Dashboard & Data Visualisation',
                  'Design Systems',
                  'AI-Assisted Product Design',
                  'Conversational UX',
                  'eCommerce UX',
                ].map((item, i) => (
                  <li className={`${styles.expertiseItem} ${styles.revealUp}`} key={i}>
                    <span className={styles.expertiseArrow}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients Carousel ── */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselHeader}>
          <span className={`${styles.sectionLabel} ${styles.revealUp}`}>Brands I've worked with</span>
        </div>
        <div className={styles.carouselTrack}>
          <div className={styles.carouselInner}>
            {[...clients, ...clients, ...clients].map((client, i) => (
              <ClientLogo key={i} name={client.name} logo={client.logo} large={client.large} />
            ))}
          </div>
        </div>
        <div className={`${styles.carouselTrack} ${styles.carouselReverse}`}>
          <div className={`${styles.carouselInner} ${styles.carouselInnerReverse}`}>
            {[...clients, ...clients, ...clients].map((client, i) => (
              <ClientLogo key={i} name={client.name} logo={client.logo} large={client.large} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className={styles.approachSection}>
        <div className={styles.sectionInner}>
          <div className={styles.approachGrid}>
            <h2 className={`${styles.approachLabel} ${styles.revealUp}`}>How I work</h2>
            <div className={styles.approachContent}>
              <p className={`${styles.approachText} ${styles.revealUp}`}>
                I don't separate design from strategy. The best interfaces come from understanding the business constraint, the user's mental model, and the technical reality all at once. I spend time with the problem before I open a frame.
              </p>
              <p className={`${styles.approachText} ${styles.revealUp}`}>
                Having worked in data analytics before design gives me an edge on dashboard and reporting products. I know what teams need to see, how they think about data, and where dashboards typically fail people.
              </p>
              <p className={`${styles.approachText} ${styles.revealUp}`}>
                I prototype early and often. Fidelity follows confidence, not time. And because I can write front-end code, I can close the gap between what gets designed and what actually ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <span className={`${styles.ctaEyebrow} ${styles.revealUp}`}>Let's work together</span>
          <a
            href="mailto:adishudayan62@gmail.com"
            className={`${styles.ctaEmail} ${styles.revealUp}`}
          >
            adishudayan62@gmail.com
            <span className={styles.ctaArrow}>↗</span>
          </a>
          <div className={`${styles.ctaLinks} ${styles.revealUp}`}>
            <Link to="/work" className={styles.ctaLink}>View work</Link>
            <Link to="/contact" className={styles.ctaLink}>Contact</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

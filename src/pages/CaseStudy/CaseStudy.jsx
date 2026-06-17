import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '../../data/caseStudiesData';
import styles from './CaseStudy.module.css';

gsap.registerPlugin(ScrollTrigger);

// ─── Shared Helpers ──────────────────────────────────────────────────────────

function nl2p(text) {
  if (!text) return null;
  return text.split('\n\n').map((para, i) => <p key={i}>{para}</p>);
}

function ImagePlaceholder({ label, ratio = 'wide' }) {
  return (
    <div className={`${styles.imagePlaceholder} ${styles[ratio]}`}>
      <svg className={styles.placeholderIcon} viewBox="0 0 32 32" fill="none">
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M1 22l8-7 6 6 5-5 11 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

// ─── Slider ──────────────────────────────────────────────────────────────────

function Slider({ slides, light }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const prev = () => go(active === 0 ? slides.length - 1 : active - 1);
  const next = () => go(active === slides.length - 1 ? 0 : active + 1);

  if (!slides || slides.length === 0) return null;

  return (
    <div className={`${styles.slider} ${light ? styles.sliderLight : ''}`}>
      <div className={styles.sliderTrack}>
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Screen ${i + 1}`}
            className={`${styles.sliderImg} ${i === active ? styles.sliderImgActive : ''}`}
          />
        ))}
      </div>

      <div className={styles.sliderControls}>
        <button
          className={styles.sliderBtn}
          onClick={prev}
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 4l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.sliderDots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.sliderDot} ${i === active ? styles.sliderDotActive : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className={styles.sliderBtn} onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Section Components ──────────────────────────────────────────────────────

function OverviewSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      <div className={styles.overviewGrid}>
        <div className={styles.overviewBody}>{nl2p(section.body)}</div>
        <div>
          <span className={styles.snapshotLabel}>Project Snapshot</span>
          <ul className={styles.snapshotList}>
            {section.snapshot?.map((item, i) => (
              <li key={i} className={styles.snapshotItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SingleSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.singleGrid}>
        <div className={styles.singleTitleWrap}>
          <h2 className={styles.singleTitle}>{section.title}</h2>
        </div>
        <div>
          <div className={styles.singleBody}>{nl2p(section.body)}</div>
          {section.placeholder && (
            <div className={styles.singlePlaceholder}>
              <ImagePlaceholder label={section.placeholder} ratio="wide" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProcessSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.processHeader}>
        <h2 className={styles.processTitle}>{section.title}</h2>
        {section.body && (
          <div className={styles.processBody}>{nl2p(section.body)}</div>
        )}
      </div>
      {section.items && (
        <div className={styles.processItems}>
          {section.items?.map((item, i) => (
            <div key={i} className={styles.processItem}>
              <span className={styles.processItemLabel}>{item.label}</span>
              <p className={styles.processItemText}>{item.text}</p>
            </div>
          ))}
        </div>
      )}
      {section.closing && (
        <p className={styles.processClosing}>{section.closing}</p>
      )}
    </div>
  );
}

function DecisionsSection({ section }) {
  return (
    <div className={`${styles.decisionsSection} ${styles.sectionInner}`}>
      <div className={styles.decisionsHeader}>
        <h2 className={styles.decisionsTitle}>{section.title}</h2>
      </div>
      <div className={styles.decisionsGrid}>
        {section.items?.map((item, i) => (
          <div key={i} className={styles.decisionCard}>
            <span className={styles.decisionNumber}>{item.number}</span>
            <h3 className={styles.decisionTitle}>{item.title}</h3>
            <div className={styles.decisionBody}>{nl2p(item.body)}</div>
            {item.placeholder && !section.hidePlaceholders && (
              <div className={styles.decisionPlaceholderWrap}>
                <ImagePlaceholder label={item.placeholder} ratio="standard" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonsSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.decisionsHeader}>
        <h2 className={styles.decisionsTitle}>{section.title}</h2>
      </div>
      {section.intro && <p className={styles.lessonsIntro}>{section.intro}</p>}
      <div className={styles.decisionsGrid}>
        {section.items?.map((item, i) => (
          <div key={i} className={styles.decisionCard}>
            <span className={styles.decisionNumber}>{item.number}</span>
            <h3 className={styles.decisionTitle}>{item.title}</h3>
            <div className={styles.decisionBody}>{nl2p(item.body)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccentSection({ section }) {
  return (
    <div className={styles.accentSection}>
      <div className={styles.sectionInner}>
        {section.label && (
          <span className={styles.sectionEyebrow}>{section.label}</span>
        )}
        <h2 className={styles.accentTitle}>{section.title}</h2>
        <div className={styles.accentBody}>{nl2p(section.body)}</div>
        {section.highlight && (
          <p className={styles.accentHighlight}>{section.highlight}</p>
        )}
        {section.slides && (
          <div className={styles.accentSliderWrap}>
            <Slider slides={section.slides} />
          </div>
        )}
        {section.placeholder && (
          <div className={styles.accentPlaceholderWrap}>
            <ImagePlaceholder label={section.placeholder} ratio="wide" />
          </div>
        )}
      </div>
    </div>
  );
}

function PullquoteSection({ section }) {
  return (
    <div className={styles.pullquoteSection}>
      <div className={styles.pullquoteInner}>
        <span className={styles.pullquoteMark} aria-hidden="true">
          "
        </span>
        <p className={styles.pullquoteText}>{section.quote}</p>
        <div className={styles.pullquoteDivider} />
        <div className={styles.pullquoteContext}>{nl2p(section.context)}</div>
      </div>
    </div>
  );
}

function OutcomeSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.outcomeGrid}>
        <div className={styles.outcomeTitleWrap}>
          <h2 className={styles.outcomeTitle}>{section.title}</h2>
          {section.body && (
            <p className={styles.outcomeIntro}>{section.body}</p>
          )}
        </div>
        <ul className={styles.outcomeList}>
          {section.items?.map((item, i) => (
            <li key={i} className={styles.outcomeItem}>
              <span className={styles.outcomeItemDash}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TableSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.tableHeader}>
        <h2 className={styles.tableTitle}>{section.title}</h2>
      </div>
      {section.intro && <p className={styles.tableIntro}>{section.intro}</p>}
      <table className={styles.cutsTable}>
        <thead className={styles.cutsTableHead}>
          <tr>
            <th className={styles.cutsTableHeadCell}>Feature</th>
            <th className={styles.cutsTableHeadCell}>Decision</th>
          </tr>
        </thead>
        <tbody>
          {section.rows?.map((row, i) => (
            <tr key={i} className={styles.cutsTableRow}>
              <td className={styles.cutsTableCell}>{row.feature}</td>
              <td
                className={`${styles.cutsTableCell} ${styles.cutsTableDecision}`}
              >
                <span
                  className={
                    row.decision === 'Shipped'
                      ? styles.decisionShipped
                      : styles.decisionCut
                  }
                >
                  {row.decision}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {section.closing && (
        <p className={styles.tableClosing}>{section.closing}</p>
      )}
    </div>
  );
}

function ProblemsSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.problemsHeader}>
        <h2 className={styles.problemsTitle}>{section.title}</h2>
      </div>
      <div className={styles.problemsGrid}>
        {section.items?.map((item, i) => (
          <div key={i} className={styles.problemCard}>
            <span className={styles.problemNumber}>{item.number}</span>
            <h3 className={styles.problemTitle}>{item.title}</h3>
            <div className={styles.problemBody}>{nl2p(item.body)}</div>
            {item.placeholder && (
              <div className={styles.problemPlaceholderWrap}>
                <ImagePlaceholder label={item.placeholder} ratio="wide" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SliderSection({ section }) {
  if (!section.slides || section.slides.length === 0) return null;
  return (
    <div className={styles.sliderSection}>
      <Slider slides={section.slides} light />
    </div>
  );
}

function DiagramsSection({ section }) {
  return (
    <div className={styles.diagramsSection}>
      {section.top && (
        <div className={styles.diagramSingle}>
          <img
            src={section.top}
            alt={section.topAlt}
            className={styles.diagramImg}
          />
        </div>
      )}
      {section.single && (
        <div className={styles.diagramSingle}>
          <img
            src={section.single}
            alt={section.singleAlt}
            className={styles.diagramImg}
          />
        </div>
      )}

      {section.pair && (
        <div className={styles.diagramPair}>
          {section.pair?.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.alt}
              className={styles.diagramImg}
            />
          ))}
        </div>
      )}
      {section.bottom && (
        <div className={styles.diagramBottom}>
          <img
            src={section.bottom}
            alt={section.bottomAlt}
            className={styles.diagramImg}
          />
        </div>
      )}
    </div>
  );
}

function PhasesSection({ section }) {
  return (
    <div className={styles.sectionInner}>
      {section.label && (
        <span className={styles.sectionEyebrow}>{section.label}</span>
      )}
      <div className={styles.phasesHeader}>
        <h2 className={styles.phasesTitle}>{section.title}</h2>
      </div>
      <div className={styles.phasesList}>
        {section.items?.map((item, i) => (
          <div key={i} className={styles.phaseItem}>
            <span className={styles.phaseLabel}>{item.label}</span>
            <h3 className={styles.phaseTitle}>{item.title}</h3>
            <p className={styles.phaseBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Router ──────────────────────────────────────────────────────────

function renderSection(section, index) {
  switch (section.type) {
    case 'overview':
      return <OverviewSection key={index} section={section} />;
    case 'single':
      return <SingleSection key={index} section={section} />;
    case 'process':
      return <ProcessSection key={index} section={section} />;
    case 'decisions':
      return <DecisionsSection key={index} section={section} />;
    case 'lessons':
      return <LessonsSection key={index} section={section} />;
    case 'accent':
      return <AccentSection key={index} section={section} />;
    case 'pullquote':
      return <PullquoteSection key={index} section={section} />;
    case 'outcome':
      return <OutcomeSection key={index} section={section} />;
    case 'table':
      return <TableSection key={index} section={section} />;
    case 'problems':
      return <ProblemsSection key={index} section={section} />;
    case 'phases':
      return <PhasesSection key={index} section={section} />;
    case 'diagrams':
      return <DiagramsSection key={index} section={section} />;
    case 'slider':
      return <SliderSection key={index} section={section} />;
    default:
      return null;
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find(
    (c) => c.id.toLowerCase() === slug?.toLowerCase(),
  );
  const containerRef = useRef(null);

  useEffect(() => {
    if (!study) return;
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hook entrance
      gsap.fromTo(
        `.${styles.hookTitle}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out', delay: 0.4 },
      );
      gsap.fromTo(
        `.${styles.hookEyebrow}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 },
      );
      gsap.fromTo(
        `.${styles.hookMeta}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.7 },
      );

      // Scroll reveals
      const revealEls = containerRef.current.querySelectorAll(
        [
          `.${styles.singleTitle}`,
          `.${styles.singleBody}`,
          `.${styles.overviewBody}`,
          `.${styles.snapshotList}`,
          `.${styles.processHeader}`,
          `.${styles.processItems}`,
          `.${styles.processClosing}`,
          `.${styles.decisionsHeader}`,
          `.${styles.decisionCard}`,
          `.${styles.accentTitle}`,
          `.${styles.accentBody}`,
          `.${styles.accentHighlight}`,
          `.${styles.pullquoteText}`,
          `.${styles.pullquoteContext}`,
          `.${styles.outcomeGrid}`,
          `.${styles.tableHeader}`,
          `.${styles.cutsTable}`,
          `.${styles.tableIntro}`,
          `.${styles.tableClosing}`,
          `.${styles.problemsHeader}`,
          `.${styles.problemCard}`,
          `.${styles.phasesHeader}`,
          `.${styles.phaseItem}`,
          `.${styles.lessonsIntro}`,
          `.${styles.sectionEyebrow}`,
        ].join(', '),
      );

      revealEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          },
        );
      });

      // Diagram images
      const diagramImgs = containerRef.current.querySelectorAll(
        `.${styles.diagramImg}`,
      );
      diagramImgs.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          },
        );
      });

      // Image placeholders
      const placeholders = containerRef.current.querySelectorAll(
        `.${styles.imagePlaceholder}`,
      );
      placeholders.forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.97, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          },
        );
      });
    }, containerRef);

    const refresh = () => ScrollTrigger.refresh();

    // Refresh ScrollTrigger at intervals to ensure layout settles after navigation and image loads
    const timers = [100, 400, 1000, 2500].map((ms) => setTimeout(refresh, ms));
    window.addEventListener('load', refresh);

    // Also refresh when images within this specific case study finish loading
    const imgs = containerRef.current?.querySelectorAll('img');
    imgs?.forEach((img) => {
      if (img.complete) refresh();
      else img.addEventListener('load', refresh);
    });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [study, slug]);

  if (!study) {
    return <div className={styles.notFound}>Case study not found.</div>;
  }

  const nextStudy = study.next
    ? caseStudies.find(
        (c) => c.id.toLowerCase() === study.next.id.toLowerCase(),
      )
    : null;

  return (
    <div className={styles.caseStudy} ref={containerRef}>
      {/* Hook */}
      <section
        className={`${styles.hookSection} ${study.hookTheme === 'light' ? styles.hookLight : ''}`}
      >
        <span className={styles.hookEyebrow}>{study.meta.type}</span>
        <span className={styles.hookQuoteMark} aria-hidden="true">
          "
        </span>
        <h1 className={styles.hookTitle}>{study.hook}</h1>
        <div className={styles.hookMeta}>
          <div className={styles.hookMetaItem}>
            <span className={styles.hookMetaLabel}>Role</span>
            <span className={styles.hookMetaValue}>{study.meta.role}</span>
          </div>
          <div className={styles.hookMetaItem}>
            <span className={styles.hookMetaLabel}>Timeline</span>
            <span className={styles.hookMetaValue}>{study.meta.timeline}</span>
          </div>
          <div className={styles.hookMetaItem}>
            <span className={styles.hookMetaLabel}>Tools</span>
            <span className={styles.hookMetaValue}>{study.meta.tools}</span>
          </div>
          <div className={styles.hookMetaItem}>
            <span className={styles.hookMetaLabel}>Status</span>
            <span className={styles.hookMetaValue}>
              <span className={styles.statusDot} />
              {study.meta.status}
            </span>
          </div>
        </div>
      </section>

      {/* Sections */}
      {study.sections?.map((section, index) => renderSection(section, index))}

      {/* Next Case Study */}
      {nextStudy && (
        <Link to={`/case-study/${nextStudy.id}`} className={styles.nextSection}>
          <span className={styles.nextLabel}>Next Case Study</span>
          <h2 className={styles.nextTitle}>{nextStudy.title}</h2>
          <span className={styles.nextArrow}>→</span>
        </Link>
      )}
    </div>
  );
}

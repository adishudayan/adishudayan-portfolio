import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenis } from '../../hooks/useLenis';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset Lenis scroll position
    const lenis = getLenis();
    if (lenis) {
      try {
        lenis.scrollTo(0, { immediate: true });
      } catch (err) {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Let components unmount and cleanup their triggers,
    // then refresh scroll positions for the new page
    const id = setTimeout(() => {
      try {
        ScrollTrigger.refresh();
      } catch (err) {
        // ignore
      }
    }, 150);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}

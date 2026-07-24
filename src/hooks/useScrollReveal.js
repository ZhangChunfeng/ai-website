import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Immediately reveal if already in viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add('reveal-visible');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 400px 0px', // expand bottom 400px → trigger well before visible
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

import { useState, useEffect, useRef } from 'react';

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        // Find the section whose top is closest to but <= offset
        const scrollY = window.scrollY + offset;

        // Check if we're at the very top (before any section)
        const firstSection = document.getElementById(sectionIds[0]);
        if (firstSection && window.scrollY < firstSection.offsetTop - 50) {
          setActiveId('');
          ticking.current = false;
          return;
        }

        let current = '';
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY) {
            current = id;
          }
        }
        setActiveId(current);
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

// src/hooks/useInViewOptimized.js
import { useEffect, useRef, useState } from 'react';

export const useInViewOptimized = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) observer.disconnect();
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '50px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options.once, options.threshold, options.rootMargin]);

  return [ref, isInView];
};
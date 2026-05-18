// src/hooks/useOptimizedScroll.js
import { useEffect, useRef, useCallback } from 'react';
import { throttle } from '../utils/performance';

export const useOptimizedScroll = (callback, deps = []) => {
  const rafId = useRef(null);
  const lastScrollY = useRef(0);

  const optimizedCallback = useCallback(() => {
    if (rafId.current) return;
    
    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
        callback();
        lastScrollY.current = currentScrollY;
      }
      rafId.current = null;
    });
  }, [callback]);

  const throttledCallback = throttle(optimizedCallback, 16);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledCallback);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [throttledCallback, ...deps]);
};
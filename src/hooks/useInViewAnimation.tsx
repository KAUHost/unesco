import { useState, useEffect } from 'react';

function useInViewAnimation<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isInView };
}

export default useInViewAnimation;

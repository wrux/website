import { MutableRefObject, useEffect, useState } from 'react';

const useOnScreen = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        threshold: 0.75,
        rootMargin: '0px',
      }
    );
    if (!ref.current) return;
    const reference = ref.current;
    observer.observe(reference);
    return () => observer.unobserve(reference);
  }, []);

  return isIntersecting;
};

export default useOnScreen;

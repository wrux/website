import { MutableRefObject, useEffect, useState } from 'react';

const useOnScreen = (
  ref: MutableRefObject<HTMLDivElement>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (!ref.current) return;
    const reference = ref.current;
    observer.observe(reference);
    return () => observer.unobserve(reference);
  }, []);

  return isIntersecting;
};

export default useOnScreen;

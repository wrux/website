import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './main.css';

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('[data-work]')?.forEach((item) => {
  const jobTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: 'bottom 65%',
      scrub: 1,
    },
  });

  jobTimeline
    .addLabel('showAll')
    .from(item.querySelectorAll('[data-work-item]'), {
      y: '50%',
      opacity: 0,
      scale: 0.9,
      // skew: skew(0deg, 3deg)
      skewY: '5deg',
      stagger: 0.25,
    });
});

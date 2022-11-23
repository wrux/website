import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './main.css';

gsap.registerPlugin(ScrollTrigger);

const gsapMedia = gsap.matchMedia();

gsapMedia.add('(min-width: 768px)', () => {
  const jobStackTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.querySelector('.jobs'),
      start: 'top 50%',
      end: 'bottom 30%',
      scrub: 1,
    },
  });
  jobStackTimeline
    .addLabel('start')
    .fromTo(
      document.querySelector('.jobs .job-stack__line'),
      { height: '0%' },
      { height: '100%' }
    );

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
        skewY: '5deg',
        stagger: 0.25,
      });
  });
});

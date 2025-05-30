// components/OurStory.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OurStory() {

  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: logoRef.current,
      //     start: 'top 80%',
      //   },
      //   defaults: { ease: 'power2.out' },
      // });

      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        start: 'top 60%',
        end: 'top 30%', // adjust for faster or slower animation
        scrub: true, // ← tie progress to scroll!
      },
      defaults: { ease: 'none' },
    });

      tl.fromTo(
        '.line-left-inner',
          { height: 0 },
          { height: '100%', duration: 2 },
          '-=0.5'
        )
        .fromTo(
        '.circle-cover',
        { width: '110%' },
        { width: 0, duration: 3 },
        )
        .fromTo(
          '.line-right-inner',
          { height: 0 },
          { height: '100%', duration: 2 },
          '-=0.4'
        );
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white  py-20 ba-our-story">


      <div className="ba-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-10 font-light">
            In a world brimming with possibilities, we sprouted, seizing our destiny to create an extraordinary
            narrative – a tale that encapsulates laughter, tears, challenges, and triumphs.
          </p>
          <Link href="#" className="inline-flex items-center gap-3 arrow-btn-border-white">
                Read More <img src="/arrow_right_white.svg" alt="arrow" />
              </Link>
        </motion.div>

        {/* Right Orb Image */}
       <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <video
            src="/videos/banner1.mp4"
            autoPlay
              muted
              loop
              playsInline
          /> */}
               <div ref={logoRef} className="ba-logo">
                <div className="circle">
                  <div className='circle-cover'></div>
                </div>
                <div className="line-left">
                  <div className="line-left-inner"></div>
                </div>
                <div className="line-right">
                  <div className="line-right-inner"></div>
                </div>
               </div>
       </motion.div>

      </div>
    </section>
  );
}

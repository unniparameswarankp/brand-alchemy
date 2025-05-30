// components/OurStory.tsx
'use client';


import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OurStory() {
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
          <video
            src="/videos/banner1.mp4"
            autoPlay
              muted
              loop
              playsInline
          />
       </motion.div>

      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  { id: 1, title: "Brand Boost", 
    desc: "Full marketing overhaul",
    image: "/images/cs1.jpeg",
},
  { id: 2, title: "Growth Hack", 
    desc: "Scaling campaigns fast" ,
    image: "/images/cs2.jpeg",
},
  { id: 3, title: "Design Sprint", 
    desc: "UI/UX transformation" ,
    image: "/images/cs3.jpeg",
},
  { id: 4, title: "Product Launch", 
    desc: "Go-to-market strategy",
    image: "/images/cs1.jpeg", 
},
  { id: 5, title: "Social Surge", 
    desc: "Viral growth case" ,
    image: "/images/cs2.jpeg",
},
  { id: 6, title: "Social Surge", 
    desc: "Viral growth case" ,
    image: "/images/cs3.jpeg",
},
];

export default function CaseStudiesScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const horizontal = horizontalRef.current!;
    const title = titleRef.current!;

    const scrollWidth = horizontal.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollLength = scrollWidth - windowWidth;
    const titleScrollLength = 100;

    const ctx = gsap.context(() => {
      // Hide horizontal container off-screen initially
      gsap.set(horizontal, { x: window.innerWidth });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollLength * 3 + titleScrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Title fade and move
      tl.to(title, {
        opacity: 0,
        y: -100,
        duration: .1,
        ease: "none",
      }, ">-.5");

      // Bring cards into screen from right (x = window width to 0)
      tl.to(horizontal, {
        x: () => `-${scrollLength}px`,
        ease: "none",
      }, ">-.1"); // slight pause after title


    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden ba-horizondal-cards"
    >
      {/* Title Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2">
        <h2
          ref={titleRef}
          className="text-[clamp(2rem,9vw,30rem)] font-light text-center whitespace-nowrap"
        >
          Case Studies
        </h2>
      </div>

      {/* Horizontally Scrolling Cards */}
      <div
        ref={horizontalRef}
        className="flex h-full items-center gap-15 px-16 absolute top-0 left-0"
        style={{ width: `${caseStudies.length * 360 + 400}px` }}
      >
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-black text-white p-6 shrink-0 shadow-lg flex flex-col justify-between card"
          > <figure>
            <img src={study.image} />
          </figure>
          <footer>
            <h3 className="text-2xl font-light ">{study.title}</h3>
            <p>{study.desc}</p>
            </footer>
          </div>
        ))}
        {/* View More Button */}
        <div className="w-[400px] h-[400px] flex items-center justify-center ba-link-card">
          <a href="#" className="inline-flex items-center gap-3 arrow-btn-border-white">
                View More <img src="/arrow_right_white.svg" alt="arrow" /></a>
        </div>
      </div>
    </section>
  );
}

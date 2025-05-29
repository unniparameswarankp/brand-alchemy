'use client';

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";


const slides = [
  {
    videoSrc: "/videos/banner1.mp4",
    heading: "We build cool things for the web",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    videoSrc: "/videos/banner2.mp4",
    heading: "Fast and Modern design in everything",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    videoSrc: "/videos/banner3.mp4",
    heading: "Responsive Design and fast performance",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function BannerCarousel() {
 const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlideIndex = (currentSlide + 1) % slides.length;

  // const goToSlideAndPlay = (index) => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(index);
  //     sliderRef.current.slickPlay();
  //   }
  // };

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="ba-banner">
      {/* Main slider */}
      <Slider ref={sliderRef} {...mainSettings} className="ba-main-slider">
        {slides.map(({ videoSrc, heading, description }, index) => (
          <div key={index} className="items-ba">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%" }}
            />
            <div className="ba-container">
              <h1>{heading}</h1>
              <p>{description}</p>
              <Link href="#" className="inline-flex items-center gap-3 arrow-btn">
                Read More <img src="/arrow_right_white.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* Custom thumbnail and buttons */}
      <div className="ba-thumbnails">
        {/* Next slide preview - now clickable */}
        <button
          onClick={() => sliderRef.current?.slickGoTo(nextSlideIndex)}
          className="flex items-center text-left gap-2 mb-2 video-btn"
        >
          <video
            src={slides[nextSlideIndex].videoSrc}
            muted
            playsInline
            style={{
              objectFit: "cover",
            }}
          />
          
          <p className="text-white button-name"><small>Next</small><br/>{slides[nextSlideIndex].heading}</p>
        </button>

        {/* Slide buttons (excluding next slide) */}
        <div className="flex gap-2 flex-wrap button-ba">
          {slides.map((slide, index) => {
            // if (index === nextSlideIndex) return null;
            return (
              <button
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`px-3 py-1 text-sm rounded-full transition ${
                  index === currentSlide
                    ? "active"
                    : ""
                }`}
              >
            
              </button>
            );
          })}
   
        </div>
      </div>
    </div>
  );
}

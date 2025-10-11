import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Navbar from '../components/Navbar'
import hero1 from "../assets/image/ban1.jpg";
import hero2 from "../assets/image/ban2.jpg";
import hero3 from "../assets/image/ban3.jpg";
import hero4 from "../assets/image/ban4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero2 = () => {

const SliderImages=[
 {
  image:hero1,
  title:"We Build Sustainable",
  description:"From soil to society, our farming models are designed to last—eco-smart, climate-resilient, and future-ready."
 },
 {
  image:hero2,
  title:"We Produce Organic",
  description:"Grown with care, free from chemicals—our produce delivers purity, health, and trust from farm to fork."  
 },
 {
  image:hero3,
  title:"We Create Zero Waste",
  description:"Nothing wasted, everything repurposed. Our integrated systems turn byproducts into resources for a greener cycle."
 },
 {
  image:hero4,
  title:"We Are Spectrum — Renovating Agriculture",
  description:"Blending tradition with innovation, we’re transforming how India farms, trades, and thrives—one field at a time."
 }
]

  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveColor: '#000000',
          bulletClass: 'swiper-pagination-bullet',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full h-full relative "
      >
        {SliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              className="w-full h-full object-cover" 
              src={image.image} 
              alt={`Hero image ${index + 1}`} 
            />
            <div className="absolute bottom-10 left-6 w-fit h-fit flex flex-col justify-center items-start gap-3 p-6 backdrop-blur-xl rounded-lg ">
              <h1 className="text-white text-5xl font-bold font-[curvyText]">{image.title}</h1>
              <p className="text-white text-lg">{image.description}</p>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !bg-black/30 !w-12 !h-12 !rounded-full hover:!bg-black/50 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-white !bg-black/30 !w-12 !h-12 !rounded-full hover:!bg-black/50 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero2;

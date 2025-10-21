// import { IoChevronForward } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import g1 from "../assets/gallary/29.png";
import g2 from "../assets/gallary/30.png";
import g3 from "../assets/gallary/31.png";
import g4 from "../assets/gallary/32.png";
import g5 from "../assets/gallary/33.png";
import g6 from "../assets/gallary/34.png";
import g7 from "../assets/gallary/35.png";
import g8 from "../assets/gallary/36.png";
import g9 from "../assets/gallary/37.png";

import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const [isHover, setIsHover] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const hoverAni = () => {
    setIsHover(!isHover);
  };

  const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="heading font-bold text-gray-800 mb-4 font-[curvyText]">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-emerald-950 mx-auto"></div>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              // >= 768px (tablet)
              // 768: {
              //   slidesPerView: 2,
              // },
              // >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={setSwiperInstance}
            className="h-[70vh] w-full"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    className="w-full h-full object-cover object-left"
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            {/* <div className="swiper-button-prev !text-white !bg-emerald-950/80 !w-14 !h-14 !rounded-full hover:!bg-emerald-950 transition-all duration-300 !left-4 p-4">
              {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg> */}
            {/* </div> */}
            {/* <div className="swiper-button-next !text-white !bg-emerald-950/80 !w-14 !h-14 !rounded-full hover:!bg-emerald-950 transition-all duration-300 !right-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div> */}
          </Swiper>
          {/* left button */}
          <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
            <div
              className={`w-15 h-15 rounded-full bg-emerald-950 absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2
               ${
                 isHover ? "opacity-100" : "opacity-50"
               } transition-all duration-500 ease-in-out flex justify-center items-center cursor-pointer pointer-events-auto`}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slidePrev();
                }
              }}
              onMouseEnter={hoverAni}
              onMouseLeave={hoverAni}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white text-2xl"
              />
            </div>

            {/* right icon */}
            <div
              className={`w-15 h-15 rounded-full bg-emerald-950 absolute top-1/2 z-20 right-0 -translate-y-1/2 translate-x-1/2  flex justify-center items-center cursor-pointer pointer-events-auto ${
                isHover ? "opacity-100" : "opacity-50"
              } transition-all duration-500 ease-in-out`}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideNext();
                }
              }}
              onMouseEnter={hoverAni}
              onMouseLeave={hoverAni}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white text-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

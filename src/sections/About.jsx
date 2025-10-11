import React from "react";
import ceoImage from "../assets/image/about.jpg";
import CountUp from "../components/CountUp";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-[curvyText]">
            About the Company
          </h2>
          <div className="w-24 h-1 bg-[#D4DBB1] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={ceoImage}
                alt="Spectrum Company"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-950 text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 leading-tight font-[curvyTextLight] ">
              Empowering Farmers, Building Communities
            </h3>

            <p className="text-lg text-gray-600 ">
              We are a new-age agricultural enterprise committed to reshaping
              the future of Indian farming. Guided by four core
              verticals—Krishi, Shuddh, Setu, and Vikas—we focus on sustainable
              cultivation, organic value creation, direct market access, and
              continuous innovation. By integrating traditional farming wisdom
              with modern technology, we champion eco-friendly practices,
              zero-waste models, and smart solutions that enhance productivity
              while safeguarding nature. At Spectrum, our mission goes beyond
              agriculture—we strive to empower farmers, uplift rural
              communities, and create a resilient, future-ready ecosystem that
              nurtures people, protects the planet, and drives shared
              prosperity.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-950 mb-2">
                  <CountUp
                    from={0}
                    to={10000}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
                <div className="text-sm text-gray-600">Farmers Supported</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-950 mb-2">
                  <CountUp
                    from={0}
                    to={12}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </div>
                <div className="text-sm text-gray-600">Districts Covered</div>
              </div>
            </div>

            <div className="pt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

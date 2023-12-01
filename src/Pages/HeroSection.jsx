import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



const HeroSection = () => {
  return (
    <Carousel autoPlay showArrows={false} infiniteLoop>
      <section className="heroSection relative w-full md:h-[400px] h-[400px]">
        <div className="leftHero  lg:w-[1120px] md:w-[690px] w-full">
          <h1 className="firstLine text-start">
            Top Training and Job Placement and <br /> Employment Agencies in
            Karnataka, India
          </h1>
          <h1 className="secondLine text-start">The Ultimate Guide To Ace Interviews</h1>
        </div>
      </section>

      <section className="heroSection heroSection2 relative w-full md:h-[400px] h-[400px]">
        <div className="leftHero lg:w-[1120px] md:w-[690px] w-full">
          <h1 className="firstLine text-start">
          We are the first who gives training for NON-IT courses in Karnataka
          </h1>
          <h1 className="secondLine text-start">The Ultimate Guide To Ace Interviews</h1>
        </div>
      </section>

      <section className="heroSection heroSection3 relative w-full md:h-[400px] h-[400px]">
        <div className="absolute  w-full h-full"></div>
      </section>
    </Carousel>
  );
};

export default HeroSection;

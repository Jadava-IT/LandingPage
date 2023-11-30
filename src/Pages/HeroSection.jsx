import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Images = ["https://d2aknbw0t7002k.cloudfront.net/buildhome/p1.webp"];

const settings = {
  dots: false,
  lazyLoad: true,
  draggable: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 4000,
};

const HeroSection = () => {
  return (
    <Carousel autoPlay showArrows={false} infiniteLoop>
      <section className="heroSection relative w-full md:h-[400px] h-[400px]">
        <div className="leftHero  lg:w-[1120px] md:w-[690px] w-full">
          <h1 className="firstLine text-start">
            Top training and Job consultancy and <br /> employment agencies in
            Karnataka, India
          </h1>
          <h1 className="secondLine text-start">The Ultimate Guide To Ace Interviews</h1>
        </div>
      </section>

      <section className="heroSection heroSection2 relative w-full md:h-[400px] h-[400px]">
        <div className="leftHero lg:w-[1120px] md:w-[690px] w-full">
          <h1 className="firstLine text-start">
            We are the first who stars NON-IT courses in Karnataka
          </h1>
          <h1 className="secondLine text-start">The Ultimate Guide To Ace Interviews</h1>
        </div>
      </section>
    </Carousel>
  );
};

export default HeroSection;

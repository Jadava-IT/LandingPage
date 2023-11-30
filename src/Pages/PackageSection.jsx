import React, { useRef } from "react";
import PackageCard from "../Reusable/PackageCard";
import { PackageData } from "../constdata/newPackageData";
import Slider from "react-slick";

const PackageSection = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: false,
  };
  return (
    <>
      <section className="md:h-full w-full my-8  bg-[#FEFFFE]" id="package">
        <div className="flex justify-center">
          <div className="PackagesTopContainer relative lg:w-[1100px]  md:px-[0px] w-full md:w-[690px] mb-[48px] md:mb-[52px] lg:mb-[80px] lg:mx-auto">
            <div className="flex  gap-[16px] md:flex md:gap-[12.8px] lg:gap-[11px] overflow-x-auto  Exculsive AllPackagebox1024lp h-[450px]">
              <Slider {...settings} ref={sliderRef}>
                {PackageData.map((data, index) => {
                  return (
                    <div key={index} className="w-full h-[435px]">
                      <PackageCard index={index} data={data} />
                    </div>
                  );
                })}
              </Slider>

              <div className="lg:block hidden">
              <div className="projectNavigationContainer flex justify-between items-center w-[1300px]  absolute left-[-100px]  top-[50%]">
                <div
                  className="w-[50px] h-[50px]"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <svg
                    className="ourProjectNavigation"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="23.5"
                      stroke="#1D1D1F"
                      transform="matrix(-1 0 0 1 48 0)"
                    ></circle>
                    <path
                      fill="#1D1D1F"
                      d="M12.929 25l-.576.555-.536-.555.536-.555.576.555zm23.143-.8a.8.8 0 010 1.6v-1.6zm-16.005 9.355l-7.714-8 1.152-1.11 7.714 8-1.152 1.11zm-7.714-9.11l7.714-8 1.152 1.11-7.714 8-1.152-1.11zm.576-.245h23.143v1.6H12.929v-1.6z"
                    ></path>
                  </svg>
                </div>
                <div
                  className="w-[50px] h-[50px]"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <svg
                    className="ourProjectNavigation"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <circle cx="24" cy="24" r="24" fill="#1D1D1F"></circle>
                    <path
                      fill="#fff"
                      d="M35.071 25l.576.555.536-.555-.536-.555-.576.555zm-23.143-.8a.8.8 0 000 1.6v-1.6zm16.005 9.355l7.714-8-1.152-1.11-7.714 8 1.152 1.11zm7.714-9.11l-7.714-8-1.152 1.11 7.714 8 1.152-1.11zm-.576-.245H11.928v1.6h23.143v-1.6z"
                    ></path>
                  </svg>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageSection;

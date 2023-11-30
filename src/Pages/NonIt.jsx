import React from "react";
import CourseCard from "../Reusable/CourseCard";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MultipleSelectPlaceholder from "../Reusable/MultipleSelectPlaceholder";
import PackageSection from "./PackageSection";

function NonITCourse() {
  return (
   <>
     <NavBar/>
    <section>
      <div className="heroAboutImg CoursePage relative">
        <div className="absolute flex pt-[32px] md:pt-[64px] w-full h-full bg-[#00000066]">
          <div className="getInTouch lg:w-[1120px] md:w-[694px] w-full">
            <p className="text-[30px] md:text-[52px]  text-[#fff] font-bold">
              NON-IT Courses
            </p>
            {/* <p class="sm:text-lg text-base text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae.
            </p> */}
          </div>
        </div>
      </div>
      <div className="course-selection flex justify-end lg:w-[1120px]  w-full mx-auto mt-4">
        <MultipleSelectPlaceholder/>
      </div>
    
        <PackageSection/>
    </section>
    <Footer/>
   </>
  );
}

export default NonITCourse;

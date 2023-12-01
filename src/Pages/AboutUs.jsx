import React from "react";
import img2 from "../asset/aboutImg2.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AboutUs = () => {
  return (
    <section>
      <NavBar />
      <div className="heroAboutImg heroITCourse relative">
        <div className="absolute flex pt-[32px] md:pt-[64px] w-full h-full bg-[#00000066]">
          <div className="getInTouch lg:w-[1120px] md:w-[694px] w-full">
            <p className="text-[30px] md:text-[52px]  text-[#fff] font-bold">
              About Us
            </p>
            <p class="sm:text-lg text-base text-[#fff]">
              Place for imparting education to next-generation students.
            </p>
          </div>
        </div>
      </div>

      <div class="mx-auto my-10 grid min-h-[564px]  md:max-w-[694px] lg:max-w-[1120px] px-paddingXforMob lg:grid-cols-2 lg:[80px] md:gap-6 md:px-4">
        <img
          src={img2}
          alt="img"
          class="-pt-1 mx-auto h-[70vw] w-[70vw] place-self-center rounded-full object-cover object-top md:h-[400px] sm:w-full sm:rounded-3xl md:w-[660px] lg:h-[444px]"
        />
        <div class="flex flex-col items-center justify-center gap-4 px-4 py-10 md:items-start ">
          <p class="section_heading text-headText text-start">
            Top Training with Job Placement and Employment Agencies in
            Karnataka, India
          </p>
          <p class="section_subheading text-center md:text-start text-subText ">
            Hello! Welcome to <span class="font-medium">Jadav Foundation</span>!
            Really happy to see you here.
          </p>
          <p class="content_text text-center md:text-start text-grey100">
            Thinking of taking a step towards a mentorship programme? It
            definitely seems a bit daunting at first. It is never easy to ask
            for someone's counsel or guidance be it for studies or just in
            general. So, at <span class="font-medium">Jadav Foundation</span> we
            are here to provide all the necessary counsel you might need for{" "}
            <span class="font-medium">
              placement preparations, interview experiences, programming. 
            </span>
            For any additional questions, feel free to email us at
            jadav.foundation2800@gmail.com
          </p>
        </div>
      </div>

      <div className="our_mission">
        <h1>Our Mission</h1>
        <p className="mission_desc">
          Our mission is to empower job seekers in India by providing them with
          access to a vast range of job opportunities and resources to help them
          succeed in their careers. We aim to provide the job for both job
          seekers and recruiters which matches their profiles by leveraging
          technology to create a seamless and efficient platform.
        </p>
      </div>

      <div className="our_mission our_vision ">
        <h1>Our Vision</h1>
        <p className="mission_desc">
          Our vision is to become a top ranked job destination for quality
          manpower from India, and providing opportunities for job seekers
          across all industries and sectors. We envision a future where job
          seekers have access to a wealth of job opportunities, and recruiters
          can find the best candidates for their job vacancies quickly and
          easily. Our ultimate goal is to contribute to the betterment of the
          Indian economy by facilitating job creation and supporting the growth
          of businesses across the country.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;

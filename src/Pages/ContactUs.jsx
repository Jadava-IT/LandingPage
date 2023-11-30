import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactUsForm from "../Reusable/ContactUsForm";


export default function ContactUs() {
  return (
    <>
      <NavBar />
      <section className="">
        <div className="heroContactImg relative">
          <div className="absolute flex pt-[32px] md:pt-[64px] w-full h-full bg-[#00000066]">
            <div className="getInTouch lg:w-[1120px] md:w-[694px] w-full">
              <p className="text-[38px] md:text-[52px] text-5xl text-[#fff] font-bold">
                Get In Touch
              </p>
              <p class="sm:text-lg text-base text-[#fff]">
                The Ultimate Guide To Ace The All Interviews.
              </p>
            </div>
          </div>
        </div>

        <div className="formTopContainer w-full">
          <ContactUsForm/>
        </div>
      </section>
      <Footer />
    </>
  );
}

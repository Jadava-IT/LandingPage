import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ServicePage() {
  return (
    <>
      <NavBar />
      <section>
        <div className="heroAboutImg servicePage relative mb-8">
          <div className="absolute flex pt-[32px] md:pt-[64px] w-full h-full bg-[#0000008c]">
            <div className="getInTouch lg:w-[1120px] md:w-[694px] w-full">
              <p className="text-[30px] md:text-[52px]  text-[#fff] font-bold">
                SERVICES
              </p>
              {/* <p class="sm:text-lg text-base text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae.
                    </p> */}
            </div>
          </div>
        </div>

        <div className="our_mission service_desc">
          <h1>C-Suite/ C-Level Executive Search</h1>
          <p className="mission_desc service_desc_p">
            The most powerful and influential members of the organization who
            sets the company’s strategy, make high-stakes decisions and ensure
            day-to-day operations align with fulfilling the company’s strategic
            goals are the C- Level Executives. They are also typically the
            highest-paid people in a company.and finding the match can often be
            a unsettling job. Jadav Foundation experts in finding the right
            leader who acquires the core values and highly adaptable to culture
            and environment of your company. We are strong at our assessment and
            we assure you the perfect match.
          </p>
        </div>

        <div className="our_mission service_desc">
          <h1>Permanent Staffing</h1>
          <p className="mission_desc service_desc_p">
            Hiring permanent employees and absorbing them into your organization
            is a tedious job . It is a serious commitment. We are here to help
            you pick out just the right ones. Jadav Foundation give you access
            to fully screened and qualified candidates in any industry of your
            choice. We have a strong team of consultants who dedicate themselves
            to helping your company achieve its business objectives. Our process
            is fool proof and ensures that we offer our clients the best
            candidates at any level, with the fastest turnaround time.
          </p>
        </div>

        <div className="our_mission service_desc">
          <h1>Functional Search</h1>
          <p className="mission_desc service_desc_p">
            Jadav Foundation has expertise in several functional areas such as
            Sales & Marketing, finance, operation, voice/non-voice processes,
            and leadership hirings.
          </p>
        </div>
        <div className="our_mission service_desc">
          <h1>Campus Recruitment</h1>
          <p className="mission_desc service_desc_p">
            Jadav Foundation is associated with some of the best educational
            institutions PAN India that give us access to some of the most
            talented minds who fit the profile of your organisation.
          </p>
        </div>

        <div className="our_mission service_desc">
          <h1>Training Program</h1>
          <p className="mission_desc service_desc_p">
            Our company offers a comprehensive training program, covering
            structured interview preparation, confidence-building, and spoken
            English mastery for effective job placement. Participants engage in
            sessions focusing on mastering common interview question formats,
            refining responses, and honing body language through realistic mock
            interviews. Emphasizing spoken English proficiency, including
            pronunciation and fluency, our training also includes basic
            conversational skills in four languages, enhancing adaptability for
            global job markets. With a unique 6-month job assurance program,
            individuals pay a one-time fee for training and receive ongoing
            support in securing new employment opportunities post-training.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ServicePage;

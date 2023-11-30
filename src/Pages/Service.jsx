import React from 'react'
import service from "../asset/service.jpg"

export default function Service() {
  return (
    <section>
          <div class="mx-auto my-10 grid min-h-[564px]  md:max-w-[694px] lg:max-w-[1120px] px-paddingXforMob lg:grid-cols-2 lg:[80px] md:gap-6 md:px-4">
        <img
          src={service}
          alt="img"
          class="-pt-1 mx-auto h-[70vw] w-[70vw] place-self-center rounded-full object-cover object-top md:h-[400px] sm:w-full sm:rounded-3xl md:w-[660px] lg:h-[344px]"
        />
        <div class="flex flex-col items-center justify-center gap-4 px-4 py-10 md:items-start ">
          <p class="section_heading text-headText">Top training and Job consultancy and employment agencies in Karnataka, India</p>
          {/* <p class="section_subheading text-center md:text-start text-subText ">
            Hello! Welcome to <span class="font-medium">Jadav Foundation</span>! Really
            happy to see you here.
          </p> */}
          <p class="content_text text-justify md:text-start text-grey100">
          At Jadav Foundation, we strive to enable organisations to be industry leaders by delivering high-impact end-to-end permanant staffing solutions to build a competent workforce.
          </p>
        </div>
      </div>

    </section>
  )
}

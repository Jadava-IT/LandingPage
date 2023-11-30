import React from 'react'

function MeetTeam() {
  return (
    <section className='meetTeamContainer lg:w-[1120px] md:w-[690px] w-full'>
        <div className="header_ourTeam">
            <h1 className='section_heading text-headText mx-auto max-w-xl text-center'>Our Team</h1>
        </div>

        <div className="ourTeamCards flex flex-wrap justify-center gap-8 lg:gap-0  lg:justify-between my-6 items-center">
            <div className="card1 relative md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#00000066]">
               <div className="designation absolute bottom-0 left-4">
               <h1 className='lg:text-[35px]  text-[#fff] font-bold'>Prajwal R</h1>
                <h1 className='lg:text-[20px] text-[#fff] font-light'>Founder & Director of Jadav Foundation</h1>
               </div>
            </div>

            <div className="card2 relative md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#00000066]">
               <div className="designation absolute bottom-0 left-4">
               <h1 className='lg:text-[35px] text-[#fff] font-bold'>Rohit B A</h1>
                <h1 className='lg:text-[20px] text-[#fff] font-light'>Management Team Head</h1>
               </div>
            </div>
        </div>
    </section>
  )
}

export default MeetTeam
import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import HeroSection from '../Pages/HeroSection'
import WhyJadav from '../Pages/WhyJadav'
import Service from '../Pages/Service'
import ConsultationSection from '../Pages/ConsultationSection'
import MeetTeam from '../Pages/MeetTeam'

const HomeComponent = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <WhyJadav/>
    <ConsultationSection/>
    <Service/>
    <MeetTeam/>
    <Footer/>
    </>
  
  )
}

export default HomeComponent
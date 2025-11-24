import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import MarqueeSection from '../components/MarqueeSection'
import TestimonialsSection from '../components/TestimonialsSection'
import StackScroll from '../components/stackscroll'
import AwardsWinning from '../components/AwardsWinning'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import LetsConnect from '../components/LetsConnect'
import About from '../components/About'
import ServicesCarousel from '../components/ServicesCarousel'
import FounderCard from '../components/FounderCard'
import Section2 from '../components/Section2'



const LandingPage = () => {
  return (
    <div>

      <Hero />
      <Section2 />
      <MarqueeSection />
      <About />
      <TestimonialsSection />
      <StackScroll />
      <ServicesCarousel />
      <FounderCard />
      <AwardsWinning />
      <PricingSection />
      <FAQSection />
      <LetsConnect />


    </div>
  )
}

export default LandingPage

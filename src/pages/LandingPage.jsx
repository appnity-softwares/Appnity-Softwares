import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import MarqueeSection from '../components/MarqueeSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import StackScroll from '../components/stackscroll.jsx'
import AwardsWinning from '../components/AwardsWinning.jsx'
import PricingSection from '../components/PricingSection.jsx'
import FAQSection from '../components/FAQSection.jsx'
import Footer from '../components/Footer.jsx'
import LetsConnect from '../components/LetsConnect.jsx'
import About from '../components/About.jsx'
import ServicesCarousel from '../components/ServicesCarousel.jsx'
import FounderCard from '../components/FounderCard.jsx'
import Section2 from '../components/Section2.jsx'



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

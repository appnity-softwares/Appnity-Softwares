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
import SEOHead from '../components/SEOHead.jsx'



const LandingPage = () => {
  return (
    <div>
      <SEOHead
        title="Appnity - Premium Software Development & Design Agency | Web, Mobile & SaaS Solutions"
        description="Appnity is a leading software development agency specializing in web development, mobile apps, UI/UX design, and custom SaaS solutions. Transform your ideas into powerful digital products with our expert team."
        keywords="software development, web development, mobile app development, UI/UX design, SaaS solutions, React, Next.js, React Native, custom software, digital agency, Appnity, India"
        path="/"
      />
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

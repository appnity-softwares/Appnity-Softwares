import React from 'react'
import Hero from '../components/Hero.jsx'
import MarqueeSection from '../components/MarqueeSection.jsx'
import About from '../components/About.jsx'
import AwardsWinning from '../components/AwardsWinning.jsx'
import FAQSection from '../components/FAQSection.jsx'
import LetsConnect from '../components/LetsConnect.jsx'
import Foundercard from '../components/FounderCard.jsx'
import Tool from '../components/Toolspower.jsx'
import SEOHead from '../components/SEOHead.jsx'

const AboutPage = () => {
  return (
    <div>
      <SEOHead
        title="About Us - Appnity | Premium Software Development Agency"
        description="Learn about Appnity, a leading software development agency dedicated to transforming ideas into powerful digital products. Meet our team and discover our mission."
        keywords="about Appnity, software development company, tech agency, digital solutions, web development agency, mobile app company, India"
        path="/about"
      />
      <Hero />
      <About />
      <Foundercard />
      <MarqueeSection />
      <Tool />
      <AwardsWinning />
      <FAQSection />
      <LetsConnect />

    </div>
  )
}

export default AboutPage

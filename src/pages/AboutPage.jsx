import React from 'react'
import Hero from '../components/Hero.jsx'
import MarqueeSection from '../components/MarqueeSection.jsx'
import About from '../components/About.jsx'
import AwardsWinning from '../components/AwardsWinning.jsx'
import FAQSection from '../components/FAQSection.jsx'
import LetsConnect from '../components/LetsConnect.jsx'
import Foundercard from '../components/FounderCard.jsx'
import Tool from '../components/Toolspower.jsx'
const AboutPage = () => {
  return (
    <div>
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

import React from 'react'
import Navbar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import PricingSection from '../components/PricingSection.jsx'
import FAQSection from '../components/FAQSection.jsx'
import LetsConnect from '../components/LetsConnect.jsx'
import Footer from '../components/Footer.jsx'
import Stackscroll from '../components/stackscroll.jsx'
import SEOHead from '../components/SEOHead.jsx'

const Works = () => {
  return (
    <div>
      <SEOHead
        title="Our Works - Projects & Case Studies"
        description="Discover our latest projects and case studies. See how Appnity delivers exceptional web development, mobile apps, and design solutions for clients worldwide."
        keywords="our work, projects, case studies, web development work, mobile app projects, design portfolio, Appnity projects"
        path="/works"
      />
      <Hero />
      <Stackscroll />
      <PricingSection />
      <FAQSection />
      <LetsConnect />

    </div>
  )
}

export default Works

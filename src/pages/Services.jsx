import React from 'react'
import Hero from '../components/Hero.jsx'
import PricingSection from '../components/PricingSection.jsx'
import FAQSection from '../components/FAQSection.jsx'
import LetsConnect from '../components/LetsConnect.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SEOHead from '../components/SEOHead.jsx'




const Services = () => {
  return (
    <div>
      <SEOHead
        title="Services - Web Development, Mobile Apps, UI/UX Design & SaaS Solutions"
        description="Explore our comprehensive range of services including custom web development, mobile app development, UI/UX design, and SaaS solutions. Get premium digital solutions for your business."
        keywords="web development services, mobile app development, UI/UX design services, SaaS development, custom software solutions, React development, full-stack development"
        path="/services"
      />
      <Hero />
      <ServiceCard />
      <PricingSection />
      <FAQSection />
      <LetsConnect />


    </div>
  )
}

export default Services

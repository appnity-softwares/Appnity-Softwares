import React from 'react';
import PortfolioHead from '../components/PortfolioHead';
import PortfolioTemplate from '../components/PortfolioTemplate';
import PortfolioCarousel from '../components/PortfolioCarousel';
import LetsConnect from '../components/LetsConnect';
import SEOHead from '../components/SEOHead';
// import Hero from '../components/Hero';

const PortfolioPage = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <SEOHead
                title="Portfolio - Our Work & Case Studies"
                description="Explore our portfolio of successful projects. See how we've helped businesses transform their ideas into powerful digital products with our web and mobile solutions."
                keywords="portfolio, case studies, web development projects, mobile app projects, UI/UX design work, client projects, Appnity portfolio"
                path="/portfolio"
            />
            <PortfolioHead />
            <PortfolioCarousel />
            {/* <PortfolioTemplate /> */}
            <LetsConnect />
        </div>
    );
};

export default PortfolioPage;

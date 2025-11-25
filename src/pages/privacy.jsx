import React from 'react';
import Hero from '../components/Hero'
import LetsConnect from '../components/LetsConnect';
import PrivacyPolicy from '../components/PrivacyPolicy';
const PortfolioPage = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <Hero />
            <PrivacyPolicy />
            <LetsConnect />
        </div>
    );
};

export default PortfolioPage;

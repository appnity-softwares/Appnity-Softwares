import React from 'react';
import PortfolioHead from '../components/PortfolioHead';
import PortfolioTemplate from '../components/PortfolioTemplate';
import PortfolioCarousel from '../components/PortfolioCarousel';
import LetsConnect from '../components/LetsConnect';

const PortfolioPage = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <PortfolioHead />
            <PortfolioCarousel />
            <PortfolioTemplate />
            <LetsConnect />
        </div>
    );
};

export default PortfolioPage;

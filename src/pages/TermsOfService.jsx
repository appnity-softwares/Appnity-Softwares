import React from 'react';
import Hero from '../components/Hero'
import LetsConnect from '../components/LetsConnect';
import TermsOfService from '../components/TermsService.jsx';

const TermsOfServicePage = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <Hero />
            <TermsOfService />
            <LetsConnect />
        </div>
    );
};

export default TermsOfServicePage;

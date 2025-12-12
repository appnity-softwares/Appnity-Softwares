import React from 'react';
import Hero from '../components/Hero.jsx'
import LetsConnect from '../components/LetsConnect.jsx';
import TermsOfService from '../components/TermsService.jsx';
import SEOHead from '../components/SEOHead.jsx';

const TermsOfServicePage = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <SEOHead
                title="Terms of Service - Appnity"
                description="Read Appnity's Terms of Service. Understand the terms and conditions that govern our services and your use of our website."
                keywords="terms of service, terms and conditions, Appnity terms, legal, user agreement"
                path="/terms-of-service"
            />
            <Hero />
            <TermsOfService />
            <LetsConnect />
        </div>
    );
};

export default TermsOfServicePage;

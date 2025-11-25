import React from 'react';
import Hero from '../components/Hero'
import LetsConnect from '../components/LetsConnect';
import PrivacyPolicyContent from '../components/privacy.jsx';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <Hero />
            <PrivacyPolicyContent />
            <LetsConnect />
        </div>
    );
};

export default PrivacyPolicy;

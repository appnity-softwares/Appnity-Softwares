import React from 'react';
import Hero from '../components/Hero.jsx'
import LetsConnect from '../components/LetsConnect.jsx';
import PrivacyPolicyContent from '../components/Privacy.jsx';

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

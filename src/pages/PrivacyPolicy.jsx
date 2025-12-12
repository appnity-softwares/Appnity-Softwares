import React from 'react';
import Hero from '../components/Hero.jsx'
import LetsConnect from '../components/LetsConnect.jsx';
import PrivacyPolicyContent from '../components/Privacy.jsx';
import SEOHead from '../components/SEOHead.jsx';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#e6e6e6] min-h-screen">
            <SEOHead
                title="Privacy Policy - Appnity"
                description="Read Appnity's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our services."
                keywords="privacy policy, data protection, Appnity privacy, user data, GDPR"
                path="/privacy-policy"
            />
            <Hero />
            <PrivacyPolicyContent />
            <LetsConnect />
        </div>
    );
};

export default PrivacyPolicy;

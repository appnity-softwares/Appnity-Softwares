  
import React from 'react';
import TeamSection from '../components/TeamSection';
import OurValues from '../components/OurValues'; // Import OurValues
import JoinOurTeam from '../components/JoinOurTeam'; // Import JoinOurTeam
import LetsConnect from '../components/LetsConnect'; // Import LetsConnect

const TeamPage = () => {
  return (
    <div>
      <TeamSection />
      <OurValues />
      <JoinOurTeam />
      <LetsConnect />
    </div>
  );
};

export default TeamPage;

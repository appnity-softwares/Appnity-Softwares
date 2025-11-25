
import React from 'react';
import OurValues from '../components/OurValues'; // Import OurValues
import JoinOurTeam from '../components/JoinOurTeam'; // Import JoinOurTeam
import LetsConnect from '../components/LetsConnect'; // Import LetsConnect
import FounderCard from '../components/FounderCard';
import TeamMembers from '../components/TeamMembers.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TeamPage = () => {
  return (
    <div>



      <TeamMembers />
      <OurValues />
      <JoinOurTeam />
      <LetsConnect />
    </div>
  );
};

export default TeamPage;

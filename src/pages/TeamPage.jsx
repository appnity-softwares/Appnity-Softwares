
import React from 'react';
import OurValues from '../components/OurValues.jsx'; // Import OurValues
import JoinOurTeam from '../components/JoinOurTeam.jsx'; // Import JoinOurTeam
import LetsConnect from '../components/LetsConnect.jsx'; // Import LetsConnect
import FounderCard from '../components/FounderCard.jsx';
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

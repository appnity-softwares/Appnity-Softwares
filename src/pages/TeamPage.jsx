
import React from 'react';
import OurValues from '../components/OurValues.jsx'; // Import OurValues
import JoinOurTeam from '../components/JoinOurTeam.jsx'; // Import JoinOurTeam
import LetsConnect from '../components/LetsConnect.jsx'; // Import LetsConnect
import FounderCard from '../components/FounderCard.jsx';
import TeamMembers from '../components/TeamMembers.jsx';
import SEOHead from '../components/SEOHead.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TeamPage = () => {
  return (
    <div>
      <SEOHead
        title="Our Team - Meet the Experts at Appnity"
        description="Meet the talented team behind Appnity. Our expert developers, designers, and strategists are dedicated to delivering exceptional digital solutions."
        keywords="Appnity team, software developers, UI/UX designers, tech team, development team, India tech company"
        path="/team"
      />


      <TeamMembers />
      <OurValues />
      <JoinOurTeam />
      <LetsConnect />
    </div>
  );
};

export default TeamPage;

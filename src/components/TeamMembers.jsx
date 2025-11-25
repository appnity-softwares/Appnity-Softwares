import React from "react";
import Slider from "react-slick";

// ⭐ DIRECT IMAGE IMPORTS
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

// ⭐ SAME FOUNDER IMAGE CARD
// ISSUE 1: 'Image' component was not defined. It's replaced with the standard 'img' tag.
const ImageCard = ({ image, social, name }) => {
    return (

        <div className="relative w-full  max-w-[350px] mx-auto">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden">
                {/* FIX: Replaced <Image> with <img> */}
                <img
                    src={image}
                    alt={name}
                    // className mein 'rounded-3xl' ko 'rounded-2xl' se match kiya for consistency, ya aap use 'rounded-3xl' bhi rakh sakte hain.
                    className="w-full h-[60vh] object-cover rounded-2xl"
                />
            </div>

            {/* Rotating Badge - (Abhi empty hai, agar aapko add karna hai toh yahan kar sakte hain) */}


            {/* Social Icons */}
            <div className="absolute bottom-4 left-4 flex space-x-3 z-30">
                {social.map((icon, i) => (
                    <a
                        key={i}
                        href={icon.url}
                        className="bg-[#302929] text-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
                        // Target="_blank" added for external links
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* Assuming 'icon' is a Font Awesome class */}
                        <i className={icon.icon}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

const rotateStyle = `
@keyframes rotateInfinite {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const TeamCarousel = () => {

    // ⭐ COMPLETE DATA INSIDE THIS FILE ONLY
    // ISSUE 2: Image property was assigned as { teamX }.
    // FIX: Image properties are now assigned directly as teamX.
    const teamMembers = [
        {
            name: "Aarav Sharma",
            title: "Project Coordinator",
            bio: "Handles project planning and administration.",
            image: team1, // FIX: Direct import reference
            social: [
                { icon: "fas fa-envelope", url: "mailto:aarav@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
        {
            name: "Neha Verma",
            title: "Public Relations Officer",
            bio: "Manages media communication and outreach.",
            image: team2, // FIX: Direct import reference
            social: [
                { icon: "fas fa-envelope", url: "mailto:neha@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
        {
            name: "Vikram Singh",
            title: "Technical Lead",
            bio: "Responsible for technical decisions and implementation.",
            image: team3, // FIX: Direct import reference
            social: [
                { icon: "fas fa-envelope", url: "mailto:vikram@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
    ];

    // ⭐ Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <div className="py-20 w-full h-full bg-[#f3f3f3] font-inter overflow-hidden relative">

            <style>{rotateStyle}</style>

            <h1 className="text-center text-4xl font-bold text-gray-900 mb-10">
                Meet Our Team
            </h1>

            <div className="container mx-auto px-6">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index}>
                            {/* Flex layout for desktop/large screens */}
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">

                                {/* IMAGE CARD */}
                                <ImageCard
                                    name={member.name}
                                    image={member.image} // member.image ab direct image path hai
                                    social={member.social}
                                />

                                {/* TEXT SECTION */}
                                <div className="max-w-xl text-center lg:text-left">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        {member.title}
                                    </h2>

                                    {/* Added a margin bottom here for better separation */}
                                    <p className="text-gray-700 leading-relaxed text-lg text-justify mb-4">
                                        {member.bio}
                                    </p>

                                    <hr className="border-t border-gray-400 my-8" />

                                    <p className="font-semibold text-gray-900 text-xl">
                                        {member.name}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default TeamCarousel;
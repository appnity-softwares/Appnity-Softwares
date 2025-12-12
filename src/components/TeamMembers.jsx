import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Direct Image Imports
import team1 from "../assets/founder.jpeg";
import team2 from "../assets/p-main.png";
import team3 from "../assets/team3.png";
// import team4 from "../assets/team4.png";
import team5 from "../assets/contact.png";

// Enhanced Image Card Component
const ImageCard = ({ image, social, name }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[400px] mx-auto group"
        >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-6 left-6 flex gap-3 z-30">
                {social.map((icon, i) => (
                    <motion.a
                        key={i}
                        href={icon.url}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-11 h-11 flex items-center justify-center hover:bg-orange-500 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={icon.icon}></i>
                    </motion.a>
                ))}
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
        </motion.div>
    );
};

const TeamCarousel = () => {
    const teamMembers = [
        {
            name: "Pushpa Raj",
            title: "The Founder",
            bio: "Visionary leader driving innovation and excellence. With a passion for technology and a commitment to delivering exceptional solutions, Pushpa leads the team with strategic thinking and hands-on expertise.",
            image: team1,
            social: [
                { icon: "fas fa-envelope", url: "mailto:pushparaj@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
                {
            name: "Saurabh Jain",
            title: "Technical Lead",
            bio: "Seasoned technologist with deep expertise in modern development practices. Saurabh architects robust solutions and mentors the team to deliver cutting-edge products.",
            image: team3,
            social: [
                { icon: "fas fa-envelope", url: "mailto:saurabh@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
        {
            name: "Kunal Dhariwal",
            title: "Associate Software Engineer",
            bio: "Expert in building meaningful connections and managing brand reputation. Kunal crafts compelling narratives and ensures our message resonates with audiences across all channels.",
            image: team2,
            social: [
                { icon: "fas fa-envelope", url: "mailto:kunal@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },

        {
            name: "Jatin Kurrey",
            title: "Full Stack Developer",
            bio: "Seasoned technologist with deep expertise in modern development practices. Jatin architects robust solutions and mentors the team to deliver cutting-edge products.",
            image: team3,
            social: [
                { icon: "fas fa-envelope", url: "mailto:jatin@example.com" },
                { icon: "fab fa-github", url: "https://github.com/" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/" }
            ]
        },
        {
            name: "Neha  Mourya",
            title: "Full Stack Developer",
            bio: "Seasoned technologist with deep expertise in modern development practices. Neha architects robust solutions and mentors the team to deliver cutting-edge products.",
            image: team5,
            social: [
                { icon: "fas fa-envelope", url: "mailto:mouryaneha53@gmail.com" },
                { icon: "fab fa-github", url: "https://github.com/nehamoury" },
                { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/nehamoury" }
            ]
        },
    ];

    // Enhanced Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        fade: true,
        cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
        customPaging: (i) => (
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-500 transition-all duration-300 mt-8"></div>
        ),
        dotsClass: "slick-dots !flex justify-center gap-3"
    };

    return (
        <div className="py-24 w-full  bg-[#f3f3f3] font-inter overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <p className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-3">Our Team</p>
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Meet The Experts
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
                    Talented individuals working together to create exceptional experiences
                </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="outline-none">
                            {/* Flex layout for desktop/large screens */}
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-4 py-8">

                                {/* IMAGE CARD */}
                                <ImageCard
                                    name={member.name}
                                    image={member.image}
                                    social={member.social}
                                />

                                {/* TEXT SECTION */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="max-w-xl text-center lg:text-left space-y-6"
                                >
                                    {/* Role Badge */}
                                    <div className="inline-block">
                                        <span className="bg-orange-50 text-orange-600 border border-orange-100 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                            {member.title}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                        {member.name}
                                    </h2>

                                    {/* Bio */}
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {member.bio}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                                        <div className="h-1 w-8 bg-gray-200 rounded-full"></div>
                                    </div>

                                    {/* Quote or Additional Info */}
                                    <div className="bg-gray-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                                        <p className="text-gray-700 italic text-sm">
                                            "Dedicated to excellence and innovation in everything we do."
                                        </p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Custom Slick Dots Styling */}
            <style jsx>{`
                .slick-dots li button:before {
                    display: none;
                }
                .slick-dots li.slick-active div {
                    background-color: #f97316;
                    transform: scale(1.3);
                }
            `}</style>
        </div>
    );
};

export default TeamCarousel;
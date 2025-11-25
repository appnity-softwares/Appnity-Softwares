
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShieldCheck, Zap, Handshake, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Zap size={40} className="text-orange-500" />,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive progress and create value.",
  },
  {
    icon: <ShieldCheck size={40} className="text-orange-500" />,
    title: "Integrity",
    description: "We believe in doing business with honesty and transparency. Our commitment to integrity is the bedrock of our client relationships.",
  },
  {
    icon: <Handshake size={40} className="text-orange-500" />,
    title: "Collaboration",
    description: "Teamwork is at the heart of our success. We foster a collaborative environment where diverse minds come together to achieve shared goals.",
  },
  {
    icon: <Lightbulb size={40} className="text-orange-500" />,
    title: "Excellence",
    description: "We are passionate about delivering the highest quality of work. We have a relentless drive to exceed expectations and achieve excellence in all we do.",
  },
];

const OurValues = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f3f3f3]  py-20 md:py-28 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-2"></p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            The Principles We Stand For
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;


import React from 'react';

const JoinOurTeam = () => {
  return (
    <section className="bg-gray-800 text-white py-20 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0v40M0 20h40" stroke="%23a0aec0" fill="none" stroke-width="1" stroke-linecap="square"/></svg>')` }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Want to Join Our Team?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to join our growing team. If you are driven by innovation and excellence, we would love to hear from you.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out">
          See Open Positions
        </button>
      </div>
    </section>
  );
};

export default JoinOurTeam;

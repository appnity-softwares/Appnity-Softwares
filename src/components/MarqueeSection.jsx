import React from 'react';


const MarqueeSection = () => {
  return (
    <div className="relative  w-full h-80 bg-[#dbdbdb] overflow-hidden flex items-center justify-center">
      {/* Orange Diagonal Marquee with DEPRECATED <marquee> tag */}
      <div 
        className="absolute w-[150%] h-16 bg-orange-500 transform -rotate-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center"
        style={{
          transform: 'translate(-50%, -50%) rotate(-6deg)',
          width: '150%'
        }}
      >
        {/* WARNING: <marquee> tag is DEPRECATED and not recommended */}
        {/* <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite"  className="whitespace-nowrap flex items-center h-full"> */}
          <div className="flex animate-marquee whitespace-nowrap items-center space-x-4 text-white font-bold text-2xl px-4 py-2">
           <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
             <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
          </div>
        {/* </marquee> */}
      </div>

      {/* Black Diagonal Marquee with DEPRECATED <marquee> tag */}
      <div 
        className="absolute w-[150%] h-16 bg-black transform rotate-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center"
        style={{
          transform: 'translate(-50%, -50%) rotate(6deg)',
          width: '150%',
          zIndex: 1
        }}
      >
        {/* WARNING: <marquee> tag is DEPRECATED and not recommended */}
        {/* <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite"
         className="whitespace-nowrap flex items-center h-full"> */}
          <div className="flex animate-marquee whitespace-nowrap items-center space-x-4 text-white font-bold text-2xl px-4 py-2">
           <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
             <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Senior Designer</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>10 Years of Experience</span>
            <span className="text-gray-400 text-lg">x</span>
            <span>Over 100 Customers</span>
            <span className="text-gray-400 text-lg">x</span>
          </div>
          
        {/* </marquee> */}
        
      </div>

 
    </div>
    
  );
};

export default MarqueeSection;
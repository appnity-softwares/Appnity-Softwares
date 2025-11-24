import React from 'react'
import BlurText from "./effect/BlurText.jsx";  // ya correct path

const ServiceCardHead = () => {
  return (
    <div>
       <div className="min-h-xs bg-[#dbdbdb] py-10 -mb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-gray-500 text-sm mb-0 px-28">(Services)</p>
          
          <h1 className="text-6xl md:text-6xl font-bold text-black px-28 typewriter ">
            <BlurText
              text="What we do"
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
              animateBy="words"
              direction="top"
            /></h1>
        </div>
       
      </div>
      
    </div>
    <style jsx>{`
  .typewriter {
  
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    filter: blur(15px);
    animation: fadeBlurIn 0.6s ease forwards, typing 2s    ;
  }   

  @keyframes fadeBlurIn {
    0% {
      opacity: 0;
      filter: blur(16px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`}</style>

    </div>
  )
}

export default ServiceCardHead

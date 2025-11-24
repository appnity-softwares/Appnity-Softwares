import React, { useState, memo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faqData.js'; // Data ko alag file se import kiya gaya hai

// AccordionItem component ko memoize kiya gaya hai taaki yeh bewajah re-render na ho.
const AccordionItem = memo(({ faq, isOpen, toggleAccordion }) => {
  return (
    <div 
      className={`
        bg-[#f0f0f0] 
        p-5 md:p-6 
        rounded-xl 
        shadow-sm 
        transition-all duration-300 
        ${isOpen ? 'ring-2 ring-gray-200' : 'hover:ring-1 hover:ring-gray-100'}
      `}
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="text-lg md:text-xl font-medium text-gray-900 pr-4">
          {faq.q}
        </span>
        <div className={`
          p-1 
          rounded-full 
          bg-gray-100 
          text-gray-900 
          transition-transform duration-300
          ${isOpen ? 'transform rotate-180' : ''}
        `}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div 
        className={`
          overflow-hidden 
          transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
        `}
      >
        <p className="text-gray-600 text-base md:text-lg">
          {faq.a}
        </p>
      </div>
    </div>
  );
});

const FAQSection = () => {
  const [activeId, setActiveId] = useState(2);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const leftColumnFAQs = faqs.slice(0, 3);
  const rightColumnFAQs = faqs.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#dbdbdb] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Questions, Answered
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Helping you understand our process and offerings at Appnity .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="flex flex-col space-y-8 md:space-y-10">
            {leftColumnFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-8 md:space-y-10">
            {rightColumnFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

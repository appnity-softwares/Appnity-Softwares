import React, { useEffect, useRef } from "react";
import { Check, ArrowRight, Square } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    id: 1,
    name: "Standard Plan",
    price: "500$",
    period: "/month",
    description:
      "Ideal for lean teams or startups needing clean, fast design delivery for websites or branding assets.",
    delivery: "4–6 weeks",
    features: [
      "You provide the wireframe",
      "Visual design using Figma & Framer",
      "Focused on website or branding only",
      "Weekday turnaround (Mon–Fri)",
    ],
    gradient: "from-white to-gray-50",
    textColor: "text-neutral-800",
    iconBg: "bg-neutral-200",
    buttonColor: "bg-neutral-800",
    buttonText: "text-white",
  },
  {
    id: 2,
    name: "Premium Plans",
    price: "Starting at $1000",
    period: "",
    description:
      "A complete design experience — tailored strategy, polished visuals, and flexible collaboration throughout the process.",
    delivery: "4–6 weeks",
    features: [
      "Help shaping your wireframe or brief",
      "Custom design for website, brand, or logo",
      "High-fidelity mockups using Figma & Framer",
      "Dedicated weekday focus & deeper involvement",
    ],
    gradient: "from-neutral-900 to-orange-700",
    textColor: "text-white",
    iconBg: "bg-neutral-800",
    buttonColor: "bg-neutral-800",
    buttonText: "text-white",
  },
];

const PricingSection= () => {
  const refs = useRef([]);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          if (entry.isIntersecting) {
            card.classList.add("scale-100", "opacity-100");
            card.classList.remove("scale-95", "opacity-80");
          } else {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2) {
              // Card has scrolled past the middle of the viewport
              card.classList.remove("scale-100", "opacity-100");
              card.classList.add("scale-95", "opacity-80");
            } else {
              // Card is below the viewport, or just entering
              card.classList.remove("scale-100", "opacity-100");
              card.classList.add("scale-95", "opacity-80");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-[#dbdbdb] min-h-screen flex flex-col items-center pt-20  pb-40 font-['sans-serif'] ">
      {/* Header */}
<header className="-mb-28 sm:mb-10 md:mb-20 text-center px-4">
        <p className="text-neutral-700 mb-2 font-serif">(Pricing Plan)</p>
        <h1 className="text-4xl md:text-7xl font-sans  text-neutral-950 leading-tight">
          <b>Explore Pricing</b>
        </h1>
      </header>

      {/* Cards Container */}
      <main ref={cardContainerRef} className="w-[90vw]  max-w-3xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            ref={(el) => (refs.current[index] = el)}
            className={`
              rounded-3xl shadow-xl transition-all duration-700 ease-out
              transform scale-95 opacity-80
              ${index === 0 ? 'z-20' : 'z-30'} /* Premium card (index 1) needs higher z-index when it scrolls up */
            `}
            style={{
                // Position the cards for the stacking effect
                position: 'sticky',
                // White card (index 0) sticks higher, orange card (index 1) sticks lower
                top: `${index * 50 + 20}px`,
                // Negative margin to bring the second card up and make it overlap
                marginTop: index === 1 ? '-100px' : '0', // Adjust this value for desired overlap
            }}
          >
            <div
              className={`bg-gradient-to-br ${plan.gradient} ${plan.textColor}
                grid grid-cols-1 lg:grid-cols-2 items-stretch p-8 md:p-10 rounded-3xl
                overflow-hidden h-full mt-28
              `}
            >
              {/* Left Section */}
              <div className="flex flex-col justify-between gap-6 text-left pr-0 lg:pr-8 pb-8 lg:pb-0">
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${plan.iconBg} flex items-center justify-center rounded-xl shadow-md`}
                >
                  <Square
                    size={24}
                    className={plan.textColor === 'text-white' ? 'text-white' : 'text-neutral-800'}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-semibold mb-3 leading-tight">
                    {plan.name}
                  </h2>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm border-t border-current/20 pt-4 mt-8">
                  <p className="opacity-70">Delivery Time</p>
                  <p className="font-medium">{plan.delivery}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col justify-between h-full pl-0 lg:pl-8 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-current/20">
                <div>
                  <h3 className="text-4xl font-bold mb-5 leading-tight">
                    {plan.price}
                    {plan.period && (
                      <span className="text-base font-normal ml-1 opacity-70">
                        {plan.period}
                      </span>
                    )}
                  </h3>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base"
                      >
                        <Check
                          size={18}
                          className={plan.id === 1 ? 'text-neutral-600 mt-1 flex-shrink-0' : 'text-orange-400 mt-1 flex-shrink-0'}
                          strokeWidth={2.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-10  flex items-center justify-center gap-2 rounded-full px-7 py-3 font-medium text-base
                    ${plan.buttonColor} ${plan.buttonText} hover:opacity-90 transition
                  `}
                >
                  Get Started <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PricingSection;
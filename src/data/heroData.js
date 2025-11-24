
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.avif';
import london from '../assets/london.png';
import startup from '../assets/startup.png';

const heroData = {
  trustedBy: {
    text: "Trusted by founders.",
    images: [p1, p2, p3],
  },
  heading: {
    line1: [
      { type: 'text', value: 'Effortless' },
      { type: 'image', src: p2, alt: 'design' },
      { type: 'text', value: 'Design', className: 'text-orange-600' }
    ],
    line2: [
      { type: 'text', value: 'for' },
      { type: 'image', src: startup, alt: 'startup' },
      { type: 'text', value: 'Startups' }
    ],
    line3: [
      { type: 'text', value: 'based in' },
      { type: 'text', value: 'Bhilai ,', className: 'text-gray-900 font-bold' },
      { type: 'image', src: london, alt: 'london' },
      { type: 'text', value:'(C.G)' }
    ]
  },
  description: "We make it easy for startups to launch, grow, and scale with clean, conversion-focused designs — no delays, no drama.",
  buttonText: "View Plans"
};

export default heroData;

export const blogData = [
    {
        id: 1,
        slug: "bridging-design-development",
        image: "https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png",
        title: "Bridging Design & Development",
        description: "Clean UI into seamless code",
        readTime: "2 Min Read",
        author: "Appnity Team",
        date: "December 10, 2025",
        category: "Design",
        tags: ["Design", "Development", "UI/UX"],
        content: {
            intro: "In today's digital landscape, the gap between design and development can make or break a project. Learn how to bridge this gap effectively and create seamless user experiences.",
            sections: [
                {
                    heading: "Understanding the Gap",
                    text: "The disconnect between designers and developers often stems from different perspectives and tools. Designers focus on aesthetics and user experience, while developers prioritize functionality and performance. This divide can lead to miscommunication, delays, and compromised final products."
                },
                {
                    heading: "Best Practices for Collaboration",
                    text: "Successful collaboration requires clear communication, shared tools, and mutual understanding. Design systems, component libraries, and regular sync meetings help align both teams. Tools like Figma, Storybook, and design tokens create a common language that both designers and developers can understand."
                },
                {
                    heading: "Tools That Help",
                    text: "Modern tools have made it easier than ever to bridge the design-development gap. Figma's developer handoff features, Zeplin for specifications, and design systems like Material-UI or Chakra UI provide ready-to-use components that maintain design consistency while speeding up development."
                },
                {
                    heading: "The Future of Design-Dev Collaboration",
                    text: "As AI and automation tools evolve, we're seeing new possibilities for design-to-code conversion. However, the human element of understanding user needs and making thoughtful decisions remains irreplaceable. The future lies in augmenting human creativity with intelligent tools."
                }
            ],
            conclusion: "Bridging design and development isn't just about tools—it's about fostering a culture of collaboration, empathy, and shared goals. When designers and developers work together seamlessly, the result is products that are both beautiful and functional."
        }
    },
    {
        id: 2,
        slug: "high-performance-website",
        image: "https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?scale-down-to=1024",
        title: "High-Performance Website",
        description: "Principles dev should build with",
        readTime: "3 Min Read",
        author: "Appnity Team",
        date: "December 8, 2025",
        category: "Development",
        tags: ["Performance", "Web Development", "Optimization"],
        content: {
            intro: "Website performance is crucial for user experience and SEO. A slow website can cost you visitors, conversions, and revenue. Let's explore the key principles for building high-performance websites.",
            sections: [
                {
                    heading: "Core Web Vitals Matter",
                    text: "Google's Core Web Vitals—LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift)—are now ranking factors. Optimizing these metrics improves both user experience and search rankings. Focus on fast loading times, responsive interactions, and visual stability."
                },
                {
                    heading: "Optimize Images and Assets",
                    text: "Images often account for the majority of page weight. Use modern formats like WebP or AVIF, implement lazy loading, and serve responsive images. Compress and minify CSS and JavaScript files. Consider using a CDN to serve static assets faster to users worldwide."
                },
                {
                    heading: "Efficient Code Practices",
                    text: "Write clean, efficient code. Avoid unnecessary re-renders in React, use code splitting to reduce initial bundle size, and implement tree shaking to eliminate dead code. Server-side rendering (SSR) or static site generation (SSG) can dramatically improve initial load times."
                },
                {
                    heading: "Monitoring and Continuous Improvement",
                    text: "Performance optimization is an ongoing process. Use tools like Lighthouse, WebPageTest, and Chrome DevTools to identify bottlenecks. Set up performance budgets and monitor real user metrics (RUM) to ensure your site stays fast as it evolves."
                }
            ],
            conclusion: "Building high-performance websites requires attention to detail and continuous optimization. By following these principles and regularly monitoring performance, you can create fast, responsive websites that delight users and rank well in search engines."
        }
    },
    {
        id: 3,
        slug: "design-that-converts",
        image: "https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png",
        title: "Design That Converts",
        description: "Strategic visuals drive results",
        readTime: "2 Min Read",
        author: "Appnity Team",
        date: "December 5, 2025",
        category: "Design",
        tags: ["Conversion", "UX Design", "Strategy"],
        content: {
            intro: "Great design isn't just about aesthetics—it's about driving results. Learn how strategic visual design can significantly improve conversion rates and business outcomes.",
            sections: [
                {
                    heading: "Psychology of Visual Hierarchy",
                    text: "Users scan websites in predictable patterns (F-pattern, Z-pattern). Use visual hierarchy to guide attention to key elements like CTAs, value propositions, and important information. Size, color, contrast, and whitespace all play crucial roles in directing user focus."
                },
                {
                    heading: "Color Psychology and Trust",
                    text: "Colors evoke emotions and influence decisions. Blue builds trust, red creates urgency, green suggests growth. Consistent brand colors increase recognition by 80%. Use color strategically to reinforce your message and guide user actions."
                },
                {
                    heading: "Clear Call-to-Actions",
                    text: "Your CTA should be impossible to miss. Use contrasting colors, action-oriented copy, and strategic placement. A/B test different variations to find what resonates with your audience. Make the next step obvious and compelling."
                },
                {
                    heading: "Social Proof and Credibility",
                    text: "Testimonials, reviews, case studies, and trust badges significantly impact conversion rates. Display them prominently near decision points. Real photos, specific numbers, and verified badges increase credibility and reduce purchase anxiety."
                }
            ],
            conclusion: "Conversion-focused design combines psychology, strategy, and aesthetics. By understanding user behavior and applying proven principles, you can create designs that not only look great but also drive measurable business results."
        }
    },
    {
        id: 4,
        slug: "modern-web-animations",
        image: "https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?scale-down-to=1024",
        title: "Modern Web Animations",
        description: "Bringing interfaces to life",
        readTime: "2 Min Read",
        author: "Appnity Team",
        date: "December 3, 2025",
        category: "Development",
        tags: ["Animation", "CSS", "JavaScript"],
        content: {
            intro: "Animations can transform static interfaces into engaging, delightful experiences. When done right, they guide users, provide feedback, and make interactions feel natural and intuitive.",
            sections: [
                {
                    heading: "Purpose-Driven Animation",
                    text: "Every animation should serve a purpose—whether it's providing feedback, guiding attention, or creating delight. Avoid animations that distract or slow down the user experience. Focus on micro-interactions that enhance usability."
                },
                {
                    heading: "Performance Considerations",
                    text: "Animations should be smooth and performant. Use CSS transforms and opacity for hardware-accelerated animations. Avoid animating properties that trigger layout recalculations. Keep animations under 300ms for quick feedback, longer for dramatic effects."
                },
                {
                    heading: "Animation Libraries and Tools",
                    text: "Modern tools like Framer Motion, GSAP, and Lottie make complex animations accessible. CSS animations and transitions handle simple cases efficiently. Choose the right tool based on complexity, performance requirements, and team expertise."
                },
                {
                    heading: "Accessibility and User Preferences",
                    text: "Respect user preferences with prefers-reduced-motion media query. Some users experience motion sickness or find animations distracting. Provide alternatives or reduce animation intensity for these users while maintaining core functionality."
                }
            ],
            conclusion: "Thoughtful animations elevate user experience from functional to delightful. By balancing aesthetics with performance and accessibility, you can create interfaces that feel alive and responsive."
        }
    },
    {
        id: 5,
        slug: "responsive-design-principles",
        image: "https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?scale-down-to=1024",
        title: "Responsive Design Principles",
        description: "Adapting to every screen size",
        readTime: "2 Min Read",
        author: "Appnity Team",
        date: "December 1, 2025",
        category: "Design",
        tags: ["Responsive Design", "Mobile", "CSS"],
        content: {
            intro: "With users accessing websites from countless devices, responsive design is no longer optional—it's essential. Learn the principles that ensure your designs work beautifully everywhere.",
            sections: [
                {
                    heading: "Mobile-First Approach",
                    text: "Start designing for mobile screens and progressively enhance for larger displays. This ensures core content and functionality work on the smallest screens, then add enhancements for tablets and desktops. Mobile-first also improves performance by loading only what's necessary."
                },
                {
                    heading: "Fluid Grids and Flexible Images",
                    text: "Use relative units (%, em, rem, vw, vh) instead of fixed pixels. CSS Grid and Flexbox make creating flexible layouts easier than ever. Images should scale with their containers and use srcset for different resolutions."
                },
                {
                    heading: "Breakpoints and Media Queries",
                    text: "Choose breakpoints based on content, not specific devices. Common breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop), 1280px (large desktop). Use media queries to adjust layouts, typography, and spacing at each breakpoint."
                },
                {
                    heading: "Touch-Friendly Interactions",
                    text: "Mobile users interact with touch, not mouse. Ensure tap targets are at least 44x44px, provide adequate spacing between interactive elements, and consider thumb-friendly navigation patterns. Test on real devices to ensure comfortable interaction."
                }
            ],
            conclusion: "Responsive design is about creating flexible, adaptable experiences that work everywhere. By following these principles and testing across devices, you ensure all users have a great experience regardless of how they access your site."
        }
    },
    {
        id: 6,
        slug: "design-systems-guide",
        image: "https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?scale-down-to=1024",
        title: "Building Design Systems",
        description: "Consistency at scale",
        readTime: "2 Min Read",
        author: "Appnity Team",
        date: "November 28, 2025",
        category: "Design",
        tags: ["Design Systems", "Components", "Scalability"],
        content: {
            intro: "Design systems are the foundation of consistent, scalable product design. They enable teams to build faster while maintaining quality and coherence across all touchpoints.",
            sections: [
                {
                    heading: "What is a Design System?",
                    text: "A design system is more than a component library—it's a collection of reusable components, patterns, guidelines, and principles that define how your product looks and behaves. It includes visual design, interaction patterns, voice and tone, and code standards."
                },
                {
                    heading: "Building Blocks: Tokens and Components",
                    text: "Start with design tokens—the atomic values like colors, spacing, typography, and shadows. These tokens feed into components—buttons, inputs, cards, etc. Each component should have clear documentation, usage guidelines, and code examples."
                },
                {
                    heading: "Documentation and Governance",
                    text: "A design system is only valuable if people use it correctly. Comprehensive documentation, live examples, and clear contribution guidelines are essential. Establish governance to maintain quality and consistency as the system evolves."
                },
                {
                    heading: "Adoption and Evolution",
                    text: "Rolling out a design system requires buy-in from both design and development teams. Start small, demonstrate value, and iterate based on feedback. A design system should evolve with your product, not constrain it."
                }
            ],
            conclusion: "Design systems are investments that pay dividends in efficiency, consistency, and quality. By establishing clear patterns and components, teams can focus on solving user problems rather than reinventing the wheel."
        }
    }
];

export const getBlogById = (id) => {
    return blogData.find(blog => blog.id === parseInt(id));
};

export const getBlogBySlug = (slug) => {
    return blogData.find(blog => blog.slug === slug);
};

export const getRelatedBlogs = (currentBlogId, limit = 3) => {
    return blogData
        .filter(blog => blog.id !== currentBlogId)
        .slice(0, limit);
};

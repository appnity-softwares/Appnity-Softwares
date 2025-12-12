import React from 'react'
import Hero from '../components/Hero.jsx'
import BlogInsights from '../components/BlogInsights.jsx'
import SEOHead from '../components/SEOHead.jsx'

const BlogPage = () => {
  return (
    <div>
      <SEOHead
        title="Blog - Insights on Web Development, Design & Technology"
        description="Explore the latest insights on web development, UI/UX design, mobile apps, and technology trends from the Appnity team. Stay updated with industry best practices."
        keywords="tech blog, web development blog, UI/UX design, mobile development, React, software engineering, Appnity blog"
        path="/blog"
      />
      <Hero />
      <BlogInsights />


    </div>
  )
}

export default BlogPage

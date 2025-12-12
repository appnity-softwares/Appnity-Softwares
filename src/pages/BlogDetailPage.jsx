import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogById, getRelatedBlogs } from "../data/blogData";
import SEOHead from "../components/SEOHead";

const BlogDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = getBlogById(id);
    const relatedBlogs = getRelatedBlogs(parseInt(id), 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Convert date string to ISO format for structured data
    const formatDateForSchema = (dateStr) => {
        const months = {
            'January': '01', 'February': '02', 'March': '03', 'April': '04',
            'May': '05', 'June': '06', 'July': '07', 'August': '08',
            'September': '09', 'October': '10', 'November': '11', 'December': '12'
        };
        const parts = dateStr.replace(',', '').split(' ');
        if (parts.length === 3) {
            const month = months[parts[0]] || '01';
            const day = parts[1].padStart(2, '0');
            const year = parts[2];
            return `${year}-${month}-${day}`;
        }
        return new Date().toISOString().split('T')[0];
    };

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <SEOHead
                    title="Blog Not Found"
                    description="The blog you're looking for doesn't exist."
                    path={`/blog/${id}`}
                />
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate("/blog")}
                        className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <SEOHead
                title={blog.title}
                description={blog.description}
                keywords={blog.tags?.join(', ')}
                path={`/blog/${id}`}
                image={blog.image}
                type="article"
                article={{
                    title: blog.title,
                    description: blog.description,
                    author: blog.author,
                    image: blog.image,
                    datePublished: formatDateForSchema(blog.date),
                    tags: blog.tags,
                }}
            />
            {/* 1. Header Section */}
            <div className="relative pt-24 pb-12 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">


                {/* Breadcrumb - Absolute Top Left */}
                <nav className="absolute top-6 left-6 text-xs sm:text-sm hidden sm:block z-10">
                    <Link to="/" className="text-gray-500 hover:text-black transition-colors font-medium">
                        Home
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/blog" className="text-gray-500 hover:text-black transition-colors font-medium">
                        Blog
                    </Link>
                </nav>

                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* Category Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-6"
                    >
                        <span className="bg-orange-50 text-orange-600 border border-orange-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            {blog.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight"
                    >
                        {blog.title}
                    </motion.h1>

                    {/* Subtitle/Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
                    >
                        {blog.description}
                    </motion.p>

                    {/* Author & Meta Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-500"
                    >
                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Author"
                                className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-100"
                            />
                            <div className="flex flex-col items-start sm:items-center">
                                <span className="font-bold text-gray-900 leading-none">{blog.author}</span>
                                <span className="text-xs text-gray-400 hidden sm:block">Author</span>
                            </div>
                        </div>

                        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

                        {/* Date */}
                        <div className="flex flex-col items-start sm:items-center">
                            <span className="font-medium text-gray-900 leading-none">{blog.date}</span>
                            <span className="text-xs text-gray-400">Published</span>
                        </div>

                        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

                        {/* Read Time */}
                        <div className="flex flex-col items-start sm:items-center">
                            <span className="font-medium text-gray-900 leading-none">{blog.readTime}</span>
                            <span className="text-xs text-gray-400">Read time</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. Featured Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24"
            >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-video bg-gray-50">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* 3. Content Section */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Introduction */}
                <div className="prose prose-lg prose-gray max-w-none mb-16">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal">
                        {blog.content.intro}
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {blog.content.sections.map((section, index) => (
                        <div key={index} className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                {section.heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {section.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Conclusion */}
                <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Conclusion
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {blog.content.conclusion}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Share Section */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
                    <div className="flex gap-3">
                        <button className="bg-white text-blue-600 p-3 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button className="bg-white text-sky-500 p-3 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </button>
                        <button className="bg-white text-blue-700 p-3 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-100">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </article>

            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
                <section className="bg-gray-50 py-20 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                                Related Articles
                            </h2>
                            <Link to="/blog" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                                View all →
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBlogs.map((relatedBlog) => (
                                <div
                                    key={relatedBlog.id}
                                    onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={relatedBlog.image}
                                            alt={relatedBlog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            {relatedBlog.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
                                            <span>{relatedBlog.date}</span>
                                            <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                                            <span>{relatedBlog.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
                                            {relatedBlog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {relatedBlog.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back to Blog Floating Button - Optional, or kept at bottom */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => navigate("/blog")}
                    className="bg-white text-gray-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:scale-105 group"
                    title="Back to All Blogs"
                >
                    <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogDetailPage;

import Link from 'next/link';
import { blogs } from './blogs';

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-background border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-display font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            Real Estate Blog
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover expert insights, tips, and guides to help you navigate the real estate market with confidence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex gap-8">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog.id}
                            className={`bg-white border-2 border-truffle-green rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden  ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                                }`}
                        >
                            <Link href={`/blog/${blog.slug}`} className="block h-full">
                                <div className="p-8">
                                    {/* Featured Badge */}
                                    {index === 0 && (
                                        <div className="mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-truffle-green-light/10 text-truffle-green-light">
                                                Featured Post
                                            </span>
                                        </div>
                                    )}

                                    {/* Blog Title */}
                                    <h2 className={`font-bold text-gray-900 hover:text-truffle-green-light transition-colors duration-200 mb-4 text-xl`}>
                                        {blog.title}
                                    </h2>

                                    {/* Blog Excerpt */}
                                    <p className={`text-gray-600 mb-6`}>
                                        {blog.excerpt}
                                    </p>

                                    {/* Blog Meta */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                                            <span className="font-medium">{blog.author}</span>
                                            <span>•</span>
                                            <time dateTime={blog.publishedDate}>
                                                {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {blog.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="flex items-center text-truffle-green-light hover:text-truffle-green font-medium group">
                                        <span>Read more</span>
                                        <svg
                                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Load More Button (if you plan to have more posts) */}
                {blogs.length > 6 && (
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Load More Posts
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}
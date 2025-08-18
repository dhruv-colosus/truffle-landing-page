import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogs } from '../blogs';
import Image from 'next/image';

interface BlogPageProps {
    params: {
        blogTitle: string;
    };
}

export default function BlogPost({ params }: BlogPageProps) {
    const { blogTitle } = params;

    console.log(blogTitle)
    // Find the blog post by slug
    const blog = blogs.find(b => b.slug === blogTitle);


    // If blog not found, show 404
    if (!blog) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-background">
            {/* Breadcrumb */}
            <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li>
                        <Link href="/" className="hover:text-gray-700">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/blog" className="hover:text-gray-700">
                            Blog
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-900 font-medium">{blog.title}</li>
                </ol>
            </nav>

            {/* Blog Header */}
            <header className="mb-8 border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between  pb-4">
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block bg-truffle-green-light/10 text-truffle-green-light text-xs px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="h-64 w-fit">
                    <Image
                        src={blog.imgSrc}
                        width={200}
                        height={200}
                        alt={`${blog.title} Blog Image`}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </header>

            {/* Blog Content */}
            {/* <article className="prose prose-lg max-w-none">
                <div
                    className="text-gray-700 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </article> */}
            <article className="max-w-none text-gray-800 leading-relaxed space-y-6">
                <div
                    className="[&>h1]:font-display [&>h2]:font-display [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6
               [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4
               [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3
               [&>p]:text-base [&>p]:leading-7 [&>p]:text-gray-700 [&>p]:mb-4
               [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
               [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
               [&>li]:text-gray-700 [&>strong]:font-semibold [&>strong]:text-gray-900 
               [&>a]:text-truffle-green-light [&>a]:hover:underline
               [&>img]:rounded-xl [&>img]:shadow-md
               "
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </article>
            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-truffle-green-light hover:text-truffle-green font-medium"
                >
                    ← Back to all posts
                </Link>
            </div>

            {/* Related Posts */}
            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">More Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {blogs
                        .filter(b => b.id !== blog.id)
                        .slice(0, 2)
                        .map((relatedBlog) => (
                            <Link
                                key={relatedBlog.id}
                                href={`/blog/${relatedBlog.slug}`}
                                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                            >
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {relatedBlog.title}
                                </h4>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {relatedBlog.excerpt}
                                </p>
                                <div className="mt-3 text-xs text-gray-500">
                                    {new Date(relatedBlog.publishedDate).toLocaleDateString()}
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
}

// Generate static params for all blog posts (optional, for static generation)
// export async function generateStaticParams() {
//     return blogs.map((blog) => ({
//         blogTitle: blog.slug,
//     }));
// }

// Generate metadata for each blog post (optional, for SEO)
// export async function generateMetadata({ params }: BlogPageProps) {
//     const blog = blogs.find(b => b.slug === params.blogTitle);

//     if (!blog) {
//         return {
//             title: 'Blog Post Not Found',
//         };
//     }

//     return {
//         title: blog.title,
//         description: blog.excerpt,
//     };
// }
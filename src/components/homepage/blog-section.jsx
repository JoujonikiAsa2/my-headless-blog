"use client"
import { useFetch } from '../../utils/useFetch';
import React from 'react'
import BlogCard from '../blogs/blog-card';
import ContactForm from './contact-form';
import { query } from '../../constants/global';
import TrendingBlog from './trending-blog';
import FeaturedBlog from './featured-blog';

export default function BlogSection() {
    const [totalBlog, setTotalBlog] = React.useState(12);
    const { data, loading, error } = useFetch({ query: query });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const posts = data?.posts?.nodes ?? [];
    return (
        <div className='my-14 flex gap-20'>
            <div className="w-[68%] h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts?.slice(0, totalBlog).map(blog => (
                    <BlogCard key={blog.id} blog={blog} cardSize="md" />
                ))}
                {totalBlog > 12 && <div className='col-span-2 flex justify-center items-center mt-6'><button className={`flex items-center justify- gap-1 bg-foreground dark:bg-[#343434] text-white px-[16px] py-[8px] rounded-full font-bold text-sm hover:cursor-pointer hover:bg-[#635BFF] ${totalBlog > 12 && "bg-[#635BFF]"} buy-button`} onClick={() => setTotalBlog(prev => prev + 12)}>Load More</button></div>}
            </div>
            <div className='w-[30%] space-y-10'>
                <ContactForm />
                <FeaturedBlog />
                <TrendingBlog />
            </div>
        </div>
    )
}

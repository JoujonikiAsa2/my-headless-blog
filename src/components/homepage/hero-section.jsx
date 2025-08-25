"use client";
import { useFetch } from "@/utils/useFetch";
import BlogCard from "../blogs/card";

export default function HeroSection() {

    const { posts, loading } = useFetch();
    console.log(posts)
    return (
        <div className="flex gap-[1.5%] hero">
            <div className="w-[60%] hero-left">
                {posts.slice(0, 1).map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
            <div className="w-[38.5%] flex flex-col justify-between hero-right">
                {posts.slice(1, 3).map(blog => (
                    <BlogCard key={blog.id} blog={blog} cardSize="small" />
                ))}
            </div>
        </div>

    )
}
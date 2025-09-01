"use client";
import { useFetch } from "../../utils/useFetch";
import BlogCard from "../blogs/blog-card";
import { query } from "../../constants/global";

export default function HeroSection() {

  const { data, loading, error } = useFetch({ query:query });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const posts = data?.posts?.nodes ?? [];
    return (
        <div className="flex gap-[1.5%] hero">
            <div className="w-[60%] hero-left">
                {posts?.slice(0, 1).map(blog => (
                    <BlogCard key={blog.id} blog={blog} cardSize="lg"/>
                ))}
            </div>
            <div className="w-[38.5%] flex flex-col justify-between hero-right">
                {posts?.slice(1, 3).map(blog => (
                    <BlogCard key={blog.id} blog={blog} cardSize="sm"/>
                ))}
            </div>
        </div>

    )
}
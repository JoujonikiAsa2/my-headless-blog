"use client";
import { fetchPosts } from '@/utils/useFetch';
import React, { useEffect, useState } from 'react';


export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts()
            .then(data => console.log(data.data.posts.nodes) || setPosts(data.data.posts.nodes))
            .catch(() => setPosts([]))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;

    console.log(posts)
    return (
        <main>
            <h1>Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div className='flex flex-wrap gap-4'>
                    {posts.map(post => (
                        <div key={post.id} className='w-64 bg-yellow-500 border-b border-black p-4'>
                            <img src={post.featuredImage.node.sourceUrl} />
                            <a href={`/posts/${post.uri}`}>{post.title}</a>
                            <div className='text-sm text-gray-600 mt-2' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
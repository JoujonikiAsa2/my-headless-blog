"use client";

import Loading from "@/app/loading";
import { use, useEffect, useState } from "react";

export default function PostPage({ params }) {
    const { slug } = use(params);

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchPost(slugValue) {
        const query = `
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          content
        }
      }
    `;

        const res = await fetch("http://localhost/blog/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: { slug: slugValue } }),
        });

        if (!res.ok) throw new Error("Failed to fetch post");
        const { data } = await res.json();
        return data.post;
    }

    useEffect(() => {
        if (!slug) return;
        fetchPost(slug)
            .then((data => {
                console.log(data)
                setPost(data)
            }))
            .catch(() => setPost(null))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <div><Loading/></div>;
    if (!post) return <div>Post not found.</div>;

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <article className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>
    );
}

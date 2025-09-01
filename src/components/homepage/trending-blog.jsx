"use client"
import { useFetch } from '../../utils/useFetch'
import React from 'react'
import BlogCard from '../blogs/blog-card'

export default function TrendingBlog() {

    const query = `{
              posts(where: {tag: "trending"}) {
              nodes {
                id
                title
                content
                excerpt
                postReadingTime {
                  readingTime
                }
                author {
                  node {
                    name
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                commentCount
                date
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
                commentCount
                date
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                  tags {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
              }
  }
}
`

    const { data } = useFetch({ query })
    const posts = data?.posts?.nodes ?? []

    return (
        <div>
            <h2 className="text-sm text-[#435366] font-bold mb-4">Trending Post</h2>
            <div className="grid grid-cols-1 gap-4">
                {posts?.slice(0,1)?.map(blog => (
                    <BlogCard key={blog.id} blog={blog} cardSize="md" />
                ))}
            </div>
        </div>
    )
}

"use client";

import React from "react";
import { useFetch } from "../../../../utils/useFetch";
import Image from "next/image";
import TrendingBlog from "../../../../components/homepage/trending-blog";
import FeaturedBlog from "../../../../components/homepage/featured-blog";
import youtubeLogo from '../../../../assets/icons/youtube.png'
import twitterLogo from '../../../../assets/icons/twitter.png'
import socialLogo from '../../../../assets/icons/social.png'
import facebookLogo from '../../../../assets/icons/facebook.png'
import media from '../../../../assets/icons/media.png'
import layer from '../../../../assets/icons/layer.png'
import { RiChat1Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuAlarmClockPlus } from "react-icons/lu";
import Link from "next/link";
import Loading from "../../../../app/loading";

export default function PostPage({ params }) {
  const { slug } = React.use(params);
  console.log("Slug:", slug.join("/"));
  const query = `
    query GetSinglePost {
      post(id: "${slug.join("/")}", idType: URI) {
        id
        title
        content
        excerpt
        postReadingTime { readingTime }
        author {
                      node {
                        name
                        avatar{
                          url
                        }
                      }
                    }
        categories { nodes { name } }
        commentCount
        date
        uri
        featuredImage { node { sourceUrl } }
        tags { edges { node { id name } } }
      }
    }
  `;

  const { data, loading } = useFetch({ query });
  const post = data?.post ?? null;

  if (loading) return <Loading />;
  if (!post) return <div>Post not found.</div>;

  const screenHeight = window.innerHeight;
  console.log("Screen Height:", screenHeight);

  return (
    <div className="flex gap-20">
      <div className="w-[68%]">
        <div className="rounded-lg w-full bg-white">
          <Image src={post.featuredImage?.node?.sourceUrl} alt={post.title} width={300} height={300} className={`thumbnail rounded-lg w-full h-[461px] object-cover`} />
          <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <hr />
            <div className="mt-6 text-sm text-gray-500 flex gap-2 justify-between flex-wrap">
              <div className="flex gap-4">
                <Image src={post?.author?.node?.avatar?.url} alt={post?.author?.node?.name} width={32} height={32} className={`size-14 rounded-lg object-contain`} />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[#435366] font-semibold">{post?.author?.node?.name}</p><FaAngleRight />
                  </div>
                  <div className='flex gap-1'>
                    <Image src={youtubeLogo} alt="" className='size-6' />
                    <Image src={twitterLogo} alt="" className='size-6' />
                    <Image src={socialLogo} alt="" className='size-6' />
                    <Image src={facebookLogo} alt="" className='size-6' />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="px-2 py-1 w-fit bg-background text-[#635BFF] text-xs font-bold rounded-full">{post.categories?.nodes[0]?.name}</div>
                <div className="flex gap-2 items-center text-[#435366] font-semibold">
                  <div className="w-fit h-[20px] px-2 pt-0 flex gap-1 items-center border-[1px] border-gray-300 rounded-full"><RiChat1Line /><span className="text-sm">{post.commentCount} </span> </div>
                  <div className="flex gap-2 items-center text-sm flex-wrap">
                    <FaAngleRight />
                    <p>{new Date(post.date).toString().slice(4, 15)}</p>
                    <p><LuAlarmClockPlus /></p><p>{post.postReadingTime.readingTime} min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="sticky left-0 top-0 h-fit flex justify-center items-center">
            <div className="absolute left-0 top-0 flex flex-col gap-2 justify-center items-center p-2 bg-white rounded-full shadow-md">
              <Image src={facebookLogo} alt="" className="size-8" />
              <Image src={twitterLogo} alt="" className="size-8" />
              <Image src={media} alt="" className="size-10" />
              <Image src={layer} alt="" className="size-8" />
            </div>
          </div>
          <div>
            <div className="ml-[78px] flex items-center gap-2 text-sm mb-6">
              <div className="flex gap-0.5 items-center">
                <Link href={`/`} className={`text-[#687FE5] underline hover:no-underline transition duration-300`}>
                  Home
                </Link>
                <FaAngleRight size={10} />
              </div>
              <div className="flex gap-0.5 items-center">
                <Link href={`/platform/category/${post?.categories?.nodes[0]?.name.toLowerCase()}`} className={`text-[#687FE5] underline hover:no-underline transition duration-300`}>
                  {post?.categories?.nodes[0]?.name}
                </Link>
                <FaAngleRight size={10} />
              </div>
              <div className="flex gap-0.5 items-center">
                <Link href={`/blog/${post?.slug}`}>
                  {post?.title}
                </Link>
              </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: post?.content }} />
          </div>
        </div>
      </div>
      <div className="w-[30%] space-y-10">
        <FeaturedBlog />
        <TrendingBlog />
      </div>
    </div>
  );
}

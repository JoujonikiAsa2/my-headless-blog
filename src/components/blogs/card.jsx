import { RiChat1Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuAlarmClockPlus } from "react-icons/lu";

import Image from 'next/image'
import React from 'react'

export default function BlogCard({ blog, cardSize}) {
  return (
    <div className={`blog-card text-white relative ${cardSize === "small" ? "w-full  h-[220px]" : "w-full h-[460px]"}`}>
      <Image src={blog.featuredImage?.node?.sourceUrl} alt={blog.title} width={300} height={300} className="thumbnail rounded-lg w-full h-full"/>
      <div className="card-overlay absolute bottom-0 left-0 right-0 p-4 w-full h-full bg-black/50 rounded-lg"></div>
      <div className="absolute top-4 left-4 px-2 py-1 w-fit bg-background text-[#635BFF] text-xs font-bold rounded-full">{blog.categories?.nodes[0]?.name}</div>
      <div className={`space-y-6 absolute bottom-0 left-0 right-0  ${cardSize === "small" ? "w-[94%] p-4" : "w-[70%] p-8"} w-[100%] sm:w-full`}>
        <h2 className={`font-bold ${cardSize === "small" ? "text-xl" : "text-4xl"}`}>{blog.title}</h2>
        <div className="flex gap-2 items-center">
          <div className="w-fit h-[20px] px-2 pt-0 flex gap-1 items-center border-[1px] border-gray-300 rounded-full"><RiChat1Line /><span className="text-sm">{blog.commentCount} </span> </div>
          <div className="flex gap-2 items-center text-sm flex-wrap">
           { cardSize !== "small" && <p className="capitalize">{blog.author.node.name}</p>}
            <FaAngleRight />
            <p>{new Date(blog.date).toString().slice(4, 15)}</p>
            <p><LuAlarmClockPlus /></p><p>{blog.postReadingTime.readingTime} min read</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { RiChat1Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { LuAlarmClockPlus } from "react-icons/lu";

import Image from 'next/image'
import React from 'react'
import Link from "next/link";

export default function BlogCard({ blog, cardSize }) {
  return (
    <>
      <Link href={`/platform${blog.uri}`}>
        <div className={`group blog-card hover:cursor-pointer ${cardSize === "sm" && "w-full  h-[220px] text-white"} ${cardSize === "lg" && "w-full h-[460px] text-white"} ${cardSize === "md" && "w-full h-[400px] bg-white rounded-lg"}`}>
          <div className="relative h-full">
            <div className="relative z-10 rounded-lg h-full ">
              <Image src={blog.featuredImage?.node?.sourceUrl} alt={blog.title} width={300} height={300} className={`thumbnail rounded-lg w-full ${cardSize == "md" ? "h-[250px]" : "h-full"} object-cover`} />
              <div className="absolute top-4 left-4 px-2 py-1 w-fit bg-background text-[#635BFF] text-xs font-bold rounded-full">{blog.categories?.nodes[0]?.name}</div>
              <div className={` flex flex-col gap-4 bottom-0 left-0 right-0 ${cardSize === "sm" && "absolute w-[94%] p-4"} ${cardSize === "lg" && "absolute w-[80%] p-8"} ${cardSize === "md" && "w-[90%] h-[150px] p-4"}`}>
                <div className={`${cardSize === "md" && "flex-grow"}`}>
                  <h2 className={`font-bold ${cardSize === "lg" ? "text-4xl leading-[48px]" : "text-xl leading-[28px]"}`}>{blog.title}</h2>
                </div>
                <div className="flex gap-2 items-center text-[#435366] font-semibold">
                  <div className="w-fit h-[20px] px-2 pt-0 flex gap-1 items-center border-[1px] border-gray-300 rounded-full"><RiChat1Line /><span className="text-sm">{blog.commentCount} </span> </div>
                  <div className="flex gap-2 items-center text-sm flex-wrap">
                    {cardSize !== "sm" || cardSize !== "md" && <p className="capitalize">{blog.author.node.name}</p>}
                    <FaAngleRight />
                    <p>{new Date(blog.date).toString().slice(4, 15)}</p>
                    <p><LuAlarmClockPlus /></p><p>{blog.postReadingTime.readingTime} min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`z-0 card-overlay absolute bottom-0 left-0 right-0 p-4 w-full h-full ${cardSize === "md" ? "bg-white group-hover:scale-104  transition duration-300" : "bg-black/60"} rounded-lg`}></div>
          </div>
        </div>
      </Link>
    </>
  )
}

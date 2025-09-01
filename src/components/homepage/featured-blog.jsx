"use client"
import { useFetch } from '../../utils/useFetch'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa6'
import { LuAlarmClockPlus } from 'react-icons/lu'
import { RiChat1Line } from 'react-icons/ri'
import Autoplay from "embla-carousel-autoplay"

export default function FeaturedBlog() {

  const query = `{
  posts(where: {tag: "featured"}) {
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
      <h2 className="text-sm text-[#435366] font-bold mb-4">Featured</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-xs">
        <CarouselContent>
          {posts?.map((blog, index) => (
            <CarouselItem key={index}>
              <div className={`blog-card relative h-[460px] text-white`}>
                <Image src={blog.featuredImage?.node?.sourceUrl} alt={blog.title} width={300} height={300} className={`thumbnail rounded-lg w-full h-full object-cover`} />
                <div className="card-overlay absolute bottom-0 left-0 right-0 p-4 w-full h-full bg-black/50 rounded-lg"></div>
                <div className={` flex flex-col gap-4 absolute bottom-0 left-0 right-0 p-4`}>
                  <div>
                    <h2 className={`text-center font-bold text-xl leading-[28px]`}>{blog.title}</h2>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="w-fit h-[20px] px-2 pt-0 flex gap-1 items-center border-[1px] border-gray-300 rounded-full"><RiChat1Line /><span className="text-sm">{blog.commentCount} </span> </div>
                    <div className="flex gap-2 items-center text-sm flex-wrap">
                      <FaAngleRight />
                      <p>{new Date(blog.date).toString().slice(4, 15)}</p>
                      <p><LuAlarmClockPlus /></p><p>{blog.postReadingTime.readingTime} min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>

    </div>
  )
}

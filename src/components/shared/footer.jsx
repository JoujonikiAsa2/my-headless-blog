import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import SocialMedia from '../social-media'

export default function Footer() {
  return (
    <footer className=" bg-white dark:bg-background py-16">
      <div className='max-w-[75rem] mx-auto footer'>
        <div className='space-y-3 company-details'>
          <Link href="/" className="text-[#0a2540] dark:text-white text-[1.75rem] tracking-[-0.1rem] font-extrabold  text-shadow-sm">
            <h1 className=''> Platform</h1>
          </Link>
          <p className='w-full'>Tech insights, trends, tools — plus cycling, <br/> wellness, and everyday life.</p>
          <SocialMedia/>
        </div>
        <div className='w-1/2 flex gap-12 links'>
          <div className=' demos w-1/3'>
            <h6 className='text-lg font-bold tracking-tight hover:underline hover:cursor-pointer pb-4'>Demos</h6>
            <ul className='space-y-3 text-[15px] w-fit '>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Homepage 1</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Homepage 2</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Homepage 3</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Homepage 4</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Homepage 5</Link></li>
            </ul>
          </div>
          <div className='features w-1/3'>
            <h6 className='text-base font-bold tracking-tight hover:underline hover:cursor-pointer pb-4'>Features</h6>
            <ul className='space-y-3 text-[15px]'>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Standard Post</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Featured Post</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Split Header Post</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Overlay Post</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Auto Load Next Post</Link></li>
            </ul>
          </div>
          <div className='categories w-1/3'>
            <h6 className='text-base font-bold tracking-tight hover:underline hover:cursor-pointer pb-4'>Categories</h6>
            <ul className='space-y-3 text-[15px]'>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Trends</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Lifestyle</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Business</Link></li>
              <li className='hover:underline hover:cursor-pointer'><Link href="/#">Technologies</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='max-w-[75rem] mx-auto  flex gap-2 text-[13px] copyright p-4'>
        <Link href="/#" className='flex items-center font-bold text-[#435366] dark:text-white'>Privacy Policy  <ChevronRight size={16} strokeWidth={3} /></Link>
        <Link href="/#" className='flex items-center font-bold text-[#435366] dark:text-white'>Terms of Use <ChevronRight size={16} strokeWidth={3} /></Link>
        <p>
          © 2025 Platform. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

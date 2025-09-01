"use client"
import Link from 'next/link'
import React from 'react'
import MenuToggle from '../menu-toggle'
import { ChevronRight, Search, Sun } from 'lucide-react'
import { FiMoon } from "react-icons/fi";

import { Badge } from '../ui/badge'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  console.log(theme)

  const onToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <header className="group relative">
      {/*background element*/}
      <div
        className={`absolute inset-0 h-16 group-hover:scale-x-102 group-hover:bg-white  dark:group-hover:bg-secondary rounded-xl transition-all duration-300 z-0 ${isOpen ? 'bg-white dark:bg-secondary scale-x-102' : 'bg-transparent'}`}
      ></div>
      {/* Main content */}
      <div
        className="header relative flex justify-between items-center h-16 my-2 z-10"
      >
        <nav className="w-[45%] relative flex items-center gap-6 nav-start">
          <div>
            <MenuToggle onToggle={onToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="flex space-x-6 text-[0.95rem] tracking-tight font-extrabold text-[#0a2540] dark:text-white nav-item">
            <div>
              <Link
                href="/#"
                className="peer flex gap-1 hover:text-[#687FE5]"
                id="link-1"
              >
                Demos <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="18" className="arrow-line hidden" />
                  <polyline points="6 12 12 18 18 12" />
                </svg>
              </Link>

              <div className="demo-dropdown absolute top-13 left-13 w-64 bg-white dark:bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-all duration-300 pointer-events-none hover:pointer-events-auto">
                <div className="flex flex-col p-4 gap-6">
                  <Link href="/#">Homepage 1</Link>
                  <Link href="/#">Homepage 2</Link>
                  <Link href="/#">Homepage 3</Link>
                  <Link href="/#">Homepage 4</Link>
                  <Link href="/#">Homepage 5</Link>
                </div>
                <div className=' absolute -top-[5px] left-4 size-2 border-t border-l rotate-45 bg-white dark:bg-secondary z-0'></div>
              </div>
            </div>
            <div>
              <Link href="/#" className='peer flex gap-1 hover:text-[#687FE5]' id="link-2">
                Features <Badge className="bg-[#13B16F] dark:text-white h-5 rounded-full px-2 font-bold">New</Badge> <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="18" className="arrow-line hidden" />
                  <polyline points="6 12 12 18 18 12" />
                </svg>

              </Link>
              <div className="feature-dropdown absolute top-13 left-32 w-64 bg-white dark:bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-all duration-300 pointer-events-none hover:pointer-events-auto">
                <div className="flex flex-col p-4 gap-6">
                  <Link href="/post-headers">Post Headers</Link>
                  <Link href="/layouts">Layouts</Link>
                  <Link href="/auto-load-next-post">Auto Load Next Post</Link>
                  <Link href="/featured-post-category" className='flex gap-2 items-center'>Featured Post Category</Link>
                  <Link href="/author-page">Author Page</Link>
                  <Link href="/search-page">Search Page</Link>
                </div>
                <div className=' absolute -top-[5px] left-4 size-2 border-t border-l rotate-45 bg-white dark:bg-secondary z-0'></div>
              </div>
            </div>
            <div>
              <Link href="/#" className='peer flex gap-1  hover:text-[#687FE5]' id="link-3">
                Categories <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="18" className="arrow-line hidden" />
                  <polyline points="6 12 12 18 18 12" />
                </svg>

              </Link>
              <div className="categories-dropdown absolute top-13 -left-2 w-[76rem] bg-white dark:bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-all duration-300 pointer-events-none hover:pointer-events-auto">
                <div className="flex flex-col p-4 gap-6">
                  <Link href="/#">Demos</Link>
                  <Link href="/#">Features</Link>
                  <Link href="/lifestyle">Lifestyle</Link>
                  <Link href="/trends" className='flex gap-2 items-center'>Trends <Badge className="bg-[#13B16F] h-5 rounded-full px-2 font-bold">New</Badge></Link>
                  <Link href="/business">Business</Link>
                  <Link href="/technologies">Technologies</Link>
                </div>
                <div className=' absolute -top-[5px] left-[20rem] size-2 border-t border-l rotate-45 bg-white dark:bg-secondary z-0'></div>
              </div>
            </div>
            <div className='w-full'>
              <Link href="/#" className='peer flex gap-1  hover:text-[#687FE5]' id="link-4">
                Lifestyle <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="18" className="arrow-line hidden" />
                  <polyline points="6 12 12 18 18 12" />
                </svg>

              </Link>
              <div className="lifestyle-dropdown absolute -left-2 top-13 w-[76rem] bg-white dark:bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-all duration-300 pointer-events-none hover:pointer-events-auto">
                <div className="flex flex-col p-4 gap-6">
                  <Link href="/#">Demos</Link>
                  <Link href="/#">Features</Link>
                  <Link href="/lifestyle">Lifestyle</Link>
                  <Link href="/trends" className='flex gap-2 items-center'>Trends <Badge className="bg-[#13B16F] h-5 rounded-full px-2 font-bold">New</Badge></Link>
                  <Link href="/business">Business</Link>
                  <Link href="/technologies">Technologies</Link>
                </div>
                <div className=' absolute -top-[5px] left-[27rem] size-2 border-t border-l rotate-45 bg-white dark:bg-secondary z-0'></div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="w-fit flex nav-middle">
          <Link href="/" className=" text-[#0a2540] dark:text-white text-[1.75rem] tracking-[-0.1rem] font-extrabold  text-shadow-sm">
            <h1>Platform</h1>
          </Link>
        </nav>
        <nav className="w-[45%] nav-end">
          <Search className='w-5 h-5 text-foreground dark:text-white dark:hover:text-gray-400 hover:text-[#687FE5] hover:cursor-pointer search' />
          <div className='theme-toggle flex items-center gap-2 p-[2px] rounded-full dark:bg-[#343434] bg-white group-hover:bg-background hover:cursor-pointer'>
            <Sun size={26} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`rounded-full p-[2px] ${theme === "light" ? "text-[#687FE5] bg-background " : "text-gray-500 hover:text-white"}`} />
            <FiMoon size={26} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`rounded-full p-[2px] ${theme === "dark" ? "text-white bg-black" : "hover:text-gray-300"}`} />
          </div>
          <button className='flex items-center justify- gap-1 bg-foreground dark:bg-[#343434] text-white px-[12px] py-[6px] rounded-full font-bold text-sm hover:cursor-pointer buy-button'>Buy Platform <ChevronRight size={16} strokeWidth={3} /></button>
        </nav>
      </div>
      {/* menu content */}
      <div className={`absolute scale-x-102 w-[70%] h-[400px] flex bg-background border-[1px] border-gray-300 dark:border-gray-700 rounded-lg bg-opacity-50 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className='w-1/2 flex z-10'>

          <div className='w-1/2 flex flex-col p-4 gap-6  bg-white dark:bg-secondary   rounded-l-lg'>
            <Link href="/#">Demos</Link>
            <Link href="/#">Features</Link>
            <Link href="/lifestyle">Lifestyle</Link>
            <Link href="/trends" className='flex gap-2 items-center'>Trends <Badge className="bg-[#13B16F] h-5 rounded-full px-2 font-bold">New</Badge></Link>
            <Link href="/business">Business</Link>
            <Link href="/technologies">Technologies</Link>
          </div>
          <div className='w-1/2 flex flex-col p-4 gap-6'>
            <Link href="/#">Link 1</Link>
            <Link href="/#">Link 2</Link>
            <Link href="/#">Link 3</Link>
          </div>
        </div>
        <div className='w-1/2 flex flex-col p-4 gap-6'>
          <Link href="/#">Link 1</Link>
          <Link href="/#">Link 2</Link>
          <Link href="/#">Link 3</Link>
        </div>
        <div className=' absolute -top-[5px] left-4 size-2 border-t border-l rotate-45 bg-white dark:bg-secondary z-0'></div>
      </div>
    </header>
  )
}

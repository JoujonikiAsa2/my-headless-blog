"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import profile from '../../assets/demo-image/demo-avatar-0003.webp'
import { FaAngleRight } from 'react-icons/fa6'
import SocialMedia from '../social-media'

export default function ContactForm() {
    const [moreExperince, setMoreExperience] = useState()
    return (
        <div className='w-full bg-white rounded-md p-4'>
            <div className='size-20 rounded-lg'><Image src={profile} alt="Dan" width={100} height={100} className='w-full h-full rounded-lg' /></div>
            <div>
                <h3 className='text-xl font-bold mt-4'>I'm Dan, a frontend developer exploring tech, business, and wellness.</h3>
            </div>
            <SocialMedia/>
            <div className='mt-4'>
                <h4 className=' border-b pb-2 text-[#435366] font-bold font-inter'>Work Experience</h4>
                <div className='flex flex-col gap-1 tracking-tight
'>
                    <div className='flex justify-between border-b py-2'>
                        <div>
                            <p className='text-base font-bold'>Nexora Studio</p>
                            <small>Frontend Developer</small>
                        </div>
                        <div>
                            <small>2021–Present</small>
                        </div>
                    </div>
                    <div className='flex justify-between border-b py-2'>
                        <div>
                            <p className='text-[#0A2540] text-base font-bold'>Loopbyte Agency</p>
                            <small className={ `${!moreExperince && "text-gray-400 tracking-tighter"}`}>Web Developer</small>
                        </div>
                        <div>
                            <small>2019–2021</small>
                        </div>
                    </div>
                    <div className={`${moreExperince ? "flex justify-between border-b py-2" : "hidden"}`}>
                        <div>
                            <p className='text-base font-bold'>Corewave Tech</p>
                            <small>Support Specialist</small>
                        </div>
                        <div>
                            <small>2017–2019</small>
                        </div>
                    </div>
                    <div className={`${moreExperince ? "flex justify-between border-b py-2" : "hidden"}`}>
                        <div>
                            <p className='text-base font-bold'>Brightline Systems</p>
                            <small>IT Intern</small>
                        </div>
                        <div>
                            <small>2016</small>
                        </div>
                    </div>
                    <div>
                        <button className='text-sm font-semibold hover:text-[#687FE5] hover:cursor-pointer flex items-center load-btn'
                            onClick={() => setMoreExperience(!moreExperince)}>Load more {!moreExperince ? <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="4" x2="12" y2="18" className="arrow-line hidden" />
                                <polyline points="6 12 12 18 18 12" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 15 12 9 18 15" />
                            </svg>}</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-1 py-4'>
                <div className='size-6 bg-green-100 rounded-full flex items-center justify-center animate-pulse duration-300'><div className='size-[6px] bg-green-600 rounded-full'></div></div> <p className='text-sm text-green-600 font-bold'>Available for Hire</p>
            </div>
            <div>
                <button className='w-full flex items-center justify-center gap-1 rounded-full p-2 bg-foreground text-sm text-white font-bold'>Get In Touch <FaAngleRight /></button>
            </div>
        </div>
    )
}

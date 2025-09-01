import Image from 'next/image';
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6';

export default function CategoryCard({ category }) {
    return (
        <div className={`relative category-card flex flex-col items-center justify-center text-black bg-white p-6 rounded-lg group hover:bg-[image:var(--hover-bg)] bg-cover bg-center hover:cursor-pointer  hover:text-white transition-all duration-300`}
            style={{
                "--hover-bg": `url(${category?.categoryFields?.categoryBg?.node?.sourceUrl})`,
                objectFit: 'cover',
            }}>
            <div className='w-20 h-20 thumbnail transition-all duration-300'>
                <Image
                    src={category?.categoryFields?.categoryImage?.node?.sourceUrl}
                    alt={category?.name}
                    width={200}
                    height={200}
                    className=" w-full h-full border rounded-lg object-fill"
                />
            </div>
            <div className='hidden  group-hover:flex absolute opacity-50 inset-0 bg-black rounded-lg'></div>
            <div className='category-description transition-all duration-300'>
                <h3 className='text-xl font-bold mt-4 text-center'>{category?.name}</h3>
                <p className='text-center w-64'>{category?.description}</p>
                <div className='text-center group-hover:flex items-center justify-center hidden gap-2 '>Explore category  <FaAngleRight /></div>
            </div>
        </div>
    )
}

"use client"
import React from 'react'
import CategoryCard from '../blogs/category-card';
import { useFetch } from '../../utils/useFetch';

export default function CategorySection() {
    const query = `
{
  categories{
              nodes{
                name
                description
                categoryFields{
                  categoryImage{
                    node{
                      sourceUrl
                    }
                  }
                  categoryBg{
                    node{
                      sourceUrl
                    }
                  }
                }
              }
            }
}
`;
    const { data, loading } = useFetch({query});
    const categories = data?.categories?.nodes ?? [];
    console.log(categories);
    return (
        <div>
            <h2 className="text-sm text-[#435366] font-bold mb-4 mt-14">Explore by Category</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {categories?.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

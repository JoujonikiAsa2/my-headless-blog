import React from 'react'

export default async function CategoryPage({params}) {
  const { slug } = await params;
    console.log("Slug:", slug);
  return (
    <div>
      hello category page {slug}
    </div>
  )
}

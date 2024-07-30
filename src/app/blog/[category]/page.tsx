import React from 'react'
import { getBlogPosts } from '../utils'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CardCategory from '@/components/category/CardCategory';

const Page = ({params }: {params: {category: string}}) => {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  )
  if (posts.length === 0) {
    notFound();
  }
  
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
          return -1;
        }
        return 1;
      }).map((post) => (
        <Link
          key={post.slug}
          href={`/${post.metadata.category}/${post.slug}`}
        >
        <CardCategory />
        </Link>
      ))}
    </div>
  )
}

export default Page
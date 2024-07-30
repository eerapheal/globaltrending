import { popularPosts } from '@/lib/placeholder.data'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons'

const PopularPosts = () => {
  return (
    <div>
      <ul className="overflow-auto">
        {popularPosts.map((post) => (
            <li 
            key={post.title}
            className="flex items-center gap-2 group cursor-pointer py-2"
            >
              <Icons.arrowRight className='h-5 w-5 group-hover:translate-x-1 transition-all' />
              <p>{post.title}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularPosts
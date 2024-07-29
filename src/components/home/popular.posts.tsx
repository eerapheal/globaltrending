import { popularPosts } from '@/lib/placeholder.data'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../icons'

const PopularPosts = () => {
  return (
    <div>
      <ul className="overflow-auto">
        {popularPosts.map((post) => (
          <Link 
            key={post}
            href='/blog'
            >
            <li className="flex items-center gap-2 cursor-pointer py-2">
              <Icons.arrowRight className='h-5 w-5' />
              <p>{post.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default PopularPosts
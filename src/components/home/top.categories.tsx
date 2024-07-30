import { categories } from '@/lib/placeholder.data';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import POSTS from '@/utils/constants';

const TopCategories = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button key={post.title}
        variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={`/blog/${post.href}`}>{post.title}</Link>
        </Button>
      ))}
    </div>
  )
}

export default TopCategories;

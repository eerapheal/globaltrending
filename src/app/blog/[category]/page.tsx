import React from 'react'
import { getBlogPosts } from '../utils'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CardCategory from '@/components/category/CardCategory';
import Container from '@/components/Container';
import Header from '@/ui/header/header';

const Page = ({params }: {params: {category: string}}) => {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  )
  if (!posts.length) {
    notFound();
  }
  
    return (
      <>
      <Header>
      <Container>
        <h1 className="title font-semibold text-2xl tracking-wider mt-2 uppercase">
          {posts[0]?.metadata.category}
        </h1>
      </Container>
    </Header>
  
      <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
          return -1;
        }
        return 1;
      }).map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.metadata.category}/${post.slug}`}
        >
        <CardCategory title={post.metadata.title} summary={post.metadata.summary} date={post.metadata.publishedAt} />
        </Link>
      ))}
    </div>
    </Container>
    </>
  )
}

export default Page
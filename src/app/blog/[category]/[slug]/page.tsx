import { BreadcrumbWithCustomSeparator } from '@/components/breadCrumb';
import Container from '@/components/Container';
import Header from '@/ui/header/header';
import React from 'react';
import { formatDate, getBlogPosts } from '../../utils';
import NotFound from '@/app/not-found';
import CustomMDX from '@/components/mdx';

const Page = ({ params }: { params: { category: string; slug: string } }) => {
  const posts = getBlogPosts().find((post) => post.slug === params.slug);

  if (!posts) {
    return <NotFound />;
  }

  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={posts.metadata.category}
            slug={posts.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {posts.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(posts.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={posts.content} />
        </article>
      </Container>
    </>
  );
};

export default Page;

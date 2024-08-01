import { BreadcrumbWithCustomSeparator } from '@/components/breadCrumb';
import Container from '@/components/Container';
import Header from '@/ui/header/header';
import React from 'react';
import { getBlogPosts } from '../../utils';
import NotFound from '@/app/notFound';

const Page = ({ params }: { params: { category: string; slug: string } }) => {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
        </Container>
      </Header>
    </>
  );
};

export default Page;

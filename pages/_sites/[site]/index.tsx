import ArticleList from 'components/ArticleList';
import Category from 'components/Category';
import Container from 'components/Container';
import HeroHeader from 'components/HeroHeader';
import { Layout } from 'layouts/Layout';
import Link from 'next/link';
import { useState } from 'react';
import { filterArticles } from 'utils/filterArticles';
import { convertToArticleList, getAllArticles } from 'utils/notion';
import prisma, { blogSelect } from 'utils/prisma';

export default function Index({ articles, categories, blog }: any) {
  const [selectedTag, setSelectedTag] = useState<string>(null);
  const filteredArticles = filterArticles(articles, selectedTag);

  if (!blog) {
    return (
      <div>
        The subdomain page probably does not exist, please contact admin{' '}
        <Link href="/">go back to main page</Link>
      </div>
    );
  }

  return (
    <Layout>
      <HeroHeader blog={blog} />
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map(tag => (
          <Category
            tag={tag}
            key={tag}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        ))}
      </div>
      <Container>
        <div className="py-8">
          <div className="my-8 text-3xl font-bold text-gray-900">
            {!selectedTag ? 'Latest articles' : `${selectedTag} articles`}
          </div>
          <ArticleList articles={filteredArticles} />
        </div>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { site } = context.params;

  if (!site) {
    return {
      props: {
        profile: null
      }
    };
  }

  const blog = await prisma.blogWebsite.findFirst({
    where: { slug: site },
    select: blogSelect
  });

  const data = await getAllArticles(blog.notionBlogDatabaseId);

  const { articles, categories } = convertToArticleList(data);

  return {
    props: {
      blog,
      articles,
      categories
    }
  };
}

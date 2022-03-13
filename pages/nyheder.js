import fs from 'fs';
import matter from 'gray-matter';
import NewsList from '@components/Pages/NewsPage/NewsList.js';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: articlesData } = matter(readFile);
    return {
      slug,
      articlesData,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

export default function NewsPage({ posts }) {
  return (
    <NewsList posts={posts} />
  );
}
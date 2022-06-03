import fs from 'fs';
import matter from 'gray-matter';
import NewsPost from '@components/Pages/NewsPage/NewsPost.js';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: header, content } = matter(fileName);
  return {
    props: {
      header,
      content,
    },
  };
}

export default function PostPage({ header, content }) {
  return (
    <NewsPost header={header} content={content}/>
  );
}
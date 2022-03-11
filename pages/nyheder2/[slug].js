import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';

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
    <div className='article'>
      <Image src={header.image} width={header.imgWidth} height={header.imgHeight}></Image>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
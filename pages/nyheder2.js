import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@components/Pages/NewsPage/NewsPage.module.css';

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

export default function News2({ posts }) {
  return (
    <div>
      {posts.map( ({ slug, articlesData }, index) => (
        <div key={slug} >
        {index!==0?<div className="page-divider"></div>:<div></div>}
          <Link href={`/nyheder2/${slug}`}>
            <a>
            <section className={styles.news}>
              <aside>
                <Image width={articlesData.imgWidth} height={articlesData.imgHeight} src={articlesData.image} alt="" ></Image>
              </aside>
              <article>
                <h2>{articlesData.title}</h2>
                <p className={styles.newsDate}>{articlesData.date}</p>
                <p>{articlesData.summary}</p>
              </article>
            </section>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import styles from '@components/Pages/NewsPage/NewsPage.module.css';

export default function NewsPage({ posts }) {
  return (
    <div>
      {posts.map( ({ slug, articlesData }, index) => (
        <div key={slug} >
        {index!==0?<div className="page-divider"></div>:<div></div>}
          <Link href={`/nyheder/${slug}`}>
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
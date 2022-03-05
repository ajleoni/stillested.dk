import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsPage.module.css';
import news from './NewsListContent.js';

export default function NewsPage() {
  let content = news.map(
    (item , index) => {
      return (      
      <>
        {index!==0?<div className="page-divider"></div>:<div></div>}
        <Link href={item.link}>
          <section className={styles.news}>
              <aside>
                <Image width={item.imgWidth} height={item.imgHeight} src={item.imgSrc} alt="" ></Image>
              </aside>
              <article>
                <h2>{item.title}</h2>
                <p className={styles.newsDate}>{item.date}</p>
                <p>{item.description}</p>
              </article>
            </section>
          </Link>
      </> 
          )}
  );

  return (
    <>
      {content}
    </>
    );
};
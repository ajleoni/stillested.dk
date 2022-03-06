import styles from './NewsArticle.module.css';
import Image from 'next/image';

export default function NewsArticle({articleData}) {
    let paragraphs = articleData.paragraphs.map(
        (item) => {
          return (      
          <>
          <p>{item}</p>
          </>
        )}
      );
    
    return (
      <>
        <section>
            <aside>
                <div className="article-img">
                    <Image width={articleData.imgWidth} height={articleData.imgHeight} alt="" src={articleData.imgSrc} />
                </div>
            </aside>
            <article className="news-article">
                <h2>{articleData.title}</h2>
                <p className="news-date">{articleData.date}</p>
                {paragraphs}
            </article>
        </section>
      </>
      );
  };
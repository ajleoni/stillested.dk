import Image from 'next/image';
import styles from '@components/Pages/NewsPage/NewsPage.module.css';
import md from 'markdown-it';


export default function NewsPost({ header, content }) {
    return (
      <div className='article'>
        <Image src={header.image} width={header.imgWidth} height={header.imgHeight} alt={header.title}></Image>
        <h1>{header.title}</h1>
        <p className={styles.newsDate}>{header.date}</p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  }
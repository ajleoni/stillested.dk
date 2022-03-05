// import './Article.css';
import {article02} from './ArticlesContent.js';
import NewsArticle from '@components/NewsArticle/NewsArticle.js';

export default function Article02() {
  return (
    <>
      <NewsArticle articleData={article02} />
    </>
    );
};
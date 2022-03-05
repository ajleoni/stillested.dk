//import './Article.css';
import {article03} from './ArticlesContent.js';
import NewsArticle from '@components/NewsArticle/NewsArticle.js';

export default function Article03() {
  return (
    <>
      <NewsArticle articleData={article03} />
    </>
    );
}
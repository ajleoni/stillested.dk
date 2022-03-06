//import './Article.css';
import {article01} from './ArticlesContent.js';
import NewsArticle from '@components/Common/NewsArticle/NewsArticle.js';

export default function Article01() {
  return (
    <>
      <NewsArticle articleData={article01} />
    </>
    );
};
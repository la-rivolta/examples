import React from 'react';

import './OneNewsPage.css';

const  OneNewsPage = props => {
  const article = props.location.state.item;;
  return(
    <div className="OnePage">
      <div className="left">
        <div className="OnePageTitle">{article.title}</div>
        <div className="Source">{article.source.name}</div>
        <div className="publishedAt">{makeDate(article.publishedAt)}</div>
      </div>
      <div className="right">
        <div className="Image"><img src={article.urlToImage}/></div>
        <div className="description">{makeDescr(article.description, article.url)}</div>
      </div>
    </div>
  )
}

const makeDate = (rawDate) =>{
  const date = new Date(rawDate);
  return `${date.getDay()} / ${makeMounth(date.getMonth())}`;
}

const makeMounth = (mounth) =>{
  if (mounth < 9){
    return `0${mounth+1}`;
  } else if (mounth = 9){
    return `${mounth+1}`;
  } else {
    return mounth;
  } 
}

const makeDescr = (descr, href) => {
  if(descr.includes('…')){
    return <div>{descr}<a href={href} target='_blank'>Подробнее</a></div>;
  } else {
    return <div className="linkToSource">{descr}
    <br/><a href={href} target='_blank'>
      Читать новость в источнике 
    </a>
  </div>
  }
}

export default OneNewsPage;
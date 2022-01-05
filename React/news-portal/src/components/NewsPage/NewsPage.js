import React from 'react';
import News from './News.js';
import './NewsPage.css';
import '../MainPage/MainPage.css';

const NewsPage = () => {
    return (
      <div>
        <h1 className='firstTitle'>Быть <br/>в курсе <span>событий</span></h1>
        <News/>
      </div>
    )
}

export default NewsPage;

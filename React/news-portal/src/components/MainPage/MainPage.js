import React from 'react';

import Main from './Main.js';
import './MainPage.css';


const MainPage = () => {
    return (
      <div>
        <h1 className='firstTitle'>Всегда <br/>свежие <span>новости</span></h1>
        <Main/>
      </div>
    )
}

export default MainPage;

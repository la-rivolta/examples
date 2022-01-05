import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './App.css';
import './styles/stylesheet.css';
import MainPage from './components/MainPage/MainPage.js';
import NewsPage from './components/NewsPage/NewsPage.js';
import Contacts from './components/Contacts/Contacts.js';
import OneNewsPage from './components/OneNewsPage/OneNewsPage.js';
import Footer from './components/Footer/Footer.js';


const App = () => {
  return(
    <div className="App">
      <div className="Header">
      <div className="logo"><NavLink to="/">Новостник</NavLink></div>
        <ul className="main-nav">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/news">Новости</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route
          path='/'
          component={MainPage}
          exact
        />
        <Route
          path='/news'
          component={NewsPage}
          exact
        />
        <Route
          path='/contacts'
          component={Contacts}
        />
        <Route
          path='/news/:title'
          component={OneNewsPage}
          />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;

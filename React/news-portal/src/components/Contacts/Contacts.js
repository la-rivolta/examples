import React from 'react';

import Photo from './img/photo.png';
import './Contact.css';


const Contacts = () => {
  return(
  <div className="aboutMe">
      <div className="Contacts"><div className="phone">+79776485733</div>    
        <div className="Name">Надежда</div>
        <div className="email">NadezhdaBilay@gmail.com</div>
        <div className="employee">JavaScript разработчик</div>
        <div className="technology">ES5, ES6, <span>React</span></div>
      </div>
      <img className="Image" src={Photo}/>
    </div>
  )
}

export default Contacts;

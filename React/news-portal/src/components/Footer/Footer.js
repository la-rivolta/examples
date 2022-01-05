import React from 'react';

import './Footer.css';

const Footer = () => {
  return(
    <div className='footer'>
      <div className="left">Новостник<br/>
        <span>Single Page Application</span>
      </div>
      <div className="center">Личный проект</div>
      <div className="right">Made by
        <br/><span>Nadezhda B.</span>
      </div>
    </div>
  )
}

export default Footer;
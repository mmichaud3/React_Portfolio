import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__socials'>
        <FontAwesomeIcon icon='fa-brands fa-linkedin-in' />
      </div>
      <div className='footer__email'>
        <a href='mailto:mvmichaud3@gmail.com'>mvmichaud3@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;

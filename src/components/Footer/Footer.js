import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__socials'>
        <div className='footer__socials__icons'>
          <a
            href='https://www.linkedin.com/in/michaelvmichaud/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='footer__socials__icons__icon'
              size='lg'
              icon='fa-brands fa-linkedin-in'
            />
          </a>
          <a
            href='https://github.com/mmichaud3'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='footer__socials__icons__icon'
              size='lg'
              icon='fa-brands fa-github'
            />
          </a>
          <a
            href='https://www.instagram.com/michaelvmichaud/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='footer__socials__icons__icon'
              size='lg'
              icon='fa-brands fa-instagram'
            />
          </a>
        </div>
      </div>
      <div className='footer__email'>
        <div className='footer__email__container'>
          <a href='mailto:mvmichaud3@gmail.com'>mvmichaud3@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

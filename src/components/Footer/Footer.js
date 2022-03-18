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
          <a
            href='mailto:mvmichaud3@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='footer__socials__icons__icon'
              size='lg'
              icon='fa-solid fa-envelope'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

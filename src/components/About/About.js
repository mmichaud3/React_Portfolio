import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../images/IMG_3584.jpg';
import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about__header'>
        <h1>A Little About Me</h1>
      </div>
      <div className='about__main'>
        <div className='about__main__leftside'>
          <p>
            Hi! my name is Michael and I am an professional artist turned
            software engineer. I began my journey into software development in
            2018 and have not looked back.
          </p>
          <p>
            Since graduating a coding bootcamp I gained experience in a
            start-up, a large corporation, and most recently in a mid size
            company with a solid history.
          </p>
          <p>
            Outside of work I enjoy training for ultra marathons, programming
            games, and hanging out with my{' '}
            <FontAwesomeIcon
              className='about__main__leftside__icon__lg'
              size='md'
              icon='fa-solid fa-dog'
            />
            <FontAwesomeIcon
              className='about__main__leftside__icon__lg'
              size='md'
              icon='fa-solid fa-dog'
            />
            <FontAwesomeIcon
              className='about__main__leftside__icon__sm'
              size='xs'
              icon='fa-solid fa-dog'
            />
            .
          </p>
        </div>
        <div className='about__main__rightside'>
          <div className='about__main__rightside__image'>
            <div className='about__main__rightside__image__mid'>
              <div className='about__main__rightside__image__mid__img'>
                <img src={me} alt='me' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

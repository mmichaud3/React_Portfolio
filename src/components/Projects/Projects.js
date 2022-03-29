import React, { useState } from 'react';
import screenShot from '../../images/RetroDocPreview.png';
import Carousel from 'react-bootstrap/Carousel';
import gameSS from '../../images/gameSS.png';
import screenShotGame from '../../images/screenShotGame.png';
import deadSS from '../../images/deadSS.png';

import './Projects.css';

function Projects() {
  const [projectShowing, setProjectShowing] = useState('theme');

  const showProject = (e) => {
    setProjectShowing(e.target.id);
  };

  const theme = (
    <>
      <p>
        A dark theme inspired by 90s colors. Available on the{' '}
        <a
          href='https://marketplace.visualstudio.com/items?itemName=MichaelMichaud.retro-doc'
          target='_blank'
          rel='noreferrer'
        >
          Visual Studio Marketplace.
        </a>
      </p>
      <div className='projects__main__right__theme-image'>
        <img src={screenShot} alt='Screen Shot' />
      </div>
    </>
  );

  const game = (
    <>
      <p>
        A game I am developing in <span>Unity</span>. A shooter game which
        allows the user to save the outcome as a image.
      </p>
      <div className='projects__main__right__game-image'>
        <Carousel>
          <Carousel.Item>
            <img
              className='carousel-img'
              src={screenShotGame}
              alt='First slide'
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-img' src={gameSS} alt='Second slide' />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-img' src={deadSS} alt='Third slide' />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );

  return (
    <div className='projects'>
      <div className='projects__header'>
        <h1>Projects I'm Working On</h1>
      </div>
      <div className='projects__main'>
        <div className='projects__main__left'>
          <button
            className={
              projectShowing === 'theme'
                ? 'projects__main__left__btn-focused'
                : ''
            }
            onClick={showProject}
            id='theme'
          >
            Retro Doc Theme
          </button>
          <button
            className={
              projectShowing === 'game'
                ? 'projects__main__left__btn-focused'
                : ''
            }
            onClick={showProject}
            id='game'
          >
            Space Game
          </button>
        </div>
        <div className='projects__main__right'>
          {projectShowing === 'theme'
            ? theme
            : projectShowing === 'game'
            ? game
            : theme}
        </div>
      </div>
    </div>
  );
}

export default Projects;

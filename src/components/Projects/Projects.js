import React, { useState } from 'react';
import screenShot from '../../images/RetroDocPreview.png';
import spotifyLogo from '../../images/spotify.jpg';
import Carousel from 'react-bootstrap/Carousel';
import gameSS from '../../images/gameSS.png';
import screenShotGame from '../../images/screenShotGame.png';
import deadSS from '../../images/deadSS.png';
import { useMediaQuery } from 'react-responsive';
import Dropdown from 'react-bootstrap/Dropdown';

import './Projects.css';

function Projects() {
  const [projectShowing, setProjectShowing] = useState('theme');
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const projectArr = [
    { id: 'theme', name: 'Retro Doc Theme' },
    { id: 'game', name: 'Space Game' },
    { id: 'spotify', name: 'Crown Beats' },
  ];

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

  const spotify = (
    <>
      <p>
        <a href='http://crown-beats.surge.sh/' target='_blank' rel='noreferrer'>
          Crown Beats
        </a>{' '}
        is a music playlist app built in React using the Spotify API.
      </p>
      <div className='projects__main__right__theme-image'>
        <img src={spotifyLogo} alt='Screen Shot' />
      </div>
    </>
  );

  const game = (
    <>
      <p>
        A game I am developing in <span>Unity</span>. A shooter game which
        allows the user to save the outcome as an image.
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
          {isSmallScreen ? (
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                {projectShowing === 'theme'
                  ? 'Retro Doc Theme'
                  : projectShowing === 'spotify'
                  ? 'Crown Beats'
                  : 'Space Game'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {projectArr
                  .filter((el) => el.id !== projectShowing)
                  .map((el) => (
                    <Dropdown.Item onClick={() => setProjectShowing(el.id)}>
                      {el.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
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
              <button
                className={
                  projectShowing === 'spotify'
                    ? 'projects__main__left__btn-focused'
                    : ''
                }
                onClick={showProject}
                id='spotify'
              >
                Crown Beats
              </button>
            </>
          )}
        </div>
        <div className='projects__main__right'>
          {projectShowing === 'theme'
            ? theme
            : projectShowing === 'game'
            ? game
            : projectShowing === 'spotify'
            ? spotify
            : theme}
        </div>
      </div>
    </div>
  );
}

export default Projects;

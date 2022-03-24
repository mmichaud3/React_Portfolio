import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [projectShowing, setProjectShowing] = useState('theme');

  const showProject = (e) => {
    setProjectShowing(e.target.id);
  };

  const theme = (
    <>
      <p>
        A dark theme inspired by 90s colors. Available on{' '}
        <a
          href='https://marketplace.visualstudio.com/items?itemName=MichaelMichaud.retro-doc'
          target='_blank'
          rel='noreferrer'
        >
          Visual Studio Marketplace.
        </a>
      </p>
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
        </div>
        <div className='projects__main__right'>{theme}</div>
      </div>
    </div>
  );
}

export default Projects;

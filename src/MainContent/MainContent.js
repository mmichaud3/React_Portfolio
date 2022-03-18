import React, { useEffect } from 'react';
import './MainContent.css';
import { useStateValue } from '../StateProvider';
import About from '../components/About/About';
import Expierence from '../components/Expierence/Expierence';

function MainContent() {
  const [{ content }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: 'GET_CONTENT',
    });
  }, [content]);

  const home = (
    <>
      <h1>Hi, my name is</h1>
      <h2>Michael Michaud</h2>
      <p>
        I'm a software engineer specializing in front end development using
        modern frameworks and technologies such as React.js, Redux, Node.js,
        Unity, and Salesforce development technologies. I am currently building
        and maintaining industry leading products at{' '}
        <a
          href='https://www.leadershipconnect.io/'
          target='_blank'
          rel='noreferrer'
        >
          Leadership Connect
        </a>{' '}
        .
      </p>
    </>
  );

  return (
    <div className='main-content'>
      {content === 'about' ? (
        <About />
      ) : content === 'expierence' ? (
        <Expierence />
      ) : (
        home
      )}
    </div>
  );
}

export default MainContent;

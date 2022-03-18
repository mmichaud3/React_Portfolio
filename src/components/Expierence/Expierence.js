import React, { useState } from 'react';
import './Expierence.css';

function Expierence() {
  const [expierenceShowing, setExpierenceShowing] = useState('leadership');

  const showExpierence = (e) => {
    setExpierenceShowing(e.target.id);
  };

  const leadership = (
    <>
      <h2>
        Software Engineer <span>@</span>{' '}
        <a
          href='https://www.leadershipconnect.io/'
          target='_blank'
          rel='noreferrer'
        >
          Leadership Connect
        </a>
      </h2>
      <p>June 2021 - Present</p>
      <ul>
        <li>
          Developed Salesforce app using Lightning Web Components and JavaScript
        </li>
        <li>Build new features for web app using React, TypeScript and MobX</li>
        <li>
          Work in a collaborative environment with product and design teams
        </li>
      </ul>
    </>
  );

  const glenair = (
    <>
      <h2>
        Software Engineer <span>@</span>{' '}
        <a href='https://www.glenair.com/' target='_blank' rel='noreferrer'>
          Glenair
        </a>
      </h2>
    </>
  );

  const neddie = (
    <>
      <h2>
        Front End Developer <span>@</span>{' '}
        <a href='https://www.neddie.co/' target='_blank' rel='noreferrer'>
          Neddie
        </a>
      </h2>
    </>
  );

  const mvm = (
    <>
      <h2>
        Partner/Designer <span>@</span>{' '}
        <a
          href='https://michaelvincentmichaud.com/'
          target='_blank'
          rel='noreferrer'
        >
          Michael Vincent Michaud
        </a>
      </h2>
    </>
  );

  return (
    <div className='expierence'>
      <div className='expierence__header'>
        <h1>My Work History</h1>
      </div>
      <div className='expierence__main'>
        <div className='expierence__main__left'>
          <button
            className={
              expierenceShowing === 'leadership'
                ? 'expierence__main__left__btn-focused'
                : ''
            }
            onClick={showExpierence}
            id='leadership'
          >
            Leadership Connect
          </button>
          <button
            className={
              expierenceShowing === 'glenair'
                ? 'expierence__main__left__btn-focused'
                : ''
            }
            onClick={showExpierence}
            id='glenair'
          >
            Glenair
          </button>
          <button
            className={
              expierenceShowing === 'neddie'
                ? 'expierence__main__left__btn-focused'
                : ''
            }
            onClick={showExpierence}
            id='neddie'
          >
            Neddie
          </button>
          <button
            className={
              expierenceShowing === 'mvm'
                ? 'expierence__main__left__btn-focused'
                : ''
            }
            onClick={showExpierence}
            id='mvm'
          >
            Michael Vincent Michaud
          </button>
        </div>
        <div className='expierence__main__right'>
          {expierenceShowing === 'mvm'
            ? mvm
            : expierenceShowing === 'glenair'
            ? glenair
            : expierenceShowing === 'neddie'
            ? neddie
            : leadership}
        </div>
      </div>
    </div>
  );
}

export default Expierence;

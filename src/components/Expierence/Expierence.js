import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { useMediaQuery } from 'react-responsive';
import './Expierence.css';

function Expierence() {
  const [expierenceShowing, setExpierenceShowing] = useState('leadership');

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const expArr = [
    { id: 'leadership', name: 'Leadership Connect' },
    { id: 'glenair', name: 'Glenair' },
    { id: 'neddie', name: 'Neddie' },
    { id: 'mvm', name: 'Michael Vincent Michaud' },
  ];

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
      <p>Sept 2020 - June 2021</p>
      <ul>
        <li>
          Updated character based user programs into modern GUI apps using React
          and Material-UI
        </li>
        <li>Refactored legacy BBx code to Java using OOP standards</li>
        <li>
          Worked directly with inner company users to produce clean and
          intuitive GUI based apps using React, Redux, Context API, TypeScript
          and JavaScript
        </li>
      </ul>
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
      <p>Jan 2020 - Sept 2020</p>
      <ul>
        <li>
          Engineered nonprofit management dashboard for editing profile
          information, event calendaring, donation handling, volunteering
          opportunities, budgeting tooling, and social media linking using
          TypeScript, React, and Redux
        </li>
        <li>
          Built signin feature to enable registered accounts to access nonprofit
          organization management features using JavaScript, React, HTML5, CSS3,
          and React-bootstrap
        </li>
        <li>
          Test React Components in Jest refactoring code as necessary to match
          UI/UX design team
        </li>
      </ul>
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
      <p>Feb 2011 - Dec 2019</p>
      <ul>
        <li>
          Developed an ecommerce site in Squarespace and built social media
          following
        </li>
        <li>
          Managed day to day operations including mentoring 5 employees in
          wholesale jewelry production
        </li>
      </ul>
    </>
  );

  return (
    <div className='expierence'>
      <div className='expierence__header'>
        <h1>My Work History</h1>
      </div>
      <div className='expierence__main'>
        <div className='expierence__main__left'>
          {isSmallScreen ? (
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                {expierenceShowing === 'mvm'
                  ? 'Michael Vincent Michaud'
                  : expierenceShowing === 'glenair'
                  ? 'Glenair'
                  : expierenceShowing === 'neddie'
                  ? 'Neddie'
                  : 'Leadership Connect'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {expArr
                  .filter((el) => el.id !== expierenceShowing)
                  .map((el) => (
                    <Dropdown.Item onClick={() => setExpierenceShowing(el.id)}>
                      {el.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className='expierence__main__left__btns'>
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
          )}
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

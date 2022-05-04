import React from 'react';
import { useStateValue } from '../../StateProvider';
import './NavMenu.css';

function NavMenu() {
  const [{ content }, dispatch] = useStateValue();

  const handleClick = (e) => {
    dispatch({
      type: 'SET_CONTENT',
      content: e.target.id,
    });
  };

  return (
    <div className='nav-menu'>
      <button onClick={handleClick} id='home'>
        Home
      </button>
      <button onClick={handleClick} id='about'>
        About
      </button>
      <button onClick={handleClick} id='expierence'>
        Expierence
      </button>
      <button onClick={handleClick} id='projects'>
        Projects
      </button>
    </div>
  );
}

export default NavMenu;

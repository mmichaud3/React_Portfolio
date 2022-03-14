import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <h2>MM</h2>
      <NavMenu />
    </div>
  );
}

export default Header;

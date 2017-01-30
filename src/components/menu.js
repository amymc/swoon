import React from 'react';
import '../styles/modules/menu.css';

const Menu = (props) => {
  return (
    <ul className="menu">
      <li className="menu__item" onClick={(e) => props.onLoginClick(e)}>Log In</li>
      <li className="menu__item">Products</li>
    </ul>
  );
}

export default Menu;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-item.css';

const NavItem = (props) => {
  return (
    <li className="messages-nav__item">
      <NavLink to={`/messages/${props.id}`} className="messages-nav__link ">
        {props.name}
      </NavLink>
    </li>
  );
};
export default NavItem;

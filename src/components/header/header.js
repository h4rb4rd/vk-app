import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <a href="#">
          <img
            className="logo"
            src="https://static.macupdate.com/products/58295/l/antivirus-vk-logo.png?v=1568333312"
            alt="img"
          />
        </a>
      </div>
      <div className="login">{props.isAuth ? `Профиль: ${props.login}` : <NavLink to="login/">Профиль: Tony</NavLink>}</div>
    </header>
  );
};
export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  console.log(props);
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
      <div className="login">{props.isAuth ? props.login : <NavLink to="login/">Login &#62;</NavLink>}</div>
    </header>
  );
};
export default Header;

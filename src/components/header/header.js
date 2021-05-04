import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
      <div className="login">
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logoutTh} className="logout">
              Logout &#10006;
            </button>
          </div>
        ) : (
          // <NavLink to="/">Login</NavLink>
          <Redirect to="/" />
        )}
      </div>
    </header>
  );
};
export default Header;

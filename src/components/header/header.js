import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './header.css';

import logo from '../../assets/images/vk-logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <a href="#">
          <img className="logo" src={logo} alt="img" />
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

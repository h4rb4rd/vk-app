import React from 'react';
import './aside.css';

const Aside = () => {
  return (
    <aside className="aside">
      <nav className="aside__menu aside-menu">
        <ul className="aside-menu__list">
          <li>
            <a href="#" className="aside-menu__link active">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="aside-menu__link ">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="aside-menu__link ">
              Messages
            </a>
          </li>
        </ul>
      </nav>
      {/* friends */}
      <div className="aside__friends aside-friends">
        <h3 className="aside-friends__title">
          Friends Online <span>1</span>
        </h3>
        <ul className="aside-friends__list">
          <li className="aside-friends__item aside-friend">
            <a href="#">
              <img
                className="aside-friend__avatar"
                src="https://www.shareicon.net/data/512x512/2016/05/26/771189_man_512x512.png"
                alt="ava"
              />
            </a>
            <p className="aside-friend__name">Andrew</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

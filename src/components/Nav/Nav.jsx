import "./nav.scss";
import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <a className="nav__link" href="/">
            home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            aboute
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            photos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            videos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

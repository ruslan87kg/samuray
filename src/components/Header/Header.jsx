import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="header-logo"
      />
    </header>
  );
};

export default Header;

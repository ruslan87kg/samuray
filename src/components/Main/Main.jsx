import "./main.scss";
import React from "react";
import Post from "./Posts/Post/Post";

const Main = () => {
  return (
    <main className="main">
      <img
        className="main__img"
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="main-img"
      />
      <div className="props">
        <h1 className="props__title">
          <Post userName="Amirbek" />
          <Post userAge="9" />
        </h1>
      </div>
    </main>
  );
};

export default Main;

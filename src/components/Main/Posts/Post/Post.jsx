import "./post.scss";

import React from "react";

const Post = (props) => {
  return (
    <div className="div">
      {props.userName}
      {props.userAge}
    </div>
  );
};

export default Post;

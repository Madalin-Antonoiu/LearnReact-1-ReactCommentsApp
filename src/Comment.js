import React from "react";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar || "Avatar"} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author || "Undefined name"}
        </a>

        <div className="metadata">
          <span className="date">{props.time || "00:00 undefined"}</span>
        </div>

        <div className="text">{props.text || "Undefined text"}</div>
      </div>
    </div>
  );
};

export default Comment;

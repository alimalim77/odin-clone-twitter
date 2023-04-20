import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Post = () => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              Display Name
              <span className="post-header-special">
                <VerifiedUserIcon />
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>Hello from the other side</p>
          </div>
        </div>
        <img
          src="https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxODQ5ODYy&force=true&w=640"
          alt="Avatar Icon"
        />
        <ChatBubbleOutlineIcon />
        <RepeatIcon />
        <FavoriteBorderIcon />
        <PublishIcon />
      </div>
    </div>
  );
};

export default Post;

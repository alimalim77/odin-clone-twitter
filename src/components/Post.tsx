import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

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
        </div>
      </div>
    </div>
  );
};

export default Post;

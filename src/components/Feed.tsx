import React from "react";
import Tweetbox from "./Tweetbox";
import "./Feed.css";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      <Post />
    </div>
  );
};

export default Feed;

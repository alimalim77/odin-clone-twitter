import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxODQ5ODYy&force=true&w=640" />
          <input type="text" placeholder="What's happening" />
        </div>
        <input
          className="tweetbox-image-input"
          placeholder="Optional: Enter Image URL"
        />
        <br />
        <Button className="tweetbox-button">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;

import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";
import db from "../firebase";

type TweetboxProps = {};

const Tweetbox: React.FC<TweetboxProps> = () => {
  const [tweetMessage, setTweetMessage] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string>("");

  const sendTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Public Tweet Space",
      userName: "notelonmusk",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxODQ5ODYy&force=true&w=640",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxODQ5ODYy&force=true&w=640" />
          <input
            type="text"
            placeholder="What's happening"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetbox-image-input"
          placeholder="Optional: Enter Image URL"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <br />
        <Button className="tweetbox-button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;

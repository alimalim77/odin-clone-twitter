import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget-container">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1550073471283392512"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="alymemememe"
          options={{ height: 600 }}
        />
        <div className="share-btn">
          <TwitterShareButton
            url="https://github.com/alimalim77"
            options={{ text: "Visit my Github Account:" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;

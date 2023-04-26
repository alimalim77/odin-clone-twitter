import React, { useEffect, useState } from "react";
import Tweetbox from "./Tweetbox";
import "./Feed.css";
import Post from "./Post";
import db from "../firebase";

interface PostData {
  avatar: string;
  displayName: string;
  image: string;
  text: string;
  userName: string;
  verified: boolean;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          // Map the properties from the document data
          avatar: doc.data().avatar,
          displayName: doc.data().displayName,
          image: doc.data().image,
          text: doc.data().text,
          userName: doc.data().userName,
          verified: doc.data().verified,
        } as PostData; // Cast the object
      });
      setPosts(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {posts.map((post, index) => (
        <Post
          key={index}
          avatar={post.avatar}
          displayName={post.displayName}
          image={post.image}
          text={post.text}
          userName={post.userName}
          verified={post.verified}
        />
      ))}
    </div>
  );
};

export default Feed;

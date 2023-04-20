import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;

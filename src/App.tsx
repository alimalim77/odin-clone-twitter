import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";

function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;

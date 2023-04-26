import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default App;

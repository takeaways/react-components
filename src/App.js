import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSelector } from "react-redux";
import BotList from "./components/botList";
import BotHeader from "./components/botHeader";

function App() {
  const { mainPost } = useSelector(state => state.post);
  return (
    <div style={{ width: "100%", height: "768px", background: "gray" }}>
      <BotHeader />
      <BotList mainPost={mainPost}></BotList>
    </div>
  );
}

export default App;

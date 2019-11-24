import React, { memo } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSelector } from "react-redux";
import BotList from "./components/botList";
import BotHeader from "./components/botHeader";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <BotHeader />
      <BotList />
    </div>
  );
}

export default App;

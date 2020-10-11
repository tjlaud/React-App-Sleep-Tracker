import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";

function App() {
  return (
    <Router>
      <Login path="/login" default />
      <Home path="/" />
      <Stats path="/stats" />
      <Settings path="/settings" />
      <Summary path="/summary" />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import CreateDet from "./pages/CreateDet";

function App() {
  return (
    <Router>
      <Login path="/login" default />
      <Signup path="/signup" />
      <Home path="/" />
      <Stats path="/stats" />
      <Settings path="/settings" />
      <CreateDet path="/settings/create" />
      <Summary path="/summary" />
    </Router>
  );
}

export default App;

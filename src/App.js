import React from "react";
import "./pages/App.scss";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import CreateDet from "./pages/CreateDet";
import ManageDet from "./pages/ManageDet";
import { DummyDataContext, dummyData } from "./data/index";

function App() {
  return (
    <DummyDataContext.Provider value={dummyData}>
      <Router className="routerBox">
        <Login path="/login" default />
        <Signup path="/signup" />
        <Home path="/" />
        <Stats path="/stats" />
        <Settings path="/settings" />
        <CreateDet path="/settings/create" />
        <ManageDet path="/settings/manage" />
        <Summary path="/summary" />
      </Router>
    </DummyDataContext.Provider>
  );
}

export default App;

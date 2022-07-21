import React, { useEffect, useState } from "react";
import "./App.scss";
import { LocationProvider, Router } from "@reach/router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import CreateDet from "./pages/CreateDet";
import ManageDet from "./pages/ManageDet";
import Headline from "./components/Headline/Headline";
import Navbar from "./components/Navbar/Navbar";
import { DummyDataContext, dummyData } from "./data/index";
import "./App.scss";

function App() {
  const [navLocation, setNavLocation] = useState(window.location.pathname);

  return (
    <LocationProvider>
      <Headline />
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
      <Navbar location={navLocation} updateNav={setNavLocation}></Navbar>
    </LocationProvider>
  );
}

export default App;

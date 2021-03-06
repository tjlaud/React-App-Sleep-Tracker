import React from "react";
import "./App.scss";
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
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Headline from "./components/Headline/Headline";
/* Hi Tom, this is going to explain how I propose we get the header and navbar to remain on the page throughout. Right, so below when we render the App component, all
we're doing is rendering a router at the moment. That's fine and is pretty close to what we want. 

To make it exactly what we want, what we want the App component to do is render a Header component, then the Router (which can display _anything_ we've already built), then a navbar. I've annotated this in the return statement below, prefixed by  <<<.

Then this means that when the user changes url, the header and navbar will stay where they are, only the router stuff will change.

This is not as simple as it sounds and will involved quite a bit of jiggery pokery to get the relevant parts of state in the right place (this component will likely have to start storing some state, for example).

Doing this will probably be quite challenging and definitely improve your understanding of React, don't be disheartened if progress is slow to start off with.*/

function App() {
  return (
    // <<< we can put a <Header /> component in here
    <DummyDataContext.Provider value={dummyData}>
      <Headline />
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
      {/* <Navbar></Navbar> */}
    </DummyDataContext.Provider>
    // <<< we can put a <Navbar /> component in here
  );
}

export default App;

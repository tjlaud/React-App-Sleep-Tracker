import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "@reach/router";
import {
  BottomNavigationAction,
  BottomNavigation,
  Box,
} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Navbar.scss";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setValue(path.split("/")[1]);
  }, []);

  // if we make the navbar stay on the page we'll want to use this,
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // pass it in as an onChange prop to <BottomNavigation>
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  // componentWillReceiveProps(newProps) {
  //   const {pathname} = newProps.location;
  //   const {pathMap} = this.state;

  //   const value = pathMap.indexOf(pathname);

  // };

  handleChange = (event, value) => {
    this.setState(value);
  };

  // the path name is now stored in newValue.
  // newValue now needs to become a prop so that it can be "sent back up" to App.js
  // App.js will then execute the Navigate function

  // The prop needs to be created in App.js then in Navbar we can update the prop each time handleChange is executed. Something like this below.
  // const ChildComponent = (props) => {
  //   return <p>I'm the 1st child!</p>;
  // };

  return (
    <Box className="navBox">
      <BottomNavigation
        className="Navbar"
        value={value}
        style={{ backgroundColor: "#a0bfde" }}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value=""
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Personal"
          value="stats"
          icon={<PersonIcon />}
          onClick={() => {
            navigate("/stats");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Group"
          value="summary"
          icon={<GroupIcon />}
          onClick={() => {
            navigate("/summary");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<SettingsIcon />}
          onClick={() => {
            navigate("/settings");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Navbar;

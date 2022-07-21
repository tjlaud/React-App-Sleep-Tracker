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

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <Box className="navBox">
      <BottomNavigation
        className="Navbar"
        value={props.location}
        style={{ backgroundColor: "#a0bfde" }}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
            props.updateNav("/");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Personal"
          value="/stats"
          icon={<PersonIcon />}
          onClick={() => {
            navigate("/stats");
            props.updateNav("/stats");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Group"
          value="/summary"
          icon={<GroupIcon />}
          onClick={() => {
            navigate("/summary");
            props.updateNav("/summary");
          }}
          classes={{
            iconOnly: styles.navButtonIcon,
            selected: styles.navButtonSelected,
            label: styles.navButtonSelected,
          }}
        />
        <BottomNavigationAction
          label="Settings"
          value="/settings"
          icon={<SettingsIcon />}
          onClick={() => {
            navigate("/settings");
            props.updateNav("/settings");
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

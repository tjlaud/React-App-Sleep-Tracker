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

function Navbar() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setValue(path.split("/")[1]);
  }, []);

  // if we make the navbar stay on the page we'll want to use this,
  // pass it in as an onChange prop to <BottomNavigation>
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Box className="navBox">
      <BottomNavigation
        className="Navbar"
        value={value}
        style={{ backgroundColor: "#e6c17e" }}
      >
        <BottomNavigationAction
          label="Home"
          value=""
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
          }}
        />
        <BottomNavigationAction
          label="Personal"
          value="stats"
          icon={<PersonIcon />}
          onClick={() => {
            navigate("/stats");
          }}
        />
        <BottomNavigationAction
          label="Group"
          value="summary"
          icon={<GroupIcon />}
          onClick={() => {
            navigate("/summary");
          }}
        />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          icon={<SettingsIcon />}
          onClick={() => {
            navigate("/settings");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Navbar;

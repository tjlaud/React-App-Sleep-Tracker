import React, { useState } from "react";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

function Navbar() {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      style={{ backgroundColor: "white" }}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Personal"
        value="person"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Group"
        value="groupStats"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}

export default Navbar;

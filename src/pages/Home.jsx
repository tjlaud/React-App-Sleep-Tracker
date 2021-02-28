import React, { useState } from "react";
import { Button, Box, TextField } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
import styles from "./App.module.scss";

function Home() {
  const [isDay, setIsDay] = useState(true);

  const handleChange = () => {
    setIsDay(!isDay);
  };

  return (
    <Box
      classes={{
        root: isDay ? null : styles.nightOverlay,
      }}
    >
      <Box className="homeBox">
        <Button
          variant="contained"
          color="primary"
          classes={{
            containedPrimary: isDay
              ? styles.containedButtonDay
              : styles.containedButtonNight,
            label: isDay ? null : styles.containedButtonLabelNight,
          }}
          onClick={handleChange}
        >
          {isDay ? "Sleepy Time" : "Wake up"}
        </Button>
        <br />
        <TextField
          label="Set Time"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min...this doesn't seem to be working as expected
          }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          classes={{
            containedPrimary: isDay ? styles.containedButtonDay : styles.hidden,
          }}
        >
          Undo
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          classes={{
            containedPrimary: isDay ? styles.containedButtonDay : styles.hidden,
          }}
          onClick={() => {
            this.setState({ isDay: true });
          }}
        >
          Wake Up
        </Button>
      </Box>
      <Navbar />
    </Box>
  );
}

export default Home;

import React from "react";
import { Button, Box, TextField } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
import styles from "./App.module.scss";

function Home() {
  return (
    <Box>
      <Box className="homeBox">
        <Button
          variant="contained"
          color="primary"
          classes={{ containedPrimary: styles.containedButtonDeepBlue }}
        >
          Sleepy Time
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
          classes={{ containedPrimary: styles.containedButtonDeepBlue }}
        >
          Undo
        </Button>
      </Box>
      <Navbar />
    </Box>
  );
}

export default Home;

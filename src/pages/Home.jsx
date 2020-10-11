import React from "react";
import { Button, Box, TextField } from "@material-ui/core";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        alignItems: "center",
        margin: "10vh auto",
        border: "2px solid grey",
        padding: "5vh",
      }}
    >
      <Button variant="contained" color="primary">
        Sleepy Time
      </Button>
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
      <Button variant="contained" color="primary">
        Undo
      </Button>
      <Navbar />
    </Box>
  );
}

export default Home;

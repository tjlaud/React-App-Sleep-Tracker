import React from "react";
import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Sleep from "../components/Sleep";

function Stats() {
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
      <Headline />
      <Sleep />
      <br />
      <Fab>
        <AddIcon />
      </Fab>
      <Navbar />
    </Box>
  );
}

export default Stats;

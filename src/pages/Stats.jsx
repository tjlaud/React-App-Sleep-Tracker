import React from "react";
import { Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Headline from '../components/Headline';
import Sleep from '../components/Sleep';

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
      <Navbar />
    </Box>
  );
}

export default Stats;

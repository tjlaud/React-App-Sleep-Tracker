import React, { useContext } from "react";
import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "../components/Navbar/Navbar";
import Headline from "../components/Headline/Headline";
import Sleep from "../components/Sleep/Sleep";
import { DummyDataContext } from "../data/index";

function Stats() {
  const { users } = useContext(DummyDataContext);
  const { sleepData } = users[0];
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
      {sleepData.map((sleepObj, index) => {
        return (
          <Sleep
            key={index}
            wentToSleep={sleepObj.wentToSleep}
            wokeUp={sleepObj.wokeUp}
          />
        );
      })}
      <br />
      <Fab>
        <AddIcon />
      </Fab>
      <Navbar />
    </Box>
  );
}

export default Stats;

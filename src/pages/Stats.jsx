import React, { useContext } from "react";
import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "../components/Navbar/Navbar";
import Headline from "../components/Headline/Headline";
import Sleep from "../components/Sleep/Sleep";
import { DummyDataContext } from "../data/index";
import "./App.scss";
import "./AppGlobal.scss";

function Stats() {
  const { users } = useContext(DummyDataContext);
  const { sleepData } = users[0];
  return (
    <Box>
      <Headline />
      <Box className="personalBox">
        {sleepData.map((sleepObj, index) => {
          return (
            <Sleep
              key={index}
              wentToSleep={sleepObj.wentToSleep}
              wokeUp={sleepObj.wokeUp}
            />
          );
        })}
      </Box>
      <br />
      <Box className="fabBox">
        <Fab>
          <AddIcon />
        </Fab>
      </Box>

      <Navbar />
    </Box>
  );
}

export default Stats;

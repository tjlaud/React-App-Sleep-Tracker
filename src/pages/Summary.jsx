import React, { useContext, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import Headline from "../components/Headline/Headline";
import PersonAccordion from "../components/PersonAccordion/PersonAccordion";
import { DummyDataContext } from "../data/index";
import "./App.scss";

function Summary() {
  const { users } = useContext(DummyDataContext);
  const { dets } = useContext(DummyDataContext);
  const [selectedDet, setSelectedDet] = useState("");
  const [selectedDetObj, setSelectedDetObj] = useState({});

  const handleChange = (event) => {
    setSelectedDet(event.target.value);
    setSelectedDetObj(
      dets.find((element) => element.detName === event.target.value) || {}
    );
  };

  return (
    <Box>
      <Headline />
      <Box className="summaryBox">
        <FormControl
          variant="outlined"
          style={{ width: "80%", maxWidth: "500px" }}
        >
          <InputLabel id="det">Select a det</InputLabel>
          <Select id="det" value={selectedDet} onChange={handleChange}>
            <MenuItem value=""></MenuItem>
            {dets.map((detsObj) => {
              return (
                users[0].dets.includes(detsObj.det_id) && (
                  <MenuItem key={detsObj.det_id} value={detsObj.detName}>
                    {detsObj.detName}
                  </MenuItem>
                )
              );
            })}
          </Select>
        </FormControl>
        {users.map((user) => {
          return (
            user.dets.includes(selectedDetObj.det_id) && (
              <PersonAccordion userName={user.userName} />
            )
          );
        })}
        <br />
      </Box>

      <Navbar />
    </Box>
  );
}

export default Summary;

import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
} from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import Person from "../components/Person/Person";
import { DummyDataContext } from "../data/index";
import "./App.scss";

function ManageDet({ navigate }) {
  const { users } = useContext(DummyDataContext);
  const { dets } = useContext(DummyDataContext);
  const [selectedDetObj, setSelectedDetObj] = useState({});
  const [selectedDet, setSelectedDet] = useState("");
  const [editName, setEditName] = useState(true);
  const [detName, setDetName] = useState(selectedDet);

  const handleChange = (event) => {
    setSelectedDet(event.target.value);
    setDetName(event.target.value);
    setSelectedDetObj(
      dets.find((element) => element.detName === event.target.value) || {}
    );
  };

  const handleDetName = (event) => {
    setDetName(event.target.value);
  };

  const handleToggle = () => {
    setEditName(!editName);
  };

  return (
    <Box className="box">
      <FormControl variant="outlined" style={{ width: "80%" }}>
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
      <br />

      <TextField
        variant="outlined"
        value={detName}
        disabled={editName}
        onChange={handleDetName}
      />
      <br />

      <Button variant="contained" color="primary" onClick={handleToggle}>
        {editName ? "Edit" : "Submit"}
      </Button>
      <br />
      <List>
        {selectedDetObj.users?.map((userID) => {
          return <Person key={userID} userID={userID} />;
        })}
      </List>
      <br />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/settings");
        }}
      >
        Delete Det
      </Button>

      <Navbar />
    </Box>
  );
}

export default ManageDet;

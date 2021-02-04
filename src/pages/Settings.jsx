import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import { DummyDataContext } from "../data/index";
import "./App.scss";

function Settings({ navigate }) {
  const { users } = useContext(DummyDataContext);
  const { dets } = useContext(DummyDataContext);
  const [selectedDet, setSelectedDet] = useState("");
  const [editName, setEditName] = useState(true);
  const [userName, setUserName] = useState(users[0].userName);

  const handleChange = (event) => {
    setSelectedDet(event.target.value);
  };
  const handleToggle = () => {
    setEditName(!editName);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Box className="settingsBox">
      <TextField
        variant="outlined"
        value={userName}
        onChange={handleUserName}
        disabled={editName}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleToggle}>
        {editName ? "Edit" : "Submit"}
      </Button>
      <br />
      <FormControl
        variant="outlined"
        style={{ width: "80%", maxWidth: "500px" }}
      >
        <InputLabel id="det">Select a det</InputLabel>
        <Select id="det" value={selectedDet} onChange={handleChange}>
          <MenuItem value=""></MenuItem>
          {dets.map((detsObj) => {
            return (
              detsObj.users.includes(users[0].user_id) && (
                <MenuItem key={detsObj.det_id} value={detsObj.detName}>
                  {detsObj.detName}
                </MenuItem>
              )
            );
          })}
        </Select>
      </FormControl>
      <br />
      <Button variant="contained" color="primary">
        Join det
      </Button>
      <br />
      {users[0].isAdmin && (
        <>
          <Button
            className="adminButton"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("create");
            }}
          >
            Create a det
          </Button>
          <br />
          <Button
            className="adminButton"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("manage");
            }}
          >
            Manage a det
          </Button>
        </>
      )}

      <Navbar />
    </Box>
  );
}

export default Settings;

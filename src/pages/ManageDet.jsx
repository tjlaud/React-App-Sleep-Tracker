import React from "react";
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
import Navbar from "../components/Navbar";
import Person from "../components/Person";

function ManageDet() {
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
      <FormControl variant="outlined" style={{ width: "80%" }}>
        <InputLabel id="det">Select a det</InputLabel>
        <Select id="det" value="">
          <MenuItem value="20-1">20-1</MenuItem>
          <MenuItem value="20-2">20-2</MenuItem>
          <MenuItem value="20-3">20-3</MenuItem>
        </Select>
      </FormControl>
      <br />

      <TextField variant="outlined" value="the dets name" disabled={true} />
      <br />

      <Button variant="contained" color="primary">
        Edit
      </Button>
      <br />
      <List>
        <Person />
      </List>
      <br />

      <Button variant="contained" color="secondary">
        Delete Det
      </Button>

      <Navbar />
    </Box>
  );
}

export default ManageDet;

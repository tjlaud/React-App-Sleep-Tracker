import React from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Navbar from "../components/Navbar";

function Settings() {
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
      <TextField
        variant="outlined"
        value="the users actual name"
        disabled={true}
      />
      <br />

      <Button variant="contained" color="primary">
        Edit
      </Button>
      <br />
      <FormControl variant="outlined" style={{ width: "80%" }}>
        <InputLabel id="det">Select a det</InputLabel>
        <Select id="det">
          <MenuItem value="20-1">20-1</MenuItem>
          <MenuItem value="20-2">20-2</MenuItem>
          <MenuItem value="20-3">20-3</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Button variant="contained" color="primary">
        Join det
      </Button>
      <br />
      <Button variant="contained" color="primary">
        Create a det
      </Button>
      <br />
      <Button variant="contained" color="primary">
        Manage a det
      </Button>
      <Navbar />
    </Box>
  );
}

export default Settings;

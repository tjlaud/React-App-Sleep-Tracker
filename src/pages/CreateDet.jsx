import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
import "./AppGlobal.scss";

function CreateDet({ navigate }) {
  return (
    <Box className="settingsBox">
      <TextField variant="outlined" label="Enter Det name" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("../manage");
        }}
      >
        Create Det
      </Button>

      <Navbar />
    </Box>
  );
}

export default CreateDet;

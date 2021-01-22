import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";

function CreateDet({ navigate }) {
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

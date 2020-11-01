import React from "react";
import { TextField, Button, Box } from "@material-ui/core";

function Signup({ navigate }) {
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
      <TextField label="Email Address" variant="outlined" />
      <TextField label="User Name" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        SignUp
      </Button>
    </Box>
  );
}

export default Signup;

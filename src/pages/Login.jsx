import React from "react";
import { useNavigate } from "@reach/router";
import { TextField, Button, Box } from "@material-ui/core";

function Login() {
  const navigate = useNavigate();

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
      <TextField label="User Name" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Create Account
      </Button>
    </Box>
  );
}

export default Login;

import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import "./App.scss";

function Login({ navigate }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="box">
      <TextField
        label="User Name"
        variant="outlined"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
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

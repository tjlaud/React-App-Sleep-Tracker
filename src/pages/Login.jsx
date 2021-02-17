import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import "./App.scss";
import "./AppGlobal.scss";

function Login({ navigate }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="loginBox">
      <TextField
        label="User Name"
        variant="outlined"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </Button>
      <br />
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

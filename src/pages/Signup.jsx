import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";

function Signup({ navigate }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
        label="Email Address"
        value={email}
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        label="User Name"
        value={userName}
        variant="outlined"
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
          navigate("/login");
        }}
      >
        SignUp
      </Button>
    </Box>
  );
}

export default Signup;

import React, { useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  option,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import { DummyDataContext } from "../data/index";

function Settings({ navigate }) {  
  const { user } = useContext(DummyDataContext); 
  const { dets } = useContext(DummyDataContext); 
  

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
        value={user.userName}
        disabled={true}
      />
      <br />

      <Button variant="contained" color="primary">
        Edit
      </Button>
      <br />
      <FormControl variant="outlined" style={{ width: "80%" }}>
        <InputLabel id="det">Select a det</InputLabel>
        <Select     
          value=""
          native   
          id="det"          
        >
          <option value=""></option>
          {   
            dets.map((detsObj, ) => {              
              return (
                 <option value="">{detsObj.detName}</option>
              );
            }   
            )
          }
    
        </Select>
      </FormControl>
      <br />
      <Button variant="contained" color="primary">
        Join det
      </Button>
      <br />
      {
        user.isAdmin && <><Button
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
        </Button></> 
      }
      
      <Navbar />
    </Box>
  );
}

export default Settings;


/*
        {    
          dets.map((detsObj, ) => {
            return (
            <MenuItem value="">{detsObj.detName}</MenuItem>
            );
          }   
        )}
        */


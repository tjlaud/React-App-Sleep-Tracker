import React from "react";
import { Button, Box, TextField } from "@material-ui/core";
import Navbar from "../components/Navbar/Navbar";
import "./App.scss";
import styles from "./App.module.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isDay: true,
    };
  }

  render() {
    const { isDay } = this.state;

    return (
      <Box>
        <Box className="homeBox">
          <Button
            variant="contained"
            color="primary"
            classes={{
              containedPrimary: isDay
                ? styles.containedButtonDay
                : styles.containedButtonNight,
            }}
            onClick={() => {
              // handleChange function to switch states
              this.setState({ isDay: false });
            }}
          >
            {isDay ? "Sleepy Time" : "Click the button below to wake up"}
          </Button>
          <br />
          <TextField
            label="Set Time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min...this doesn't seem to be working as expected
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            classes={{ containedPrimary: styles.containedButtonDeepBlue }}
          >
            Undo
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            classes={{
              containedPrimary: styles.containedButtonDeepBlue,
              // containedPrimary: styles.hidden, // this is temporary
            }}
            onClick={() => {
              // set state here to "nightMode"
              this.setState({ isDay: true });
            }}
          >
            Wake Up
          </Button>
        </Box>
        <Navbar />
      </Box>
    );
  }
}

export default Home;

// JS with a switch between day and night. When the button is clicked an onchange sends it to this function
// class Test extends React.Component {
//   constructor() {
//     dayMode = false
//     if dayMode ?!
//     };
// }

// the div then returns a classes with (this.state)
// render() {
//     return (
//         <div>
//           <p>{this.state.id}</p>
//           <p>{this.state.name}</p>
//         </div>
//     );
// }
// }

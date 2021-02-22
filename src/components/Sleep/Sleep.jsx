import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// after renaming the file to Sleep.module.scss, you can do this... (now scroll down to line 51)
import styles from "../../pages/App.module.scss";

function Sleep({ wentToSleep, wokeUp }) {
  const duration = wokeUp.getTime() - wentToSleep.getTime();
  const durationHours = duration / 1000 / 60 / 60;

  return (
    <Accordion
      style={{
        width: "80%",
        maxWidth: "500px",
        background: "transparent",
        marginTop: "5px",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1">
          Date from: {wentToSleep.toDateString()}
        </Typography>
        <Typography variant="body1"> Duration: {durationHours}Hrs</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          label="From"
          type="datetime-local"
          defaultValue={wentToSleep.toISOString().slice(0, -8)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="To"
          type="datetime-local"
          defaultValue={wokeUp.toISOString().slice(0, -8)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* the code below is demonstrating how to use the classes prop to overwrite a style*/}
        <Button
          variant="contained"
          color="primary"
          classes={{ containedPrimary: styles.containedButtonDeepBlue }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          classes={{ containedSecondary: styles.containedButtonLightBlue }}
        >
          Delete
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}

export default Sleep;

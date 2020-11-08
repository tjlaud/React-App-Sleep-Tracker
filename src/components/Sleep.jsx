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

function Sleep({ wentToSleep, wokeUp }) {
  const duration = wokeUp.getTime() - wentToSleep.getTime();
  const durationHours = duration / 1000 / 60 / 60;

  return (
    <Accordion style={{ width: "80%" }}>
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
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}

export default Sleep;

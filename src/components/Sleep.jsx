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

function Sleep() {
  return (
    <Accordion style={{ width: "80%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1">Date from:</Typography>
        <Typography variant="body1">Duration:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          label="From"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="From"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
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

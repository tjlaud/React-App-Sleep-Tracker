import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function PersonAccordion(props) {
  return (
    <Accordion style={{ width: "80%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1">{props.userName}</Typography>
        <SentimentVerySatisfiedIcon />
        <SentimentVeryDissatisfiedIcon />
      </AccordionSummary>
      <AccordionDetails>
        <TextField label="tbc" />
      </AccordionDetails>
    </Accordion>
  );
}

export default PersonAccordion;

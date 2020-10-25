import React from "react";
import {ListItem, ListItemAvatar, ListItemSecondaryAction, Avatar, ListItemText, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


function Person () {

  return (
    <ListItem style={{
      listStyleType: "none"
    }}>
      <ListItemAvatar>
        <Avatar>
          NB
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Nathan Bargery"
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )

};

export default Person;
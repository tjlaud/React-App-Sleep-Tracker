import React, { useContext } from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { DummyDataContext } from "../../data/index";

function Person(props) {
  const { users } = useContext(DummyDataContext);

  const userObj =
    users.find((element) => element.user_id === props.userID) || {};

  let nameArray = userObj.userName.split(" ");
  let firstInitial = nameArray[0][0];
  let lastword = nameArray.length - 1;
  let secondInitial = nameArray[lastword][0];

  let initials = firstInitial + secondInitial;

  return (
    <ListItem
      style={{
        listStyleType: "none",
      }}
    >
      <ListItemAvatar>
        <Avatar>{initials}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={userObj.userName} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Person;

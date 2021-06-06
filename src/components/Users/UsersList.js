import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {

  const element = props.users.length
    ? (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>{user.name} ({user.age} years old)</li>
          ))}
        </ul>
      </Card>
    )
    : null;

  return element;
}

export default UsersList;

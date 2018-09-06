/**
 * App
 * main component render UserCreate and UsersIndex containers
 */
import React from "react";
import injectSheet from 'react-jss';

import UsersIndex from "../containers/UsersIndex";
import UserCreate from "../containers/UserCreate";

// styles written in react-jss
const styles = {
  app: {
    display: 'flex',
    width: '70%',
    margin: '100px auto',
    border: '1px solid black',
    backgroundColor: 'lightblue'
  },
  user: {
    width: '50%',
    border: '1px solid black'
  }
}

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <div className={classes.user}>
        <UsersIndex />
      </div>
      <div className={classes.user}>
        <UserCreate />
      </div>
    </div>
  );
}

export default injectSheet(styles)(App);

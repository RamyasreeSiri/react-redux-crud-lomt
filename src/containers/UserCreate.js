/**
 * UserCreate
 * container for user input form
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";

import { createUser, deleteUser } from "../actions/userActions";
// styles written in react-jss
const styles = {
  forms: {
    marginTop: 50,
    borderTop: "1px solid black",
    padding: "0 10px 10px 50px",
    "& label": {
      display: "block",
      "& span": {
        display: "inline-block",
        width: 50,
        textAlign: "right"
      }
    }
  },
  input: {
    marginTop: "15px",
    marginLeft: "10px"
  },
  buttons: {
    marginLeft: 50,
    display: "flex",
    justifyContent: "flex-start"
  }
};

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      role: ""
    };
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.user.name !== prevProps.user.name ||
      this.props.user.role !== prevProps.user.role ||
      this.props.user.id !== prevProps.user.id
    ) {
      this.setState({
        id: this.props.user.id,
        name: this.props.user.name,
        role: this.props.user.role
      });
    }
  }

  /**
   * for creating user data with unique id and the entered name and role
   * @param eve
   */
  handleSubmit = eve => {
    const time = new Date().valueOf();
    const id = this.state.id || time;
    this.props.createUser(id, this.state.name, this.state.role);
    this.setState({
      id: "",
      name: "",
      role: ""
    });
    eve.preventDefault();
  };

  /**
   * controls the name input field
   * @param eve
   */
  handleNameChange = eve => {
    this.setState({
      name: eve.target.value
    });
  };

  /**
   * controls the role input field
   * @param eve
   */
  handleRoleChange = eve => {
    this.setState({
      role: eve.target.value
    });
  };

  /**
   * deletes the user using id from the user
   * @param id
   */
  handleDelete(id) {
    this.props.deleteUser(id);
    this.setState({
      id: "",
      name: "",
      role: ""
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.forms} onSubmit={this.handleSubmit}>
          <label>
            <span>Name:</span>
            <input
              className={classes.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              autoComplete="off"
              autoFocus
              required
            />
          </label>
          <label>
            <span>Role:</span>
            <input
              className={classes.input}
              name="role"
              type="text"
              value={this.state.role}
              onChange={this.handleRoleChange}
              autoComplete="off"
              required
            />
          </label>
          <div className={classes.buttons}>
            <input
              className={classes.input}
              type="button"
              value="Delete"
              disabled={!this.state.id}
              onClick={this.handleDelete.bind(this, this.state.id)}
            />
            <input className={classes.input} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { createUser, deleteUser }
)(injectSheet(styles)(UserCreate));

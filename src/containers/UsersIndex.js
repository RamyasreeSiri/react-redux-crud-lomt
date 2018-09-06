/**
 * UsersIndex
 * container for displaying the user list
 */
import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers, getUser } from "../actions/userActions";

class UsersIndex extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  /**
   * calls the action getUser when user clicks a name in the user list
   * @param id
   */
  handleUserDetails(id) {
    let user = this.props.users[id];
    this.props.getUser(user);
  }

  // returns user list 
  renderUsers = () => {
    return Object.keys(this.props.users).map(item => {
      return (
        <li
          key={this.props.users[item].id}
          onClick={this.handleUserDetails.bind(this, this.props.users[item].id)}
        >
          {this.props.users[item].name}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>User List</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getUsers, getUser }
)(UsersIndex);

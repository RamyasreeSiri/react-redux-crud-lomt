/**
 * userActions
 * contains all the action creators
 */
import * as allActions from "./index";
import data from "../assets/data.json";

export const getUsers = () => {
  const request = data;
  return {
    type: allActions.GET_USERS,
    payload: request
  };
};

export const createUser = (id, name, role) => {
  const request = {
    id: id,
    name: name,
    role: role
  };

  return {
    type: allActions.CREATE_USER,
    payload: request
  };
};

export const getUser = user => {
  return {
    type: allActions.GET_USER,
    payload: user
  };
};

export const deleteUser = id => {
  return {
    type: allActions.DELETE_USER,
    payload: id
  };
};

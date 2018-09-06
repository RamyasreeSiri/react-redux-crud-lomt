/**
 * index
 * reducer for setting user list state object
 */
import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import activeUserReducer from "./activeUserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: activeUserReducer
});

export default rootReducer;

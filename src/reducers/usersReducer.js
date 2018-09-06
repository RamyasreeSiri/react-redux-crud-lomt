/**
 * usersReducer
 * reducer for setting user list state object
 */
import { GET_USERS, CREATE_USER, DELETE_USER } from "../actions/index";

const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return arrayToObject(action.payload, "id");
    case CREATE_USER:
      const newCreateState = { ...state };
      newCreateState[action.payload.id] = action.payload;
      return newCreateState;
    case DELETE_USER:
      const newDelState = { ...state };
      delete newDelState[action.payload];
      return newDelState;
    default:
      return state;
  }
}

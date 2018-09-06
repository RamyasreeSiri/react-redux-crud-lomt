/**
 * activeUserReducer
 * reducer for setting active selected user state object
 */
import { GET_USER } from "../actions/index";

export default function activeUserReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}

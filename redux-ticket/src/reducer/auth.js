import { LOGIN_USERS } from "../action/auth";

export function loginUsers(state = { data: '' }, action) {
  switch (action.type) {
    case LOGIN_USERS:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
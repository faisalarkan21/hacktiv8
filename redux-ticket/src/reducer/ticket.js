
import { GET_TICKETS } from "../action/ticket";

export function getTickets(state = { data: [] }, action) {
  switch (action.type) {
    case GET_TICKETS:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
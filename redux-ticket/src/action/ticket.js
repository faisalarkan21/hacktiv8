import Services from '../utils/api'
export const GET_TICKETS = "GET_TICKETS";

export function getTicket(data) {
  return {
    type: GET_TICKETS,
    data
  };
}

export function getTicketThunk() {
  return dispatch => {
     new Services().get('list-ticket').then((data) => {
         dispatch(getTicket(data))
     })
  };
}

import { ADD_NUMBER, ADD_NUMBER170 } from "../action/count";


export function addNumber(state = { data: 90 }, action) {
    console.log('action', action)
  switch (action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}


export function addNumber170(state = { data: 90 }, action) {
  console.log('action', action)
switch (action.type) {
  case ADD_NUMBER170:
    return Object.assign({}, state, {
      data: action.data
    });
  default:
    return state;
}
}

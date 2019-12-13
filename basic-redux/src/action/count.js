export const ADD_NUMBER = "ADD_NUMBER";
export const ADD_NUMBER170 = "ADD_NUMBER170";
export const SUBTRACT_NUMBER = "SUBTRACT_NUMBER";

export function addNumber(data) {
  return {
    type: ADD_NUMBER,
    data
  };
}

export function addNumber170(data) {
  return {
    type: ADD_NUMBER170,
    data
  };
}

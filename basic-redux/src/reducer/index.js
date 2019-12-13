import { combineReducers } from 'redux';
import { addNumber, addNumber170 } from './count';

export default combineReducers({
  addNumberComponent: addNumber,
  addNumberComponent2: addNumber170
});

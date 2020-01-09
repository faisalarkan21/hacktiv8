import { combineReducers } from 'redux';
import { loginUsers } from './auth';
import { getTickets } from './ticket'

export default combineReducers({
    loginUsers,
    getTickets,
});

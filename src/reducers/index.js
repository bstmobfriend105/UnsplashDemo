import { combineReducers } from 'redux';
import SearchUsers from './reducer_users';

const rootReducer = combineReducers({
    searchUsers: SearchUsers,
});

export default rootReducer;
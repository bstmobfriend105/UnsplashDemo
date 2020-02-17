import { SEARCH_USERS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case SEARCH_USERS:
            console.log('action.payload.results: ', action.payload.results)
            return action.payload.results;

    }
    return state;
}
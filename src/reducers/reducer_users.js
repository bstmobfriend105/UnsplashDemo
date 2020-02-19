import { 
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAIL
} from '../actions/index';

const initialState = { isLoading: false, isError: false, data: [] };

export default function (state = initialState, action) {
    switch (action.type){
        case SEARCH_USERS:
            return { ...state, isLoading: true,  isError: false };
        case SEARCH_USERS_SUCCESS:
            //console.log('action.payload.results: ', action.payload.results)
            return { ...state, isLoading: false,  isError: false, data: action.payload.results};
        case SEARCH_USERS_FAIL:
            return { ...state, isLoading: false,  isError: true, data: action.payload};
        default:
            return state;
    }
}
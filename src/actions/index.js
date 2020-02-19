import Unsplash ,{ toJson } from 'unsplash-js/native';
import config from '../config';

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAIL = 'SEARCH_USERS_FAIL';

const unsplash = new Unsplash({
    accessKey: config.accessKey,
    secret: config.secretKey,
    timeout: 500 
});

export function searchUsers(userName) {
   
    return dispatch => {
        console.log('searching term: ', userName)
        dispatch ({
            type: SEARCH_USERS,
            payload: null
        })
        unsplash.search.users(userName)
        .then(toJson)
        .then(data => {
            dispatch ({
                type: SEARCH_USERS_SUCCESS,
                payload: data
            })
        })
        .catch((error) => {
            console.log('error: ', error)
            dispatch ({
                type: SEARCH_USERS_FAIL,
                payload: error
            })
        });
    }
}
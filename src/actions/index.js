import Unsplash ,{ toJson } from 'unsplash-js/native';
import config from '../config';

export const SEARCH_USERS = 'SEARCH_USERS';

const unsplash = new Unsplash({
    accessKey: config.accessKey,
    secret: config.secretKey,
    timeout: 500 
});

export function searchUsers(userName) {
   
    return dispatch => {
        console.log('searching term: ', userName)
        unsplash.search.users(userName)
        .then(toJson)
        .then(data => {
            dispatch ({
                type: SEARCH_USERS,
                payload: data
            })
        })
        .catch((error) => {
            console.log('error: ', error)
        });
    }
}
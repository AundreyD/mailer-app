import {SET_USERNAME, HOME_VALIDATION} from '../actions/actions';

const defaultStore = {
        username: '',
        homeValidation: false
    };

export const info = (state = [], action) => {
    switch (action.type){
        case SET_USERNAME:
            return {
                ...state,
                username: action.name
            }
        case HOME_VALIDATION:
            return {
                ...state,
                homeValidation: true
            }
        default:
            return state;
    }
}
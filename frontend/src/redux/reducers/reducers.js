import {SET_USERNAME} from '../actions/actions';

export const info = (state = [], action) => {
    switch (action.type){
        case SET_USERNAME:
            return {
                ...state,
                username: action.name
            }
        default:
            return state;
    }
}
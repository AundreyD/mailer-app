export const SET_USERNAME = "SET_USERNAME";
export const HOME_VALIDATION = "HOME_VALIDATION";

export const setUsername = (name) =>{
    return {type: SET_USERNAME, name}
}

export const addHomeValidation = () =>{
    return {type: HOME_VALIDATION}
}
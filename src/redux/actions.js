import {LOGIN , IS_LOADING, IS_BTN_DISABLED} from "./actionTypes";


export const login = (access_token, username,first_name, last_name,role) => ({
    type: LOGIN,
    access_token, 
    username,
    first_name,
    last_name,
    role
});

export const isBtnDisabled = (value) => ({
    type: IS_BTN_DISABLED,
    isBtnDisabled: value
});

export const isAppLoading = (value) => ({
    type: IS_LOADING,
    isLoading:value
});

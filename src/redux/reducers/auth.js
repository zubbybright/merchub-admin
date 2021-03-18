import {LOGIN, RESTORE_TOKEN, LOGOUT }from "../actionTypes";

const defaultState =  {
    isSignedout: true,
    userToken: null,
    username     : '',
    firstName :'',
    lastName:'',
    role:''
  }


const auth = (state = defaultState , action) => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
              ...state,
              userToken: action.token,
        }
        case LOGIN: {
            return {
                ...state,
                userToken: action.access_token,
                username: action.username,
                firstName :action.first_name ,
                lastName : action.last_name,
                role: action.role,
                isSignedout:false
            }
        }
        case LOGOUT:
            return defaultState
        default:
            return state;
    }
}

export default auth;
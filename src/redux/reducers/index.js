import { combineReducers } from 'redux';
import auth from "./auth";
import product from "./product";
import common from "./common";


export default combineReducers({ auth, product ,common});
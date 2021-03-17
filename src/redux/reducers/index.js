import { combineReducers } from 'redux';
import auth from "./auth";
import product from "./product";
import common from "./common";
import category from "./category";


export default combineReducers({ auth, product ,common, category});
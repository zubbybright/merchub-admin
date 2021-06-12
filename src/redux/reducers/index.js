import { combineReducers } from 'redux';
import auth from "./auth";
import product from "./product";
import common from "./common";
import category from "./category";

const allReducers = combineReducers({auth, product ,common, category});

export default allReducers;
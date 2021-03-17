import { CATEGORIES_LOADED  } from "../actionTypes";

const defaultState = {
categories:[]
}

export default (state = defaultState, action) => {

  switch(action.type) {
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.categories,
      };
    default:
        return state;
  }
}
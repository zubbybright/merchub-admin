import { CATEGORIES_LOADED  } from "../actionTypes";

const defaultState = {
categories:[]
}

const category = (state = defaultState, action) => {

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
export default category;
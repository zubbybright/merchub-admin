import { CATEGORIES_LOADED, SPECIFIC_CATEGORY_FETCHED  } from "../actionTypes";

const defaultState = {
categories:[],
specificCategory:{}
}

const category = (state = defaultState, action) => {

  switch(action.type) {
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.categories,
      };
    case SPECIFIC_CATEGORY_FETCHED:
      return {
        ...state,
        specificCategory : action.category
      }
    default:
        return state;
  }
}
export default category;
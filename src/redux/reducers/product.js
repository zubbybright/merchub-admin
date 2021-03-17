import { PRODUCTS_LOADED } from "../actionTypes";

const defaultState = {
products:[],
}

export default (state = defaultState, action) => {

  switch(action.type) {
    case PRODUCTS_LOADED:
      return {
        ...state,
        products: action.products,
      };
    default:
        return state;
  }
}
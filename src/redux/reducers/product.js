import { PRODUCTS_LOADED, PRODUCTS_COUNTED } from "../actionTypes";

const defaultState = {
products:[],
productsCount: 0,
}

const product = (state = defaultState, action) => {

  switch(action.type) {
    case PRODUCTS_LOADED:
      return {
        ...state,
        products: action.products,
      };
    case PRODUCTS_COUNTED:
      return {
        ...state,
        productsCount: action.value
      }
    default:
        return state;
  }
}

export default product;
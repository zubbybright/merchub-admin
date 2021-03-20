import { PRODUCTS_LOADED, PRODUCTS_COUNTED, PRODUCTS_AVAILABILITY_LOADED,
  SPECIFIC_PRODUCT_FETCHED,
} from "../actionTypes";

const defaultState = {
products:[],
productsCount: 0,
productsAvailability : [0],
specificProduct:{}
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
    case PRODUCTS_AVAILABILITY_LOADED:
      return {
        ...state,
        productsAvailability : action.value
      }
    case SPECIFIC_PRODUCT_FETCHED:
      return {
        ...state,
        specificProduct : action.value
      }
    default:
        return state;
  }
}

export default product;
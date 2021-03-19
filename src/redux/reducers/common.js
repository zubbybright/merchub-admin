import { IS_LOADING, IS_BTN_DISABLED, VALUE_SELECTED  } from "../actionTypes";

const defaultState = {
  isLoading: false,
  isBtnDisabled: true,
  selectedValue: ''
}

const common = (state = defaultState, action) => {

  switch(action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
     case IS_BTN_DISABLED:
      return {
        ...state,
        isBtnDisabled: action.isBtnDisabled,
      };
      case VALUE_SELECTED:
        return {
          ...state,
          selectedValue: action.value,
        };
    default:
        return state;
  }
}

export default common;
import { addItem } from './utils';
import * as actionTypes from './action-types';

const initialState = {
  cart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {...state, cart: addItem(state.cart, action.payload)};
    case actionTypes.REMOVE_ITEM:
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
    case actionTypes.INCREASE_QUANT:
      return {...state, cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)};
    case actionTypes.DECREASE_QUANT:
      return {...state, cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)};
    default:
    return state;
  }
}

export default reducer;

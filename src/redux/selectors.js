import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartCount = createSelector([selectCart], cart => cart.reduce((acc, item) => acc + item.quantity, 0));

export const selectCartPrice = createSelector([selectCart], cart => cart.reduce((acc, item) => acc + (item.quantity * item.price), 0));

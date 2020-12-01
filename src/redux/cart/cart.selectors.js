import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((sum, curItem) => sum + curItem.quantity, 0)
);

export const totalSelectedItemsPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((sum, curItem) => sum + curItem.quantity * curItem.price, 0)
);
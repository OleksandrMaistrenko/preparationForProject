import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.count += 1;
        existingItem.totalPrice = existingItem.count * item.unitPrice;
      } else {
        state.cartItems.push({ ...item, count: 1, totalPrice: item.unitPrice });
      }

      state.totalPrice = state.cartItems.reduce(
        (sum, cartItem) => sum + cartItem.totalPrice,
        0
      );
      state.totalCount = state.cartItems.reduce(
        (sum, cartItem) => sum + cartItem.count,
        0
      );
    },
    decreaseCountItem(state, action) {
      const itemId = action.payload.id;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count -= 1;
          existingItem.totalPrice = existingItem.count * existingItem.unitPrice;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId
          );
        }
      }

      state.totalPrice = state.cartItems.reduce(
        (sum, cartItem) => sum + cartItem.totalPrice,
        0
      );
      state.totalCount = state.cartItems.reduce(
        (sum, cartItem) => sum + cartItem.count,
        0
      );
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addToCart, decreaseCountItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

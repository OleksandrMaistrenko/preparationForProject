import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "../slices/CartSlices";
import menuSlice from "../slices/menuSlice";

const store = configureStore({
  reducer: {
    cart: CartSlices,
    menu: menuSlice,
  },
});

export default store;

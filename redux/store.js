import { configureStore } from "@reduxjs/toolkit";
import profitReducer from "./profitSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    profit: profitReducer,
    cart: cartReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore;
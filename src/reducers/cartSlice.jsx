import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action){
            state.items.push(action.payload);
        },
        removeItem(state, action){
            const cartItems = state.items.filter((item) => item.card.info.id != action.payload);
            return { items: cartItems}
        },
        clearCart(){
            return { items: [] }
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
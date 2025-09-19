import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action){
            state.items.push(action.payload);
        },
        clearCart(){
            return { items: [] }
        },
        removeItem(state, action){
            console.log(action)
            return { items: state.items.filter((item) => item.card.info.id != action.payload)};
        }
    }
})

export const {addItem, clearCart, removeItem} = cartSlice.actions

export default cartSlice.reducer;
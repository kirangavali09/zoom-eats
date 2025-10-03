import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'authentication',
    initialState: {
        userInfo : []
    },
    reducers: {
        storeUserInfo(state, action){
            state.userInfo.push(action.payload);
        },
        removeUserInfo(){
            return { userInfo : [] }
        }
    }
})

export const { storeUserInfo, removeUserInfo} = authSlice.actions;
export default authSlice.reducer
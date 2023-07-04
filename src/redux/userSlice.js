import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        userEdited: {},
        detail: {}
    },  
    reducers: {
        getUsersState: (state, action)=>{
            state.users = action.payload
        },
        getUserIDState: (state, action) => {
            state.detail = action.payload;
        },
        putUserState: (state, action) => {
            state.userEdited = action.payload

        },
        putUserState: (state, action) => {
            state.detail = state.users.find(user => user._id === action.payload._id);
        },       
        userBanned: (state, action) => {
            state.detail.active = !state.detail.active;
        }
    }
});

export const { getUsersState, putUserState, userDetailID, getUserIDState, userBanned } = userSlice.actions;

export default userSlice.reducer;
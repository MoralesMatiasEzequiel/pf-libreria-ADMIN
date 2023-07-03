import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        userID:[],
        detail: {}
    },
    reducers: {
        getUsersState: (state, action)=>{
            state.users = action.payload
        },
        putUserState: (state, action) => {
            state.detail = state.userID.filter(pro => pro.id === action.payload)
            // state.userID = []
        },
        // putUserIDState: (state, action) => {
        //     state.userID = action.payload
        // }
    }
});

export const { getUsersState, putUserState ,putUserIDState } = userSlice.actions;

export default userSlice.reducer;
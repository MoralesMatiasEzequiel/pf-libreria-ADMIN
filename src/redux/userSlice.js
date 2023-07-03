import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        userOfPut:[]
    },
    reducers: {
        getUsersState: (state, action)=>{
            state.users = action.payload
        },
        putUserState: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        putUserIDState: (state, action) => {
            state.userOfPut = action.payload
        }
    }
});

export const { getUsersState, putUserState ,putUserIDState } = userSlice.actions;

export default userSlice.reducer;
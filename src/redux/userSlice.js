import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {
        getUsersState: (state, action)=>{
            state.users = action.payload
        },
    }
});

export const { getUsersState } = userSlice.actions;

export default userSlice.reducer;
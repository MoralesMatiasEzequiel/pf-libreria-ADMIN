import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        logged: false
    },  
    reducers: {
        changeState: (state, action)=>{
            state.logged = !state.logged
        }
    }
});

export const { changeState } = adminSlice.actions;

export default adminSlice.reducer;
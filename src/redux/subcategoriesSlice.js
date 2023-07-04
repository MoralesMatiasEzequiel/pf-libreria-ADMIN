import { createSlice } from "@reduxjs/toolkit";

export const subcategoriesSlice = createSlice({
    name: "subcategories",
    initialState: {
        subcategories: [],
    },
    reducers: {
        getAllSubcategories: (state, action) => {
            state.subcategories = action.payload
        }
    }
})

export const { getAllSubcategories } = subcategoriesSlice.actions

export default subcategoriesSlice.reducer
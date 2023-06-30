import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        getAllProductsState: (state, action)=>{
            state.products = action.payload
        }
    }

})

export const {getAllProductsState} = productsSlice.actions

export default productsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productSee: []
    },
    reducers: {
        getAllProductsState: (state, action)=>{
            state.products = action.payload
        },
        createProductState: (state, action) => {
            state.products = [...state.products, action.payload]
            state.productSee = [...state.productSee, action.payload]
        },
    }

})

export const { getAllProductsState, createProductState } = productsSlice.actions

export default productsSlice.reducer
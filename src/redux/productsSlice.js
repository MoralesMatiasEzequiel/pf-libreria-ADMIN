import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productSee: [],
        productOfEdit: {}
    },
    reducers: {
        getAllProductsState: (state, action) => {
            state.products = action.payload
        },
        createProductState: (state, action) => {
            state.products = [...state.products, action.payload]
            state.productSee = [...state.productSee, action.payload]
        },
        modifiedProductState: (state, action) => {
            state.productOfEdit = action.payload

        },
    }

})

export const { getAllProductsState, createProductState ,modifiedProductState } = productsSlice.actions

export default productsSlice.reducer
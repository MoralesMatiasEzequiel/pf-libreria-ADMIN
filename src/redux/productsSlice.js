import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productSee: [],
        productOfEdit: {},
        productsOfSee:[]
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
        editProductState: (state, action) => {
            state.productOfEdit = {}
            state.products = [...state.products.filter(pro => pro._id !== action.payload._id), action.payload]
            state.productsOfSee = [...state.productSee.filter(pro => pro._id !== action.payload._id), action.payload]
        },
        findsByNameState: (state, action) => {
            
            state.productsOfSee =  action.payload
           
        },
        clearProductsOfSeeState: (state, action) => {
            
            state.productsOfSee = []
           
        },
        
    }

})

export const { getAllProductsState, createProductState ,modifiedProductState, editProductState ,findsByNameState ,clearProductsOfSeeState } = productsSlice.actions

export default productsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productOfEdit: {},
        productsOfSee: []
    },
    reducers: {
        getAllProductsState: (state, action) => {
            state.products = action.payload
        },
        createProductState: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        modifiedProductState: (state, action) => {
            state.productOfEdit = action.payload

        },

        editProductState: (state, action) => {

            state.productOfEdit = {}
            state.products = [...state.products.filter(pro => pro._id !== action.payload._id), action.payload]
            state.productsOfSee = [...state.productsOfSee.filter(pro => pro._id !== action.payload._id), action.payload]
        },
        findsByNameState: (state, action) => {

            state.productsOfSee = action.payload

        },
        clearProductsOfSeeState: (state, action) => {

            state.productsOfSee = []

        }, orderByAZState: (state, action) => {


            state.products = state.products.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return -1;
                }
                if (noa > noe) {
                    return 1;
                }
                return 0;
            })

        }, orderByZAState: (state, action) => {

            state.products = state.products.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return 1;
                }
                if (noa > noe) {
                    return -1;
                }
                return 0;
            })

        }, orderPriceToLowState: (state, action) => {

            state.products = state.products.sort((a, b) => a.price - b.price)

        }, orderPriceToUpState: (state, action) => {

            state.products = state.products.sort((a, b) => b.price - a.price)

        },
        orderStockToLowState: (state, action) => {

            state.products = state.products.sort((a, b) => a.stock - b.stock)

        },
         orderStockToUpState: (state, action) => {

            state.products = state.products.sort((a, b) => b.stock - a.stock)

        },
        disableProductState: (state, action) => {

            state.products = [action.payload, ...state.products.filter(pro => pro._id !== action.payload._id)]
            state.productsOfSee = [action.payload, ...state.productsOfSee.filter(pro => pro._id !== action.payload._id)]
        },
        productsByInactiveState: (state, action) => {

            state.products = state.products.sort((a, b) => a.active - b.active)
        },

    }

})

export const { getAllProductsState, createProductState, modifiedProductState, editProductState, findsByNameState, clearProductsOfSeeState, orderByAZState, orderByZAState, orderPriceToLowState, orderPriceToUpState, orderStockToLowState, orderStockToUpState, disableProductState, productsByInactiveState } = productsSlice.actions

export default productsSlice.reducer
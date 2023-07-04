import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
    },
    reducers: {
        getAllOrdersState: (state, action) => {
            state.orders = action.payload
        }
    }

})

export const { getAllOrdersState } = ordersSlice.actions

export default ordersSlice.reducer
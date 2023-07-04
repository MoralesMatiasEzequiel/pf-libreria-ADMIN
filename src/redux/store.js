import { configureStore } from "@reduxjs/toolkit";
import Products from "./productsSlice";
import User from "./userSlice"
import Orders from "./ordersSlice";


export default configureStore({
    reducer:{
        products: Products,
        user: User,
        orders: Orders
     }   
}) 
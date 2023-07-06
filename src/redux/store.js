import { configureStore } from "@reduxjs/toolkit";
import Products from "./productsSlice";
import User from "./userSlice"
import Orders from "./ordersSlice";
import Subcategories from "./subcategoriesSlice"
import Admin from "./adminSlice";



export default configureStore({
    reducer:{
        products: Products,
        user: User,
        orders: Orders,
        subcategories: Subcategories,
        admin: Admin
     }   
}) 
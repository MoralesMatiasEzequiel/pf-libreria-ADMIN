import { configureStore } from "@reduxjs/toolkit";
import Products from "./productsSlice";
import User from "./userSlice"


export default configureStore({
    reducer:{
        products: Products,
        user: User

     }   
}) 
import axios  from "axios";
import { getAllProductsState } from "./productsSlice";

export const getAllProducts = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/product/");
        const products = dataApi.data;
        dispatch(getAllProductsState(products));
    };
};
import axios  from "axios";
import { getAllProductsState, createProductState, modifiedProductState, editProductState } from "./productsSlice";

export const getAllProducts = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/product");
        const products = dataApi.data;
        dispatch(getAllProductsState(products));
    };
};
export const modifiedProduct = (product) => {
    return async (dispatch) => {
        
        dispatch(modifiedProductState(product));
    };
};


export const editProduct = (product) => {
    return async (dispatch) => {
        
        try {
            const dataApi = await axios.put("/product", product);

              
        } catch (error) {
            
        }
    };
};

export const createProduct = (product) => {

    return async (dispatch) => {

        try {
            const dataApi = await axios.post("/product", product);

            if (dataApi.name) {
                // console.log("Product create: " + dataApi);
                dispatch(createProductState(product))
            }

        } catch (error) {
            alert("Error: product not created");
            console.log(error.response.data);
        }

    };
};
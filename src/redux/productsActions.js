import axios from "axios";
import { getAllProductsState, createProductState, modifiedProductState, editProductState, findsByNameState, clearProductsOfSeeState } from "./productsSlice";

export const getAllProducts = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/product/all");
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
            dispatch(editProductState(product))
            alert(dataApi.request.response)
        } catch (error) {
            console.log(error);
            alert(error)

        }
    };
};

export const findsByName = (name) => {
    return async (dispatch) => {

        try {
            const { data } = await axios.get(`/product?name=${name}`);
            dispatch(findsByNameState(data));
        } catch (error) {
            alert(error)
        }
    };
};
export const clearProductsOfSee = (name) => {
    return async (dispatch) => {

        dispatch(clearProductsOfSeeState())
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
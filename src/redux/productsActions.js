import axios from "axios";
import { getAllProductsState, createProductState, modifiedProductState, editProductState, findsByNameState, clearProductsOfSeeState, orderByAZState, orderByZAState, orderPriceToLowState, orderPriceToUpState, orderStockToLowState, orderStockToUpState, disableProductState, productsByInactiveState } from "./productsSlice";

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
            const { data } = await axios.get(`/product/all?name=${name}`);
            dispatch(findsByNameState(data));

        } catch (error) {

        }
    };
};


export const clearProductsOfSee = () => {
    return async (dispatch) => {

        dispatch(clearProductsOfSeeState())
    };
};

export const orderByAZ = () => {
    return async (dispatch) => {

        dispatch(orderByAZState())
    };
};
export const orderByZA = () => {
    return async (dispatch) => {

        dispatch(orderByZAState())
    };
};
export const orderPriceToLow = () => {
    return async (dispatch) => {

        dispatch(orderPriceToLowState())
    };
};
export const orderPriceToUp = () => {
    return async (dispatch) => {

        dispatch(orderPriceToUpState())
    };
};
export const orderStockToLow = () => {
    return async (dispatch) => {

        dispatch(orderStockToLowState())
    };
};
export const orderStockToUp = () => {
    return async (dispatch) => {

        dispatch(orderStockToUpState())
    };
};
export const productsByInactive = () => {
    return async (dispatch) => {

        dispatch(productsByInactiveState())
    };
};


export const disableProduct = (pro) => {
    return async (dispatch) => {

        try {

            const dataApi = await axios.put("/product", pro);
            dispatch(disableProductState(pro))

            // alert(dataApi.request.response)


        } catch (error) {
            alert(error);
            console.log(error);
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
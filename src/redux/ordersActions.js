import axios  from "axios";
import { getAllOrdersState } from "./ordersSlice";

export const getAllOrders = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/orders");
        // console.log(axios.get("/orders"));
        const orders = dataApi.data;
        dispatch(getAllOrdersState(orders));
    };
};
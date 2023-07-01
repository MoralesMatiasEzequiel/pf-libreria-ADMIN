import axios  from "axios";
import { getUsersState } from "./userSlice";

export const getAllUser = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/user");
        const users = dataApi.data;
        console.log(dataApi);
        dispatch(getUsersState(users));
    };
};
import axios  from "axios";
import { getUsersState, putUserState, putUserIDState } from "./userSlice";

export const getAllUser = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/user");
        const users = dataApi.data;
        // console.log(dataApi);
        dispatch(getUsersState(users));
    };
};

export const getUserByID = (_id) => {
    return async (dispatch) => {

        try {
            const { data } = await axios.get(`/user?_id=${_id}`);
            // console.log(data);
            dispatch(putUserState(data));

        } catch (error) {
            const data = false;
            dispatch(putUserState(data));
            console.log('no hay data');
        }
    };
};

// export const putUserID = (id) => {
//     return async (dispatch) => {
        
//         dispatch(putUserIDState(id));
//     };
// };
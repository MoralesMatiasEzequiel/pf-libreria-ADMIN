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

// export const putUser = (user) => {
//     return async (dispatch) => {
//         const dataApi = await axios.put("/user", user);
//         const modifiedUser = dataApi.data;
//         dispatch(putUserState(modifiedUser));
//     };
// };

export const putUserID = (id) => {
    return async (dispatch) => {
        
        dispatch(putUserIDState(id));
    };
};
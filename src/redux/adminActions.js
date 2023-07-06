import { changeState } from "./adminSlice";

export const changeStateLogged = () => {
    return async (dispatch) => {
        dispatch(changeState());
    };
};
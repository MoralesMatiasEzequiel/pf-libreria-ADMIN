import axios from "axios";
import { getUsersState, getUserIDState, userBanned, nameOrderByAZState, nameOrderByZAState, userOrderByAZState, userOrderByZAState, usersbyInactiveState } from "./userSlice";

export const getAllUser = () => {
  return async (dispatch) => {
    const dataApi = await axios.get("/user");
    const users = dataApi.data;
    dispatch(getUsersState(users));
  };
};

export const getUserID = (user) => {
  return async (dispatch) => {
    dispatch(getUserIDState(user));
  };
};

export const updateUserStatus = (userId, active) => {

  return async (dispatch) => {

    const bannedUser = {
      _id: userId,
      active: active
    }

    try {
      const { data } = await axios.put('/user', bannedUser);
      dispatch(userBanned());
    } catch (error) {
      console.log('Error user banner');
    }
  };
};
// ordenamientos
export const nameOrderByAZ = () => {
  return async (dispatch) => {

    dispatch(nameOrderByAZState())
  };
};
export const nameOrderByZA = () => {
  return async (dispatch) => {

    dispatch(nameOrderByZAState())
  };
};
export const userOrderByAZ = () => {
  return async (dispatch) => {

    dispatch(userOrderByAZState())
  };
};
export const userOrderByZA = () => {
  return async (dispatch) => {

    dispatch(userOrderByZAState())
  };
};
export const usersbyInactive = () => {
  return async (dispatch) => {

    dispatch(usersbyInactiveState())
  };
};
import axios  from "axios";
import { getUsersState, putUserState, userDetailID, getUserIDState, userBanned  } from "./userSlice";

export const getAllUser = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/user");
        const users = dataApi.data;
        // console.log(dataApi);
        dispatch(getUsersState(users));
    };
};

export const putUser = (user) => {
    return async (dispatch) => {
        
        dispatch(putUserState(user));
    };
};

export const getUserByID = (_id) => {
    return async (dispatch) => {

        try {
            const { data } = await axios.get(`/user?_id=${_id}`);
            // console.log(data);
            dispatch(userDetailID(data));

        } catch (error) {
            const data = false;
            dispatch(userDetailID(data));
            console.log('no hay data');
        }
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
        // console.log(data);
        dispatch(userBanned());     
      } catch (error) {
        console.log('Error user banner');
      }
    };
  };
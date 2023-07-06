import axios  from "axios";
import { getUsersState, getUserIDState, userBanned  } from "./userSlice";

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
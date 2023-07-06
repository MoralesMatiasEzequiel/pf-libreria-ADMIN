import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        userEdited: {},
        detail: {}
    },
    reducers: {
        getUsersState: (state, action) => {
            state.users = action.payload
        },
        getUserIDState: (state, action) => {
            state.detail = action.payload;
        },
        putUserState: (state, action) => {
            state.userEdited = action.payload

        },
        putUserState: (state, action) => {
            state.detail = state.users.find(user => user._id === action.payload._id);
        },
        userBanned: (state, action) => {
            state.detail.active = !state.detail.active;
        },
        nameOrderByAZState: (state, action) => {
            state.users = state.users.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return -1;
                }
                if (noa > noe) {
                    return 1;
                }
                return 0;
            })
        },
        nameOrderByZAState: (state, action) => {
            state.users = state.users.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return 1;
                }
                if (noa > noe) {
                    return -1;
                }
                return 0;
            })
        },
        userOrderByAZState: (state, action) => {
            state.users = state.users.sort((a, b) => {
                const noa = a.nickname.toLowerCase();
                const noe = b.nickname.toLowerCase();

                if (noa < noe) {
                    return -1;
                }
                if (noa > noe) {
                    return 1;
                }
                return 0;
            })
        },
        userOrderByZAState: (state, action) => {
            state.users = state.users.sort((a, b) => {
                const noa = a.nickname.toLowerCase();
                const noe = b.nickname.toLowerCase();

                if (noa < noe) {
                    return 1;
                }
                if (noa > noe) {
                    return -1;
                }
                return 0;
            })
        },
        usersbyInactiveState: (state, action) => {
            state.users = state.users.sort((a, b) => a.active - b.active)
        }
    }
});

export const { getUsersState, putUserState, userDetailID, getUserIDState, userBanned, nameOrderByAZState, nameOrderByZAState, userOrderByAZState, userOrderByZAState, usersbyInactiveState } = userSlice.actions;

export default userSlice.reducer;
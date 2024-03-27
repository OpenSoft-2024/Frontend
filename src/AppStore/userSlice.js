import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        profile: null,
    },
    reducers: {
        login: (state, action) => {
        const {user,profile} = action.payload
        state.user = user;
        state.profile = profile;
        },
        logout: (state) => {
        state.user = null;
        state.profile = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
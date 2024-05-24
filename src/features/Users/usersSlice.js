import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: { user: null, token: null },
        reducers: {
            setUser: (state, { payload }) => {
                state.value.user = payload.email
                state.value.token = payload.token
            },
            clearUser: (state) => {
                state.value.user = null,
                    state.value.token = null
            }
        }
    }
});


const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer
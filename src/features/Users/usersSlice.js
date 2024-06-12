import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            nombreEmpresa: null,
            user: null,
            token: null,
            localId: null,
            role: null
        }
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.value.nombreEmpresa= payload.nombreEmpresa
            state.value.user = payload.email
            state.value.token = payload.idToken
            state.value.localId = payload.localId
            state.value.role= payload.role
        },
        clearUser: (state) => {
            state.value.user= null
            state.value.user = null
            state.value.token = null
            state.value.role= null

        },
        setCameraImage: (state, {payload}) => {
        }
    }
})

export const {setUser, clearUser, setCameraImage} = authSlice.actions

export default authSlice.reducer
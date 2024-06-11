import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/Global/globalSlice'
import { changasApi } from '../services/changasServices'
import authReducer from '../features/Users/usersSlice'
import { authApi } from '../services/authServices'
import { setupListeners } from '@reduxjs/toolkit/query'
import jobsSlice from '../features/employeeSlice/jobsSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        global: globalReducer,
        jobs: jobsSlice,
        [changasApi.reducerPath]: changasApi.reducer,
        [authApi.reducerPath]: authApi.reducer


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(changasApi.middleware)
        .concat(authApi.middleware)

})
setupListeners(store.dispatch)

export default store

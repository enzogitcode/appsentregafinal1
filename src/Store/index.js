import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/Global/globalSlice'
import { changasApi } from '../services/changasServices'
import { authApi } from '../services/authServices'
import { setupListeners } from '@reduxjs/toolkit/query'
import jobsSlice from './employeeSlice/jobsSlice'

const store = configureStore({
    reducer: {
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

import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/Global/globalSlice'
import { changasApi } from '../services/changasServices'
import { setupListeners } from '@reduxjs/toolkit/query'
import jobsSlice from './employeeSlice/jobsSlice'

const store = configureStore ({
    reducer: {
    global: globalReducer,
    jobs: jobsSlice,
    [changasApi.reducerPath]: changasApi.reducer


        //buscar los reducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(changasApi.middleware),

})
setupListeners(store.dispatch)

export default store

import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/Global/globalSlice'
import { changasApi } from '../services/changasApi'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore ({
    reducer: {
    global: globalReducer,
    [changasApi.reducerPath]: changasApi.reducer


        //buscar los reducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(changasApi.middleware),

})
setupListeners(store.dispatch)

export default store

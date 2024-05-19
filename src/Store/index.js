import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../features/Global/globalSlice'

export default configureStore ({
    reducer: {
    global: globalReducer
        //buscar los reducers
    }
})
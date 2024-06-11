import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
    name: "jobsSlice",
    initialState: {
        categorySelected: "",
        itemIdSelected: ""

    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected= action.payload
        },
        setIdSelected: (state, {payload}) => {
            state.value.itemIdSelected= payload
        }

    }
})

export const {setCategorySelected, setIdSelected} = jobsSlice.actions
export default jobsSlice.reducer
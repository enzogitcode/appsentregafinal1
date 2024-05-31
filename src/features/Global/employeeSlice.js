import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState: {
        value: {
            categorySelected: "",
            itemIdSelected: "",
        }
    },
    reducers: {
        setCategorySelected : (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected : (state, {payload}) => {
            state.value.itemIdSelected = payload
        }
    }
})

export const {setCategorySelected, setIdSelected} = employeeSlice.actions

export default employeeSlice.reducer
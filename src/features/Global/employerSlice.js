import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const employerSlice = () => ({
    name: "employerSlice",
    initialState: {
        value: {
            userSelected: "",
            jobIdSelected: ""
        }
    },
})

export default employerSlice


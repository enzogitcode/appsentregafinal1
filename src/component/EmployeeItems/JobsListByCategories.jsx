import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import JobItem from './JobItem'

const JobsListByCategories = () => {
    const {data: jobsListByCategories, error, isLoading}=useGetJobsCategoriesQuery()
    return (
        <View>
            <FlatList 
           data={jobsListByCategories}
            renderItem={(item) => <JobItem />} 
            
            />
        </View>
    )
}

export default JobsListByCategories

const styles = StyleSheet.create({

})
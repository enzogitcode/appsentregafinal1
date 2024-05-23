import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import JobItem from './JobItem'

const JobsListByCategories = () => {
    const {data: jobsListByCategories, error, isLoading}=useGetJobsCategoriesQuery()
    
    console.log(jobsListByCategories)


    return (
        <View>
            <FlatList 
           data={jobsListByCategories}
            renderItem={({category}) => <JobItem   />} 
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default JobsListByCategories

const styles = StyleSheet.create({

})
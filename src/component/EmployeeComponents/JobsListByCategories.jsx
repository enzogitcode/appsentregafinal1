import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { useGetJobsCategoriesQuery } from '../../services/changasServices.js'
import JobItem from './JobItem'

const JobsListByCategories = () => {
    
    const {data: jobsListByCategories, error, isLoading}=useGetJobsCategoriesQuery(categorySelected)
    
    console.log(jobsListByCategories)


    return (
        <View>
            {/* <FlatList 
           data={jobsListByCategories}
           keyExtractor={(jobs) => (jobs.id)}
            renderItem={(job) => <JobItem category={job.category}  />} 
            /> */}
        </View>
    )
}

export default JobsListByCategories

const styles = StyleSheet.create({

})
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobsListData from '../data/jobsListData.json'
import JobItem from './JobItem'
import React from 'react'
import JobCategory from './JobCategory'

const JobsListCategories = () => {
  return (
    <View style={styles.JobsListCategoriesContainer}>
      <Text>JobsListCategories</Text>
      <FlatList
      data={JobsListData}
      renderItem={({item})=> {<JobCategory category={item.category}
      />}}
      keyExtractor={job => job.id}
      />
    </View>
  )
}

export default JobsListCategories

const styles = StyleSheet.create({
  JobsListCategoriesContainer: {
    backgroundColor: 'white'
  }
})
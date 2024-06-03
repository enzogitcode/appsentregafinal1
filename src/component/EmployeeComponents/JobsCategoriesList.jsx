import React from 'react'
import { colors } from '../../constants/colors.js'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCategoryItem from './JobCategoryItem.jsx'
import {useGetJobsCategoriesQuery} from '../../services/changasServices.js'
const JobsListCategories = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetJobsCategoriesQuery()

  
console.log(categories)
  return (
    
    <FlatList style={styles.jobsListCategoriesContainer}
      onScroll={true}
      data={categories}
      keyExtractor={(category) => category}
      renderItem={({ item }) => (
        <JobCategoryItem
          navigation={navigation}
          category={item}
        />
      )}

    />
    
  )
}

export default JobsListCategories

const styles = StyleSheet.create({
  jobsListCategoriesContainer: {
    borderWidth: 10,
    borderRadius: 10,
    padding: 5,
    borderBlockColor: colors.azulBackground
  }
})
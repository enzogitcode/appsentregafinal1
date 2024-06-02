import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCategoryItem from '../component/EmployeeComponents/JobCategoryItem.jsx'
import { useGetJobsCategoriesQuery } from '../services/changasServices.js'
import { colors } from '../constants/colors.js'
const JobsListCategories = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetJobsCategoriesQuery()

  
console.log(categories)
  return (
    <View>
    <FlatList style={styles.jobsListCategoriesContainer}
      onScroll={true}
      data={categories}
      keyExtractor={(category) => category}
      renderItem={({ item }) => (
        <JobCategoryItem
          navigation={JobsListByCategories}
          category={item}
        />
      )}

    />
    </View>
  )
}

export default JobsListCategories

const styles = StyleSheet.create({
  jobsListCategoriesContainer: {
    borderWidth: 10,
    borderBlockColor: colors.azulBackground
  }
})
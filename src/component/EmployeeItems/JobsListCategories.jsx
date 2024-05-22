import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCategoryItem from './JobCategoryItem.jsx'
import { useGetJobsCategoriesQuery } from '../../services/changasServices.js'

const JobsListCategories = ({navigation}) => {
      const {data: categories, error, isLoading} =useGetJobsCategoriesQuery()
  return (
    <View style={styles.JobsListCategoriesContainer}>
      <Text>JobsListCategories</Text>
       <FlatList
       
      data={categories}
      keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <JobCategoryItem
            navigation={navigation} 
            category={item} 
          />
        )}
                  
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
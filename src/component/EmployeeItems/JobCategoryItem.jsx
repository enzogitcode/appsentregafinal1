import { Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const JobCategoryItem = ({category}) => {
  
  return (
    <View>
      <TouchableHighlight><Text>{category}</Text></TouchableHighlight>
    </View>
  )
}

export default JobCategoryItem

const styles = StyleSheet.create({})
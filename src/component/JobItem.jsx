import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobItem = ({ jobTitle, jobAge, category, firm, location, otherdata, experience }) => {
  return (
    <View>
      <View style={styles.jobTitleContainer}><Text style={styles.jobTitleText}>{jobTitle}</Text></View>
      <Text style={styles.textSyle}>{jobAge}</Text>
      <Text style={styles.textSyle}>{category}</Text>
      <Text style={styles.textSyle}>{firm}</Text>
      <Text style={styles.textSyle}>{location}</Text>
      <Text style={styles.textSyle}>{otherdata}</Text>
      <Text style={styles.textSyle}>{experience}</Text>
    </View>
  )
}

export default JobItem

const styles = StyleSheet.create({
  jobTitleContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  jobTitleText: {
    fontFamily: 'retosta',
    fontSize: 25
  }
})
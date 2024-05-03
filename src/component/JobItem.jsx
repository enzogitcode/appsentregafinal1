import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobItem = ({ jobTitle, jobAge, category, firm, location, otherdata, experience }) => {
  return (
    <View>
      <View><Text style={styles.jobTitle}>{jobTitle}</Text></View>
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
  jobTitle: {
    fontSize: 25,
    fontFamily: 'retosta'
  }
})
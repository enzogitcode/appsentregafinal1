import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useGetJobsByIdQuery } from '../../services/changasServices'
import { setIdSelected } from '../../features/Global/employeeSlice'
import { useDispatch } from "react-redux"

const JobItem = ({ jobTitle, jobAge, category, firm, location, otherdata, experience}) => {


  return (
    <View style={styles.jobItemContainer}>
      <View style={styles.jobTitleContainer}><Text style={styles.jobTitleText}>{jobTitle}</Text></View>
      <View style={styles.jobCardContainer}>
        <Text style={styles.textSyle}>Categoría:</Text>
        <Text >{category}</Text>
        <Text style={styles.textSyle}>Empresa: {firm}</Text>
        <Text style={styles.textSyle}>Edad buscada: {jobAge}</Text>
        <Text style={styles.textSyle}>Ubicación: {location}</Text>
        <Text style={styles.textSyle}>Requerimientos: {otherdata}</Text>
        <Text style={styles.textSyle}>Años de Experiencia sugeridos:{experience}</Text>
      </View>
    </View>
  )
}

export default JobItem

const styles = StyleSheet.create({
  jobItemContainer: {
    alignItems: 'right',
    padding: 5,
    borderwidth: 10,
    bordercolor: 'black',
  },
  jobTitleContainer: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  jobCardContainer:
  {
    backgroundColor: 'lightgreen',
    padding: 15
  }
  ,
  jobTitleText: {
    fontFamily: 'retosta',
    fontSize: 25,
    textAlign: 'center'
  }
})
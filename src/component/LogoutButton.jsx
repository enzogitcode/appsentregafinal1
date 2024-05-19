import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LogoutButton = () => {
  return (
    <TouchableOpacity style={styles.logoutButton}>
      <Text style={styles.textLogout}>Logout</Text>
    </TouchableOpacity>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  logoutButton: {
    padding: 10,
    borderRadius: 15,
    color: '#fff',
    backgroundColor: '#c1121f'
  },
  textLogout: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'retosta',
    color: '#fff',
    padding: 10,
    fontFamily: 'retosta',
  }
})
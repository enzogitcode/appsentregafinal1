import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LogoutButton = () => {
  return (
    <Pressable style={styles.logoutButton}>
      <Text>Logout</Text>
    </Pressable>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  logoutButton: {
    color: '#fff',
    backgroundColor: '#c1121f'
  }
})
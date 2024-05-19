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
<<<<<<< HEAD
    color: '#fff',
    backgroundColor: '#c1121f'
=======
    color: ''
>>>>>>> dc22512f7bb61eae923d2ef2c2fe6463a005185c
  }
})
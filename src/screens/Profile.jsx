import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChangasLayout, Header, ModalCustom } from '../component/indexComponent'

const Profile = () => {
  return (
    <ChangasLayout>
      <Header title={"Perfil"}/>
      <View>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
      </View>
    </ChangasLayout>
  )
}

export default Profile

const styles = StyleSheet.create({})
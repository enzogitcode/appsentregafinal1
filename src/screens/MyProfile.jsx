import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, ChangasLayout, Header, LogoutButton, ModalCustom } from '../component/indexComponent'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/changasServices'

const MyProfile = ({ navigation }) => {
  const { user } = useSelector(state => state.auth.value)
  const { localId, imageCamera } = useSelector(state => state.auth.value)
  const { data: imageFromBase } = useGetProfileImageQuery(localId)


  const launchCamera = async () => {
    navigation.navigate('Image selector')
  }

  const defaultImageRoute = "../../assets/images/defaultProfile.png"
  return (
    <ChangasLayout>
      <Header title={"Mi Perfil"} />

      <View style={styles.profileContainer}>
      {user ? <Text>Usuario: {user}</Text> : null}
        {imageFromBase || imageCamera ? (
          <Image
            source={{ uri: imageFromBase?.image || imageCamera }}
            style={styles.image}
            resizeMode="cover"
          />
        )
          :
          <Image
            source={require(defaultImageRoute)}
            style={styles.image}
            resizeMode="cover"
          />
        }
        <ButtonCustom buttonText={"Agregar foto a Mi Perfil"} onPress={launchCamera} />
        <LogoutButton />
      </View>
    </ChangasLayout >
  )
}

export default MyProfile

const styles = StyleSheet.create({

  profileContainer: {
    marginVertical: '5%',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
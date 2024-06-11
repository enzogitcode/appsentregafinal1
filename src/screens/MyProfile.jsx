import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, ChangasLayout, Header, LogoutButton, ModalCustom } from '../component/indexComponent'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const MyProfile = ({ navigation }) => {
  const {user} = useSelector(state => state.auth.value)

  const [image, setImage] = useState(null)
  return (
    <ChangasLayout>
      <Header title={"Mi Perfil"} />

      {user? <Text>Usuario: {user}</Text>: null}
      <View style={styles.profileContainer}>
        {image ? null :
          <>
            <Image
              source={require('../../assets/images/defaultProfile.png')}
              style={styles.image}
              resizeMode='cover'
            />
            <ButtonCustom buttonText={"Agregar foto a Mi Perfil"} />
          </>
        }
        <LogoutButton/>
      </View>
    </ChangasLayout>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  profileContainer:{
    marginVertical: '5%',
    alignItems: 'center',
    gap: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
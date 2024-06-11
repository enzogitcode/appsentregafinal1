import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Header, ChangasLayout, InputForm, ButtonCustom, LogoutButton } from '../component/indexComponent'

const PostAJobsForm = () => {
  //const isDark = useSelector(state=> state.value.isDark)
  const onChange = () => {

  }
  return (
    <ChangasLayout>
      <Header title={'Postear un Trabajo'} />
      <ScrollView style={styles.formContainer} >
        <InputForm label={'Título'} onChange={onChange} />
        <InputForm label={'Empresa o Compañia'} onChange={onChange} />
        <InputForm label={'Descripción del Empleo'} onChange={onChange} />
        <InputForm label={'Edad Máxima buscada'} onChange={onChange} />
        <InputForm label={'Edad Mínima buscada'} onChange={onChange} />
        <InputForm label={'Ubicación'} onChange={onChange} />
        <InputForm label={'Requerimientos'} onChange={onChange} />
        <InputForm label={'Años de Emperiencia sugeridos'} onChange={onChange} />
        <View style={styles.buttonsContainer}>
          <ButtonCustom buttonText={"Volver"} />
          <ButtonCustom buttonText={"POST"} />
        </View>
        <LogoutButton />
      </ScrollView>
    </ChangasLayout>
  )
}

export default PostAJobsForm

const styles = StyleSheet.create({
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 10
  }
})
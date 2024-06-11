import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import InputForm from '../InputForm'
import LogoutButton from '../LogoutButton'
import ButtonCustom from '../ButtonCustom'

const PostAJobsForm = () => {
  const onChange = () => {

  }
  return (
    <View>
      <InputForm label={'Título'} onChange={onChange} />
      <InputForm label={'Empresa o Compañia'} onChange={onChange} />
      <InputForm label={'Descripción del Empleo'} onChange={onChange} />
      <InputForm label={'Edad Máxima buscada'} onChange={onChange} />
      <InputForm label={'Edad Mínima buscada'} onChange={onChange} />
      <InputForm label={'Ubicación'} onChange={onChange} />
      <InputForm label={'Requerimientos'} onChange={onChange} />
      <InputForm label={'Años de Emperiencia sugeridos'} onChange={onChange} />
      <ButtonCustom buttonText={"POST"}/>
      </View>
      )
}

      export default PostAJobsForm

      const styles = StyleSheet.create({ 

      })
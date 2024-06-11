import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import InputForm from '../InputForm'
import LogoutButton from '../LogoutButton'
import ButtonCustom from '../ButtonCustom'
import Header from '../Header'
import ChangasLayout from '../ChangasLayout'
import { useSelector } from 'react-redux'

const PostAJobsForm = () => {
  const onChange = () => {

  }
  return (
    <ChangasLayout>
      <Header title={'Postear un Trabajo'}/>
      <InputForm label={'Título'} onChange={onChange} />
      <InputForm label={'Empresa o Compañia'} onChange={onChange} />
      <InputForm label={'Descripción del Empleo'} onChange={onChange} />
      <InputForm label={'Edad Máxima buscada'} onChange={onChange} />
      <InputForm label={'Edad Mínima buscada'} onChange={onChange} />
      <InputForm label={'Ubicación'} onChange={onChange} />
      <InputForm label={'Requerimientos'} onChange={onChange} />
      <InputForm label={'Años de Emperiencia sugeridos'} onChange={onChange} />
      <ButtonCustom buttonText={"POST"}/>
      </ChangasLayout>
      )
}

      export default PostAJobsForm

      const styles = StyleSheet.create({ 

      })
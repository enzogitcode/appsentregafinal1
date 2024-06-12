import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Header, ChangasLayout, InputForm, ButtonCustom, LogoutButton } from '../component/indexComponent'
import { usePostNwJobMutation } from '../services/changasServices'
const PostAJobsForm = ({ navigation }) => {
  const isDark = useSelector(state => state.global.value.isDark)
  const { localId } = useSelector(state => state.auth.value)

  const [triggerPostNwJob, result] = usePostNwJobMutation()

  const onChange = () => {

  }
  const confirmNwJob = () => {
    triggerPostNwJob({ user: localId, total })
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
          <ButtonCustom buttonText={"Volver"} onPress={() => navigation.goBack()} />
          <ButtonCustom buttonText={"POST"} onPress={confirmNwJob} />
        </View>
        <LogoutButton />
      </ScrollView>
    </ChangasLayout>
  )
}

export default PostAJobsForm

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 10
  }
})
import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { ButtonCustom, ChangasLayout, Header, InputForm, SubmitButton } from '../component/indexComponent'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from '../features/Users/usersSlice'
import { useSignUpMutation } from '../services/authServices'
import { signupSchema } from '../services/authSchema'
import { colors } from '../constants/colors'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const SignupScreen = ({ navigation }) => {

  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [errorNombreEmpresa, setErrorNombreEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [role, setRole] = useState("")
  const [errorRole, setErrorRole] = useState("")

  const items = [
    { label: 'Empleador', roleValue: 'Empleador' },
    { label: 'Empleado', roleValue: 'Empleado' },
  ];
  const [roleValue, setRoleValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (roleValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Elige una opción
        </Text>
      );
    }
    return null;
  };
  const dispatch = useDispatch()

  const [triggerSignUp, result] = useSignUpMutation()

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          nombreEmpresa: result.data.nombreEmpresa,
          email: result.data.email,
          idToken: result.data.idToken,
          role: result.data.role
        })
      )
    }
  }, [result])



  const onSubmit = () => {
    try {
      setErrorNombreEmpresa("")
      setErrorMail("")
      setErrorPassword("")
      setErrorConfirmPassword("")
      setErrorRole("")
      const validation = signupSchema.validateSync({ nombreEmpresa, email, password, confirmPassword, role })
      triggerSignUp({ nombreEmpresa, email, password, returnSecureToken: true, role })
      navigation.navigate("Home")
    } catch (err) {
      switch (err.path) {
        case "nombreEmpresa":
          setErrorNombreEmpresa(err.message)
          break;
        case "email":
          setErrorMail(err.message)
          break;
        case "password":
          setErrorPassword(err.message)
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message)
          break;
        case "role":
          setErrorRole(err.message)
          break;
        default:
          break;
      }
    }
  }

  return (
    <ChangasLayout>
      <Header style={styles.title} title={"Signup"} />
      <View style={styles.main}>
        <View style={styles.formContainer}>
          <InputForm
            label={"Nombre de la Empresa"}
            onChange={setNombreEmpresa}
            error={errorNombreEmpresa} />
          <InputForm label={"email"} onChange={setEmail} error={errorMail} />
          <InputForm
            label={"password"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
          />
          <InputForm
            label={"confirm password"}
            onChange={setconfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
          <View>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={items}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="roleValue"

                placeholder={!isFocus ? 'Elige una opción' : 'Elige el rol'}
                value={roleValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setRoleValue(item.roleValue);
                  setRole(item.roleValue)
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
          <SubmitButton style={styles.submitButtonStyle} onPress={onSubmit} title="Enviar" />
          </View>
        </View>
        <View style={styles.alternativesContainer}>
          <Text style={styles.sub}>¿Ya tiene usted una cuenta?</Text>
          <ButtonCustom style={styles.submitButtonStyle} onPress={() => navigation.navigate("LoginScreen")} buttonText={"Login"} />
          <ButtonCustom style={styles.submitButtonStyle} onPress={() => navigation.navigate("Home")} buttonText={"¿Continuar como visitante?"} />
        </View>
      </View>


    </ChangasLayout>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  main: { marginTop: 10 },
  submitButtonStyle: { margin: 10, alignSelf: 'center' },
  sub: {
    width: '90%',
    fontSize: 30,
    fontFamily: 'retosta',
    textAlign: 'center'
  },
  alternativesContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    gap: 10
  },
  sectionedMultiSelect: {
    justifyContent: 'center'
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

const ModalWelcome = () => {
  return (
    <Modal>
      <View>
        <Text>
          ¿Desea postear un empleo o candidatearse para un trabajo?
        </Text>
      </View>
      <View>
        <View>
          <Text>
            Login
          </Text>
        </View>
        <View>
          <Text>
            Continuar como visitante
          </Text>
        </View>
        <View>
          <Text>
            ¿No esta usted Registrado?
          </Text>
          <Text>
            Registrese Aquí
          </Text>
        </View>
      </View>
    </Modal>
  )
}

export default ModalWelcome

const styles = StyleSheet.create({})
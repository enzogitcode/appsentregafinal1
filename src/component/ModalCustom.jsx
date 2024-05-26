import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import SubmitButton from './SubmitButton';
const ModalCustom = ({ navigation, mensajeModoVisitante }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Cancelar');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>¿Continuar en Modo Visitante?</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalVisible(!modalVisible), navigation.navigate({endpoint})} }
                            
                            >
                            <Text>{mensajeModoVisitante}En Modo Visitante no podrá postear empleos ni postularse a uno</Text>
                            <Text style={styles.textStyle}>Aceptar</Text>
                        </Pressable>
                        <View style={styles.alternativesContainer}>
                            <View>
                                <Text style={styles.modalText}>¿Aún no ha creado una cuenta? Únase a Nosotros</Text>
                                <SubmitButton style={styles.button} onPress={() => navigation.navigate("Login")} title="Login" />
                            </View>
                            <View>
                                <Text style={styles.modalText}>¿Aún no se ha registrado?</Text>
                                <SubmitButton style={styles.button} onPress={() => navigation.navigate("Signup")} title="Signup" />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                </Pressable>
            </View>
        </View>
    );
};


export default ModalCustom

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 22,
    },
    alternativesContainer: {
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


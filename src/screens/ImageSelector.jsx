import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ButtonCustom from '../component/ButtonCustom'
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from 'react-redux';

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()
    const [imageURI, setImageURI] = useState(null)
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        try {
            const permissionCamera = await verifyCameraPermissions()
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [9, 16],
                    base64: true,
                    quality: 0.2,
                })
                if (!result.canceled) {
                    setImageURI(result.assets[0].uri)
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }

        } catch (error) {

        }

    }
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            navigation.goBack()
            triggerPostImage({ image, localId })
            if (isImageFromCamera) {
                const result = await ExpoLibrary.createAssetAsync(imageURI)
                navigation.goBack()
            }
        }
        catch (error) {
        }


        return (
            <View style={styles.ImageSelectorContainer}>
                {image || imageFromBase ?
                    <>
                        <Image />
                        <ButtonCustom buttonText={"Tomar otra foto"} onPress={pickImage} />
                        <ButtonCustom buttonText={"Confirmar Foto"} onPress={confirmImage} />

                    </>
                    :
                    <>
                        <View style={styles.noFotoContainer}>
                            <Text style={styles.noFotoText}>No hay foto para mostrar</Text>
                        </View>
                        <ButtonCustom onPress={pickImage} buttonText={"Tomar una foto"} />
                        <ButtonCustom onPress={() => navigation.goBack()} buttonText={"Volver"} />
                    </>}
            </View>
        )
    }
}

export default ImageSelector

const styles = StyleSheet.create({
    ImageSelectorContainer: {
        gap: 10,
        marginVertical: 10,
        justifyContent: 'center',
        flex: 1
    },
    noFotoContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    noFotoText: {
        fontFamily: 'retosta',
        fontSize: 20
    }
})

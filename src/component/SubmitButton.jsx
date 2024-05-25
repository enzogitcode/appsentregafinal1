import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.azulBackground,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.naranjaTitle,
        fontFamily: 'retosta',
        fontSize: 22
    },
});

import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function NewInput(props) {
    return (
        <TextInput style={[styles.input, { borderColor: props.error ? 'red' : null }]} onChangeText={props.onChangeText} placeholder={props.placeholder} keyboardType={props.keyboardType} />
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#eeeeee',
    },
})
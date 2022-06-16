import { View, Button } from 'react-native'
import React from 'react'

export default function MyButton(props) {
    return (
        <View>
            <Button onPress={props.onPress} title={props.title} />
        </View>
    )
}
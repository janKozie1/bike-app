import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const MyButton = ({ text, press }) => {
    return (
        <TouchableOpacity onPress={() => press()} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFC107',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        color: 'white'
    }
})
export default MyButton

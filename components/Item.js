import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const Item = ({ data, press }) => {
    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                            data.statusKey === 1 ? '#FF5252' : '#4CAF50'
                    }}
                >
                    <Text style={{ color: 'white' }}>{data.statusValue}</Text>
                </View>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text
                        style={{
                            flex: 1,
                            paddingVertical: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {data.stAddress1}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => press(data.latitude, data.longitude)}
            >
                <Text style={{ color: '#FFC107', fontSize: 15 }}>Go</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#FFC107',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    data: {
        flex: 1
    },
    button: {
        borderLeftColor: '#FFC107',
        borderLeftWidth: 1,

        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Item

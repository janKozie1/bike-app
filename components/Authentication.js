import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import firebase from 'firebase'
import { config } from './config'
firebase.initializeApp(config)

class Authentication extends Component {
    static navigationOptions = {
        title: 'Autoryzacja',
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: '#FFC107'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.props.navigation.navigate('LogIn')
            } else {
                this.props.navigation.navigate('Stations', { user: user.email })
            }
            // jeśli user istnieje, wtedy przechodzimy do wyświetlenia ekranu z listą danych pobranych z bazy firebase
            // jeśli nie istnieje - wtedy przechodzimy do ekranu logowania
        })
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ActivityIndicator size='large' color='#FFC107' />
            </View>
        )
    }
}

export default Authentication

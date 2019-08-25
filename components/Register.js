import React, { Component } from 'react'
import firebase from 'firebase'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

class Register extends Component {
    static navigationOptions = {
        title: 'Register to Bikes in NY',
        headerTintColor: 'black',
        header: null,
        headerStyle: {
            backgroundColor: '#FFC107'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.register = this.register.bind(this)
    }
    register() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.email.trim(),
                this.state.password
            )
            .then(() => this.props.navigation.navigate('Authentication'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                enabled
                behavior='padding'
            >
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.inner}>
                            <Text style={styles.headerText}>
                                Welcome aboard!
                            </Text>
                            <Text style={styles.headerSubtext}>
                                Enter your email address and password
                            </Text>
                            <TextInput
                                placeholder={'Login'}
                                style={styles.singleInput}
                                onChangeText={text =>
                                    this.setState({ email: text })
                                }
                            />
                            <TextInput
                                placeholder={'Password'}
                                style={styles.singleInput}
                                secureTextEntry={true}
                                onChangeText={text =>
                                    this.setState({ password: text })
                                }
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.register()}
                            >
                                <Text style={{ color: 'white' }}>Sign up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.link}
                                onPress={() =>
                                    this.props.navigation.navigate('Login')
                                }
                            >
                                <Text
                                    style={{
                                        color: 'rgba(0,0,0,.4)',
                                        fontSize: 12
                                    }}
                                >
                                    Log in instead
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 30,
        flexDirection: 'column'
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 50
    },
    headerSubtext: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 30
    },
    singleInput: {
        paddingLeft: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 25,
        alignSelf: 'stretch',
        marginBottom: 22,
        fontSize: 14
    },
    button: {
        marginTop: 8,
        borderRadius: 20,
        alignSelf: 'stretch',
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingVertical: 13
    },
    link: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Register

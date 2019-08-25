import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from './MyButton'
import { Font, Permissions } from 'expo'

export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
        this.handlePress = this.handlePress.bind(this)
    }
    componentWillMount = async () => {
        await Font.loadAsync({
            myfont: require('./Roboto.ttf')
        })
        this.setState({ fontloaded: true })
    }
    handlePress() {
        this.props.navigation.navigate('Authentication')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.welcoming}>
                    {this.state.fontloaded ? (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'myfont',
                                    fontSize: 42,

                                    color: 'white'
                                }}
                            >
                                Firebase App
                            </Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 14,
                                    fontFamily: 'myfont',
                                    textAlign: 'center',
                                    lineHeight: 30
                                }}
                            >
                                firebase authentication{'\n'}
                                firabase database{'\n'}
                            </Text>
                        </View>
                    ) : null}
                </View>

                <View style={styles.main}>
                    {this.state.fontloaded && (
                        <MyButton text='START' press={this.handlePress} />
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcoming: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC107'
    },
    main: {
        flex: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

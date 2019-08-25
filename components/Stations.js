import React, { Component } from 'react'
import {
    View,
    Text,
    YellowBox,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import MyButton from './MyButton'
import firebase from 'firebase'
import Item from './Item'

YellowBox.ignoreWarnings(['Setting a timer'])

class Stations extends Component {
    static navigationOptions = {
        title: 'Stations',
        headerTintColor: 'black',
        headerLeft: null,
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
            data: []
        }
        this.stations = this.getFirebase().child('stations_big') // "stations" to nazwa tablicy w obiekcie jsona
        this.logOut = this.logOut.bind(this)
        this.goBack = this.goBack.bind(this)
        this.handlePress = this.handlePress.bind(this)
    }
    getFirebase() {
        return firebase.database().ref()
    }
    componentDidMount() {
        this.stations.on('value', elements => {
            // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
            let temp = []
            elements.forEach(item => {
                let temp2 = JSON.stringify(item)
                temp2 = JSON.parse(temp2)

                temp.push(temp2)
            })

            this.setState({
                data: temp
            })
        })
    }
    logOut() {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('loged out'))
            .catch(error => console.log(error))
    }
    goBack() {
        this.props.navigation.navigate('Welcome')
    }
    handlePress(e, f) {
        this.props.navigation.navigate('MapScreen', {
            latitude: e,
            longitude: f
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 2,
                        borderBottomColor: '#FFC107',
                        borderBottomWidth: 2
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 10
                        }}
                    >
                        <Text>
                            {' '}
                            Welcome, {this.props.navigation.state.params.user}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            style={styles.navbutton}
                            onPress={() => this.logOut()}
                        >
                            <Text style={{ color: 'white' }}>LOG OUT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navbutton}
                            onPress={() => this.goBack()}
                        >
                            <Text style={{ color: 'white' }}>MAIN PAGE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 9 }}>
                    {this.state.data[0] ? (
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <Item data={item} press={this.handlePress} />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    ) : (
                        <View
                            style={{
                                flex: 1,
                                alignContent: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <ActivityIndicator size='large' color='#FFC107' />
                        </View>
                    )}
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    navbutton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFC107'
    }
})
export default Stations

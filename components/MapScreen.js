import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';




export default class MapScreen extends Component {
    static navigationOptions = {
        title: "Map View",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#FFC107"

        },
        headerTitleStyle: {
            color: "black"
        },

    }
    constructor(props) {
        super(props);
        this.state = {

        };
        //this.props.navigation.state.params
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude:parseFloat(this.props.navigation.state.params.latitude),
                        longitude: parseFloat(this.props.navigation.state.params.longitude),
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: parseFloat(this.props.navigation.state.params.latitude),
                            longitude: parseFloat(this.props.navigation.state.params.longitude),
                        }}
                        title={"pos"}
                        description={"opis"}
                    />
                </MapView>
            </View>
        );
    }
}


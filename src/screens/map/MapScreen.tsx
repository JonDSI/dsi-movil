import { Component  } from "react";
import { StyleSheet } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

interface PropsMap {}

interface StateMap {
    markers: []
}

export class MapScreen extends Component<PropsMap, StateMap> {

    private readonly GOOGLE_KEY = '';

    constructor(props: PropsMap) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
 
    handlePress(e: any) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate
                }
            ]
        });
    }

    render() {
        return (
        <MapView
            provider={ PROVIDER_GOOGLE }
            style={mapContainer.map}>
               
            </MapView>);
    }
}

const mapContainer = StyleSheet.create({
    map: {
        height: 70
    }
});

import { connect } from 'react-redux';
import { Dispatch } from 'redux'; 

import { MapAction, ADD_MARKER, MapMarkerAdd, MapMarkersAdd } from "../redux/map.action";
import { IState } from "../redux/map.reducer";

export class MapContentModel {

}

const stateToProps = (state: IState) => ({
    feature: state.feature,
    features: state.featureCollection                                                                                                         
});

const dispatchToProps = (dispatch: Dispatch<MapAction>) => {
    return {
        AddMarker: (feature: any) => {
            dispatch(new MapMarkerAdd(feature));
        },
        AddMarkers: (featureCollection: any) => {
            dispatch(new MapMarkersAdd(featureCollection));
        }
    };
};

export default connect(stateToProps, dispatchToProps);

import { ADD_MARKER, ADD_MARKERS, MapAction } from './map.action';
import { Reducer } from 'redux';

export interface IState {
    feature: any;
    featureCollection: any[];
}

const initialState: IState = {
    feature: {},
    featureCollection: []
};

const mapRedux: Reducer<IState, MapAction> = (state= initialState, action: MapAction) => {
    switch(action.type) {
        case ADD_MARKER:
            return {
                ...state
            };
        case ADD_MARKERS:
            return {
                ...state
            };
            break;
        default:
            return state;
    }
};

export default mapRedux;
import { Action } from 'redux';

export const ADD_MARKER = '[Map] AddMarker';
export const ADD_MARKERS = '[Map] AddMarkers';

export class MapMarkerAdd implements Action {
    type = ADD_MARKERS;
    constructor(payload: any) {}
}

export class MapMarkersAdd implements Action {
    type = ADD_MARKERS;
    constructor(payload: any) {}
}

export const CLEAN_MARKER = '[Map] CleanMap';

export class CleanMap implements Action {
    type = CLEAN_MARKER;
}


export type MapAction = MapMarkerAdd | MapMarkersAdd | CleanMap;
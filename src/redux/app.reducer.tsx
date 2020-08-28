import { combineReducers } from 'redux';

import mapRedux from './map.reducer';

export default combineReducers({
    maps: mapRedux
});
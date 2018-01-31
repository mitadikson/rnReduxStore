/**
 * Created by Mita on 30.1.2018..
 */
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR, OPEN_NEXT_SCREEN} from '../actions/types';
import RootNavigator from "../navigation/navigationList";

const initialState = {
    isDownload: false,
    isError: false,
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {...state, isDownload: false};
        case FETCHING_DATA_SUCCESS:
            return {...state, isDownload: true, data: action.data};
        case FETCHING_DATA_ERROR:
            return {...state, isError: true, isDownload: false};
        default:
            return state;
    }
}
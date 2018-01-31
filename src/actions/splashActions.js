/**
 * Created by Mita on 30.1.2018..
 */
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR, OPEN_NEXT_SCREEN} from '../actions/types';
import RootNavigator from "../navigation/navigationList";
// import fetch from 'cross-fetch'


export const getData = () => {
    return {
        type: FETCHING_DATA
    }
};

export const getDataSuccess = (data) => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data: data
    }
};

export const getDataError = () => {
    return {
        type: FETCHING_DATA_ERROR
    }
};

export const getOpenNexScreen = (nav) => {
    return {
        type: OPEN_NEXT_SCREEN,
        nav: nav
    }
};

export function fetchDataFromAPI() {
    return (dispatch, getState) => {
        dispatch(getData());
        fetch('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
            .then((res) => res.json())
            .then((responseJson) => dispatch(getDataSuccess(responseJson)))
            .catch((err) => dispatch(getDataError()));
    }
}

export function goToListProducts() {
    return (dispatch, getState) => {
        dispatch(RootNavigator.router.getActionForPathAndParams('ListProducts'));
    };
}

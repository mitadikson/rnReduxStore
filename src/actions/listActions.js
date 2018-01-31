/**
 * Created by Mita on 30.1.2018..
 */
import {OPEN_SINGLE_PRODUCT} from '../actions/types';
import RootNavigator from "../navigation/navigationList";


export const openSingleProduct = () => {
    return {
        type: OPEN_SINGLE_PRODUCT
    }
};

export function goToSingleProduct(params) {
    return (dispatch, getState) => {
        dispatch(RootNavigator.router.getActionForPathAndParams('SingleProducts', params));
    };
}

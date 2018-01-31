/**
 * Created by Mita on 31.1.2018..
 */
import {OPEN_MODAL_IMAGE, CLOSE_MODAL_IMAGE} from '../actions/types';
import RootNavigator from "../navigation/navigationList";

export const openModalImage = (img) => {
    return {
        type: OPEN_MODAL_IMAGE,
        img: img
    }
};
export const closedModalImage = () => {
    return {
        type: CLOSE_MODAL_IMAGE
    }
};

export function goToCommentList(params) {
    return (dispatch, getState) => {
        dispatch(RootNavigator.router.getActionForPathAndParams('Comments', params));
    };
}

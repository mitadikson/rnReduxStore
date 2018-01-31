/**
 * Created by Mita on 31.1.2018..
 */
import {OPEN_MODAL_IMAGE, CLOSE_MODAL_IMAGE} from '../actions/types';
import RootNavigator from "../navigation/navigationList";

const initialState = {
    isVisibilityModal: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_IMAGE:
            return {isVisibilityModal: true, img: action.img};
        case CLOSE_MODAL_IMAGE:
            return {isVisibilityModal: false};
        default:
            return state;
    }
}
/**
 * Created by Mita on 31.1.2018..
 */
import {OPEN_MODAL_ADD_COMMENT, CLOSE_MODAL_ADD_COMMENT, SET_TEXT} from '../actions/types';

const initialState = {
    isVisibilityModal: false,
    commentsList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_ADD_COMMENT:
            return {...state, isVisibilityModal: false};
        case CLOSE_MODAL_ADD_COMMENT:
            return {...state, isVisibilityModal: true, commentsList: state.commentsList.push(action.comment)};
        case SET_TEXT:
            return {...state, isVisibilityModal: true, commentsList: state.commentsList.push(action.comment)};
        default:
            return state;
    }
}
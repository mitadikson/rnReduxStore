/**
 * Created by Mita on 31.1.2018..
 */
import {OPEN_MODAL_ADD_COMMENT, CLOSE_MODAL_ADD_COMMENT, SAVE_COMMENT} from '../actions/types';


export const openModalAddComment = () => {
    return {
        type: OPEN_MODAL_ADD_COMMENT,
    }
};
export const closedModalAddComment = (comment) => {
    return {
        type: CLOSE_MODAL_ADD_COMMENT,
        comment: comment
    }
};
export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        comment: comment
    }
};


/**
 * Created by Mita on 30.1.2018..
 */

import combineReducers from "redux/es/combineReducers";
import SplashReducer from "./splashReduces";
import ListReducer from "./listReducer";
import NavigationReducer from "./navigationReducer";
import SingleProductReducer from "./singleProductReducer";
import CommentsReducer from "./commentsReducer";

export default combineReducers({
    splash: SplashReducer,
    listProduct: ListReducer,
    singleProduct: SingleProductReducer,
    comment: CommentsReducer,
    nav: NavigationReducer
});
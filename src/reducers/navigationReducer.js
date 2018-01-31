/**
 * Created by Mita on 30.1.2018..
 */
import RootNavigator from "../navigation/navigationList";

const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Splash'));

export default (state = initialState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
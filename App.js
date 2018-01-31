/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';
import RootNavigator from "./src/navigation/navigationList";
import {connect} from 'react-redux';

class App extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(App);
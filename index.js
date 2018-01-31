import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './src/reducers'

const store = createStore(reducers, applyMiddleware(
    thunkMiddleware
));

const AppContainer = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent('rnReduxStore', () => AppContainer);

/**
 * Created by Mita on 29.1.2018..
 */
import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getData, getDataSuccess, getDataError, getOpenNexScreen, goToListProducts, fetchDataFromAPI} from '../actions'

class Splash extends Component<{}> {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.props.fetchDataFromAPI();
    }


    render() {
        if (!this.props.fetchData.isDownload) {
            return (
                <View style={[styles.container]}>
                    <Text style={styles.textLoading}>Loading Data . . .</Text>
                    <ActivityIndicator style={styles.loader}/>
                </View>
            );
        } else {
            return (
                <View style={[styles.container]}>
                    <Text >{this.props.fetchData.isDownload.toString()}</Text>
                    <Text >{this.props.fetchData.data.toString()}</Text>
                    { this.props.goToListProducts()}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00695c'
    },
    textLoading: {
        color: '#ffffff',
        fontSize: 20
    },
    loader: {
        height: 150,
        width: 150
    }
});

function mapStateToProps(state) {
    return {
        fetchData: state.splash
    }
}

export default connect(mapStateToProps, {
    getData,
    getDataSuccess,
    getDataError,
    getOpenNexScreen,
    goToListProducts,
    fetchDataFromAPI
})(Splash);
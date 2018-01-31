/**
 * Created by Mita on 29.1.2018..
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import {openSingleProduct, goToSingleProduct} from '../actions'

class ListProductsPage extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props.splashData;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        // if (data)
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={ds.cloneWithRows(data)}
                    renderRow={(product, index) =>
                        <View style={{padding: 15}}>
                            <View style={styles.containerProduct}>
                                <Image style={styles.imageProduct} source={{uri: product.images[0].thumb}}/>
                                <Text style={styles.titleText}>{product.title}</Text>
                            </View>
                            <View style={[styles.containerProduct, {paddingLeft: 20, paddingRight: 20}]}>
                                <Text>{product.price}</Text>
                                <Button onPress={(e) => {
                                    e.stopPropagation();
                                    this.props.goToSingleProduct(product)
                                }} title="Read more"/>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00695c'
    },
    imageProduct: {
        width: 150,
        height: 150
    },
    titleText: {
        alignSelf: 'center'
    },
    containerProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

function mapStateToProps(state) {
    return {
        splashData: state.splash,
    }
}

export default connect(mapStateToProps, {openSingleProduct, goToSingleProduct})(ListProductsPage);
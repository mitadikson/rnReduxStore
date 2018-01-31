/**
 * Created by Mita on 29.1.2018..
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
    Modal,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {goToCommentList, openModalImage, closedModalImage} from '../actions'

class SingleProductPage extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#00695c'}}>
                <Modal
                    visible={this.props.currentState.isVisibilityModal}
                    animationType={'slide'}
                    onRequestClose={() => this.props.closedModalImage()}
                >
                    <View style={styles.containerModal}>
                        <Image style={{height: 300, alignSelf: 'stretch'}}
                               source={{uri: this.props.currentState.img}}/>
                    </View>
                </Modal>
                <View style={[styles.containerHeader]}>
                    <View style={{height: 300, alignSelf: 'stretch', position: 'relative'}}>
                        <Image style={{height: 300, alignSelf: 'stretch'}}
                               source={{uri: this.props.navigation.state.params.images[0].thumb}}/>
                        <View style={{
                            position: 'absolute',
                            zIndex: 10,
                            right: 0,
                            alignContent: 'stretch'
                        }}>
                            {
                                this.props.navigation.state.params.images.map((img, i) =>
                                    <TouchableOpacity key={i} activeOpacity={ .9 } style={{height: 100, width: 100}}
                                                      onPress={(e) => {
                                                          e.stopPropagation();
                                                          this.props.openModalImage(img.original);
                                                      }}>
                                        <Image style={{height: 100, width: 100}} source={{uri: img.thumb}}/>
                                    </TouchableOpacity>
                                )
                            }

                        </View>
                    </View>
                    <Text style={styles.textTitle}>{this.props.navigation.state.params.title}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Text style={styles.textPrice}>${this.props.navigation.state.params.price}</Text>
                        <Button style={styles.btnComment} onPress={(e) => {
                            e.stopPropagation();
                            // this.props.goToCommentList(this.props.navigation.state.params.id);
                        }} title="Comment"/>
                    </View>
                    <View>
                        <Text style={styles.textDescriptionTitle}>Description: </Text>
                        <Text style={styles.textDescription}>{this.props.navigation.state.params.description}</Text>
                    </View>
                    <View>
                        <Text style={styles.textDescriptionTitle}>Specification: </Text>
                        <Text style={styles.textDescription}>{this.props.navigation.state.params.specification}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    textTitle: {
        flex: 1,
        color: '#ffffff',
        fontSize: 24,
        padding: 20,
    },
    textPrice: {
        color: '#ffffff',
        fontSize: 24,
        padding: 20,
    },
    btnComment: {},
    textDescriptionTitle: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        color: '#ffffff',
        padding: 10,
        fontSize: 20
    },
    textDescription: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        color: '#ffffff',
        padding: 20,
        fontSize: 18
    },
});

function mapStateToProps(state) {
    return {
        fetchData: state.splash,
        currentState: state.singleProduct
    }
}

export default connect(mapStateToProps, {
    goToCommentList,
    openModalImage,
    closedModalImage
})(SingleProductPage);
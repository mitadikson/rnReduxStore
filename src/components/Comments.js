/**
 * Created by Mita on 31.1.2018..
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Modal,
    TextInput
} from 'react-native';
import {connect} from 'react-redux';
import {openModalAddComment, closedModalAddComment} from '../actions'

class CommentsList extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#00695c'}}>
                <Modal
                    visible={this.props.commentState.isVisibilityModal}
                    animationType={'slide'}
                    onRequestClose={() => this.props.closedModalAddComment()}
                >
                    <View style={styles.containerModal}>
                        <TextInput
                            style={{width: 100, height: 50, borderWidth: 1}}
                            onChangeText={this.onChangeText}
                            // value={this.props.count.toString()}
                        />
                    </View>
                </Modal>
                <View style={[styles.containerHeader]}>

                    {/*{*/}
                    {/*this.props.currentState.commentsList.map((comment, i) =>*/}
                    {/*<Text style={styles.textComment}>{comment}</Text>*/}
                    {/*)*/}
                    {/*}*/}

                </View>
                <Button title="Add Comment" onPress={this.props.openModalAddComment()}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    btnAddComment: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginEnd: 20,
        marginBottom: 20
    },
    textComment: {
        backgroundColor: 'rgba(10,10,10,.3)',
        color: '#000',
        padding: 20,
        fontSize: 14
    },
});

function mapStateToProps(state) {
    return {
        commentState: state.comment
    }
}

export default connect(mapStateToProps, {openModalAddComment, closedModalAddComment})(CommentsList);
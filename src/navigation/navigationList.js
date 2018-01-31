/**
 * Created by Mita on 30.1.2018..
 */
import {StackNavigator} from 'react-navigation';
import ListProductsPage from '../components/ListProducts';
import SingleProductPage from '../components/SingleProducts';
import Splash from "../components/Splash";
import CommentsList from "../components/Comments";


const RootNavigator = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        }
    },
    ListProducts: {
        screen: ListProductsPage,
        navigationOptions: {
            title: "List Products",
            headerLeft: null,
        },
    },
    SingleProducts: {screen: SingleProductPage},
    Comments: {screen: CommentsList},
});

export default RootNavigator;
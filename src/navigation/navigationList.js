/**
 * Created by Mita on 30.1.2018..
 */
import {StackNavigator} from 'react-navigation';
import ListProductsPage from '../components/ListProductsPage';
import SingleProductPage from '../components/SingleProductsPage';
import Splash from "../components/SplashPage";
import CommentsList from "../components/CommentsPage";


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
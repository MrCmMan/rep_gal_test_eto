import { createAppContainer, createStackNavigator, StackActions, NavigationActions,StackNavigator } from "react-navigation";
import Home from "./home";
import Full_img from "./full_img_screen";


const navigator =createStackNavigator({
   Home:  Home ,
    Full_img:  Full_img,
}, {
    initialRouteName: 'Home',
});


export default createAppContainer( navigator);

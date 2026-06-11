import {Text , View, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../screens/Home";
import Entypo from '@expo/vector-icons/Entypo';
import Comentarios from "../../screens/Comentarios";



const Tab = createBottomTabNavigator();

function StackHome (){
    return(
        
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
            <Tab.Screen name="Home" component = {Home} options={ { tabBarIcon: () => <Entypo name="home" size={24} color="black"/> }} />
            <Tab.Screen name = "Comentarios" component={Comentarios} screenOptions={ { tabBarShowLabel: false}}/>

        </Tab.Navigator>
        
    )
}

export default StackHome

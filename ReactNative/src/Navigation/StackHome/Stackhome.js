import {Text , View, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../screens/Home";
import Entypo from '@expo/vector-icons/Entypo';
import Comentarios from "../../screens/Comentarios";
import AntDesign from '@expo/vector-icons/AntDesign';



const Tab = createBottomTabNavigator();

function StackHome (){
    return(
        
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component = {Home} options={ { tabBarIcon: () => <Entypo name="home" size={24} color="black"/> }} />
            <Tab.Screen name = "Comentarios" component={Comentarios} options={ { tabBarIcon: () => <AntDesign name="comment" size={24} color="black" /> }} />

        </Tab.Navigator>
        
    )
}

export default StackHome

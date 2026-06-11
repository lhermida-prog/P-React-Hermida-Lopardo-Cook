import {Text , View, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Crear_Post from "../../screens/Crear_Post";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Comentarios from "../../screens/Comentarios";
import StackHome from "../StackHome/Stackhome";



const Tab = createBottomTabNavigator();

function Tabs (){
    return(
        
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
            <Tab.Screen name="StackHome" component = {StackHome} options={ { tabBarIcon: () => <Entypo name="home" size={24} color="black"/> }} />
            <Tab.Screen name = "Profile" component={Profile} options={ { tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />} }/>
            <Tab.Screen name = "Crear_Post" component={Crear_Post} options={ { tabBarIcon: () =><AntDesign name="camera" size={24} color="black" />}}/>

        </Tab.Navigator>
        
    )
}

export default Tabs

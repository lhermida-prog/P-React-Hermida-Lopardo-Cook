import {Text , View, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Crear_Post from "../../screens/Crear_Post";




const Tab = createBottomTabNavigator();

function HomeMenu (){
    return(
        
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
            <Tab.Screen name="Home" component = {Home} />
            <Tab.Screen name = "Profile" component={Profile} />
            <Tab.Screen name = "Crear Post" component={Crear_Post}/>
        </Tab.Navigator>
        
    )
}

export default HomeMenu
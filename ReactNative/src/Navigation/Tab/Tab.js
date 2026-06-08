import {Text , View, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Crear_Post from "../../screens/Crear_Post";
import Home from "../../../../../../Clase3Navegacion/demo-expo/src/Screens/Home/Home";
import Perfil from "../../../../../../Clase3Navegacion/demo-expo/src/Screens/Profile/Profile";




const Tab = createBottomTabNavigator();

function Tab (){
    return(
        
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
            <Tab.Screen name="Home" component = {Home} />
            <Tab.Screen name = "Profile" component={Profile} />
            <Tab.Screen name = "Crear Post" component={Crear_Post}/>
        </Tab.Navigator>
        
    )
}

export default HomeMenu
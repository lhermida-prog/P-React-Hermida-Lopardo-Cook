import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Tab from '../Tab/Tab';
import Comentarios from '../../screens/Comentarios';

const Stack = createNativeStackNavigator();

function Stacks (){

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Register" component={ Register } options={ { headerShown: false } }/>
                <Stack.Screen name="Login" component ={ Login } options={ { headerShown: false } }/>
                <Stack.Screen name="Tab" component ={ Tab } options={ { headerShown: false } }/>
                <Stack.Screen name="Comentarios" component ={ Comentarios } options={ { headerShown: false } }/>
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacks 
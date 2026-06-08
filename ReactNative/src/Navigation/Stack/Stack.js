import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Tab from '../Tab/Tab';

const Stack = createNativeStackNavigator();

function Stack (){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={ Register } options={ { headerShown: false } }/>
                <Stack.Screen name="Login" component ={ Login } options={ { headerShown: false } }/>
                <Stack.Screen name="Tabs" component ={ Tab } options={ { headerShown: false } }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stack 
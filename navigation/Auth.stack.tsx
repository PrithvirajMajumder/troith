import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Register'
                component={Register}
            />

        </Stack.Navigator>
    );
}

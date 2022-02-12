import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Pages/SplashScreen';

const Stack = createNativeStackNavigator();

export default function SplashStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='SplashScreen' component={SplashScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}

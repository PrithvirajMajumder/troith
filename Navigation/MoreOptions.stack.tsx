import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Companies from '../Pages/Companies';
import More from '../Pages/More';
import ProfileSettings from '../Pages/ProfileSettings';
import Uoms from '../Pages/Uoms';

function MoreStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='More' component={More}></Stack.Screen>
            <Stack.Screen name='Units' component={Uoms}></Stack.Screen>
            <Stack.Screen name='Companies' component={Companies}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileSettings}></Stack.Screen>
        </Stack.Navigator >
    );
}

export default MoreStack;
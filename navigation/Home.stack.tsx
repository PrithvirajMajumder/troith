import Bills from '../Pages/Bills';
import Challans from '../Pages/Challans';
import Items from '../Pages/Items';
import Vendors from '../Pages/Vendors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeStack() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'Bills') {
                    return <Icon name='receipt' size={size} color={color}></Icon>;
                } else if (route.name === 'Challans') {
                    return <Icon name='description' size={size} color={color}></Icon>;
                } else if (route.name === 'Items') {
                    return <Icon name='category' size={size} color={color}></Icon>;
                } else if (route.name === 'Vendors') {
                    return <Icon name='people' size={size} color={color}></Icon>;
                }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: '#c3c3c3',
        })}>
            <Tab.Screen name='Bills' component={Bills}></Tab.Screen>
            <Tab.Screen name='Challans' component={Challans}></Tab.Screen>
            <Tab.Screen name='Items' component={Items}></Tab.Screen>
            <Tab.Screen name='Vendors' component={Vendors}></Tab.Screen>
        </Tab.Navigator >
    );
}

export default HomeStack;
import Bills from '../Pages/Bills';
import Challans from '../Pages/Challans';
import Items from '../Pages/Items';
import Vendors from '../Pages/Vendors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import More from '../Pages/More';
import { Platform } from 'react-native';

function HomeStack() {

    const Tab = createBottomTabNavigator();

    const androidTabBarStyle = {
        height: 70,
        paddingBottom: 20,
        paddingTop: 10
    };

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
                } else if (route.name === 'More') {
                    return <Icon name='menu' size={size} color={color}></Icon>;
                }
            },
            tabBarStyle: Platform.OS === 'android' ? androidTabBarStyle : {},
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: '#c3c3c3',
        })}>
            <Tab.Screen name='Bills' component={Bills}></Tab.Screen>
            <Tab.Screen name='Challans' component={Challans}></Tab.Screen>
            <Tab.Screen name='Items' component={Items}></Tab.Screen>
            <Tab.Screen name='Vendors' component={Vendors}></Tab.Screen>
            <Tab.Screen name='More' component={More}></Tab.Screen>
        </Tab.Navigator >
    );
}

export default HomeStack;
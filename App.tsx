import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Pages/Home';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name='Home' component={Home}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


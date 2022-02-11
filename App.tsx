import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeStack from './navigation/Home.stack';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <AppStack.Screen name='Home' component={HomeStack}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

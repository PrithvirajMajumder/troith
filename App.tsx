import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './navigation/Auth.stack';
import HomeStack from './navigation/Home.stack';
import SplashStack from './navigation/SplashSchreen.stack';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        < StatusBar style="auto" />
        <AppStack.Navigator initialRouteName='Splash' screenOptions={{
          headerShown: false,
        }}>
          <AppStack.Screen name='Home' component={HomeStack}></AppStack.Screen>
          <AppStack.Screen name='Authentication' component={AuthStack}></AppStack.Screen>
          <AppStack.Screen name='Splash' component={SplashStack}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

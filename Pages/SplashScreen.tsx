import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";

function SplashScreen() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container} >
            <Text style={tw`text-red-500`}> Let's build splash screen</Text>
            < StatusBar style="auto" />
        </View>
    );
}

export default SplashScreen;
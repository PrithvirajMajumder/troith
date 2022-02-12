import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";
import { auth } from '../firebase';

function SplashScreen({ navigation }: any) {

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, ((authuser) => {
            if (authuser) {
                navigation.replace('Home');
            } else if (!authuser) {
                navigation.navigate('Authentication');
            }
        }));

        return unsubscribe;
    }, []);

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
            <Text style={tw`text-gray-500 text-4xl font-bold`}>Troith</Text>
            < StatusBar style="auto" />
        </View>
    );
}

export default SplashScreen;
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";
import { auth } from '../firebase';

function Uoms({ navigation }: any) {

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
            <Text style={tw`text-gray-500 text-4xl font-bold`}>Uoms</Text>
            < StatusBar style="auto" />
        </View>
    );
}

export default Uoms;
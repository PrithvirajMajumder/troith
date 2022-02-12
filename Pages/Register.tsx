import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from "twrnc";
import User from '../Models/User.model';
import { AuthService } from '../Services/Auth.service';

function Register({ navigation }: any) {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
        },
    });

    const registerUser = () => {
        const user: User = {
            displayName: fullname,
            email: email,
            password: password,
        };
        setIsLoading(true);
        AuthService.register(user)
            .then(() => {
                setIsLoading(false);
                navigation.replace('Home');
            })
            .catch((error) => {
                alert(error.message);
                setIsLoading(false);
            });
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={[tw`p-3`, styles.container]}>
                    <View>
                        <Text style={tw`text-gray-500 text-4xl font-bold`}>
                            We are making your bill making experience simple
                        </Text>
                        <Text style={tw`text-orange-500 text-4xl font-bold`}>
                            Join us!
                        </Text>
                    </View>
                    <View>
                        <Input
                            leftIcon={<Icon name="account" color="tomato" size={20} />}
                            placeholder="Your full name"
                            value={fullname}
                            onChangeText={(text) => setFullname(text)}
                        />
                        <Input
                            leftIcon={<Icon name="email" color="tomato" size={20} />}
                            placeholder="Eg. yourname@email.com"
                            value={email}
                            keyboardType={'email-address'}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Input
                            leftIcon={<Icon name="lock" color="tomato" size={20} />}
                            secureTextEntry
                            placeholder="It's your secret"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Button
                            title='Register'
                            buttonStyle={{
                                backgroundColor: 'tomato',
                                borderRadius: 3,
                                marginVertical: 20
                            }}
                            loading={isLoading}
                            onPress={registerUser}
                        />
                    </View>
                </View >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}

export default Register;
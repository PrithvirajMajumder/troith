import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from "twrnc";
import { AuthService } from '../Services/Auth.service';

const Login = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between'
        },
    });

    const login = () => {
        setIsLoading(true);
        AuthService.login({
            email,
            password,
        })
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
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                    accessible={false}>
                    <View style={[tw`p-3`, styles.container]}>
                        <View style={tw`${Platform.OS === 'android' ? 'pt-10' : ''}`}>
                            <Text style={tw`text-gray-500 text-4xl font-bold`}>
                                This ship will sail to a wolrd of easy bill making
                            </Text>
                            <Text style={tw`text-orange-500 text-4xl font-bold`}>
                                Come on board!
                            </Text>
                        </View>
                        <View>
                            <Input
                                leftIcon={<Icon name="email" color="tomato" size={20} />}
                                leftIconContainerStyle={{}}
                                rightIconContainerStyle={{}}
                                placeholder="Eg. yourname@email.com"
                                value={email}
                                onChangeText={(text: string) => setEmail(text)}
                            />
                            <Input
                                leftIcon={<Icon name="lock" color="tomato" size={20} />}
                                leftIconContainerStyle={{}}
                                rightIconContainerStyle={{}}
                                secureTextEntry
                                placeholder="It's your secret"
                                value={password}
                                onChangeText={(text: string) => setPassword(text)}
                            />
                            <Button
                                title='Login'
                                buttonStyle={{
                                    backgroundColor: 'tomato',
                                    borderRadius: 3,
                                    marginVertical: 20
                                }}
                                onPress={login}
                                loading={isLoading}
                            />
                            <Button
                                title='Register'
                                type='outline'
                                onPress={() => navigation.navigate('Register')}
                                titleStyle={{
                                    color: 'tomato',
                                }}
                                buttonStyle={{
                                    borderColor: 'tomato',
                                    borderRadius: 3,
                                    marginBottom: 20
                                }}
                            />
                        </View>
                    </View >
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

export default Login;
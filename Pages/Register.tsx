import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from "twrnc";

function Register({ navigation }: any) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
        },
    });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={[tw`p-3`, styles.container]}>
                    <View>
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
                        />
                        <Input
                            leftIcon={<Icon name="lock" color="tomato" size={20} />}
                            leftIconContainerStyle={{}}
                            rightIconContainerStyle={{}}
                            secureTextEntry
                            placeholder="Is's your secret"
                        />
                        <Button
                            title='Register'
                            buttonStyle={{
                                backgroundColor: 'tomato',
                                borderRadius: 3,
                                marginVertical: 20
                            }}
                        />
                    </View>
                </View >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}

export default Register;
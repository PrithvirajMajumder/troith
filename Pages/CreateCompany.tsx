import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FAB, Icon, Input } from 'react-native-elements';
import tw from "twrnc";
import Company from '../Models/Company.model';
import { CompanyService } from '../Services/Company.service';

function CreateCompany({ navigation }: any) {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNo, setPhoneNo] = useState<string>('');
    const [gstin, setGstin] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });

    const createCompany = () => {
        const company: Company = {
            name,
            email,
            address,
            gstin,
            phoneNo: parseInt(phoneNo),
        };
        CompanyService.createCompany(company)
            .then(() => {
                navigation.goBack();
            })
            .catch(error => alert(error.message));
    }

    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                    accessible={false}>
                    <View style={[tw`p-3`, styles.container]}>
                        <View style={tw`${Platform.OS === 'android' ? 'pt-10' : ''}`}>
                            <Text style={tw`text-gray-500 text-4xl font-bold`}>
                                Create a new
                            </Text>
                            <Text style={tw`text-orange-500 text-4xl font-bold`}>
                                Company
                            </Text>
                        </View>
                        <View style={tw`mt-10`}>
                            <Input
                                label="Name"
                                placeholder="Eg. Escon Engineering Co."
                                leftIcon={<Icon name="business" color="tomato" size={20} />}
                                value={name}
                                onChangeText={(text: string) => setName(text)}
                            />
                            <Input
                                label="Email"
                                placeholder="Eg. companyname@email.com"
                                leftIcon={<Icon name="email" color="tomato" size={20} />}
                                value={email}
                                onChangeText={(text: string) => setEmail(text)}
                                keyboardType="email-address"
                            />
                            <Input
                                label="Phone"
                                placeholder="Eg. 1234567890"
                                leftIcon={<Icon name="phone" color="tomato" size={20} />}
                                value={phoneNo}
                                maxLength={10}
                                onChangeText={(text) => setPhoneNo(text)}
                                keyboardType="phone-pad"
                                enablesReturnKeyAutomatically
                            />
                            <Input
                                label="GST No"
                                placeholder="Eg. 15 digit gst no"
                                maxLength={15}
                                leftIcon={<Icon name="gavel" color="tomato" size={20} />}
                                value={gstin}
                                onChangeText={(text: string) => setGstin(text)}
                            />
                            <Input
                                label="Adrres"
                                placeholder="Company's address"
                                leftIcon={<Icon name="home" color="tomato" size={20} />}
                                value={address}
                                onChangeText={(text: string) => setAddress(text)}
                            />
                        </View>
                    </View >
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <FAB
                placement='right'
                icon={{ name: 'check', color: 'white' }}
                color='tomato'
                disabled={!name.length || !email.length || !phoneNo.length || !gstin.length || !address.length}
                onPress={createCompany}
            />
        </SafeAreaView>
    );
}

export default CreateCompany;
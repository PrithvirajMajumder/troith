import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FAB, Icon, Input } from 'react-native-elements';
import tw from "twrnc";
import Uom from '../Models/Uom.model';
import { UomService } from '../Services/Uom.service';
import { VendorService } from '../Services/Vendor.service';

function CreateVendor({ navigation }: any) {

    const [name, setName] = useState<string>('');
    const [gstin, setGstin] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });

    const createVendor = () => {
        VendorService.createVendor({
            address,
            gstin,
            name,
        })
            .then(() => navigation.goBack())
            .catch(error => alert(error.message));

    };

    return (
        <View style={styles.container} >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                    accessible={false}>
                    <View style={[tw`p-3`, styles.container]}>
                        <View style={tw`${Platform.OS === 'android' ? 'pt-10' : ''}`}>
                            <Text style={tw`text-gray-500 text-4xl font-bold`}>
                                Create a new
                            </Text>
                            <Text style={tw`text-orange-500 text-4xl font-bold`}>
                                Vendor
                            </Text>
                        </View>
                        <View style={tw`mt-10`}>
                            <Input
                                placeholder="Eg. Palash plastics"
                                label="Name"
                                value={name}
                                onChangeText={(text: string) => setName(text)}
                                leftIcon={<Icon name="people" color="tomato" size={20} />}
                            />
                            <Input
                                label="Gstin"
                                placeholder="Eg. Vendor's gst no"
                                value={gstin}
                                maxLength={15}
                                onChangeText={(text: string) => setGstin(text)}
                                leftIcon={<Icon name="gavel" color="tomato" size={20} />}
                            />
                            <Input
                                label="Address"
                                placeholder="Eg. Vendor's address"
                                value={address}
                                onChangeText={(text: string) => setAddress(text)}
                                leftIcon={<Icon name="home" color="tomato" size={20} />}
                            />
                        </View>
                    </View >
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <FAB
                placement='right'
                icon={{ name: 'check', color: 'white' }}
                color='tomato'
                onPress={() => createVendor()}
                disabled={!name.length || !gstin.length || !address.length}
            />
        </View>
    );
}

export default CreateVendor;
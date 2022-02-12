import { signOut } from 'firebase/auth';
import React from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from '../Atoms/ListItem';
import { auth } from '../firebase';

function More({ navigation }: any) {

    const logout = () => {
        signOut(auth).then(() => navigation.replace('Authentication'));
    }

    return (
        <ScrollView >
            <ListItem
                title='Profile'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'person'
                    }
                }}
            />
            <ListItem
                title='Unit of measurements'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'straighten'
                    }
                }}
            />
            <ListItem
                title='Companies'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'business'
                    }
                }}
            />
            <ListItem
                title='Log out'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'logout',
                    }
                }}
                onPress={() => logout()}
            />
        </ScrollView >
    );
}

export default More;
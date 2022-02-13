import { signOut } from 'firebase/auth';
import React from 'react';
import { ScrollView } from 'react-native';
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
                onPress={() => navigation.navigate('Profile')}
            />
            <ListItem
                title='Unit of measurements'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'straighten'
                    }
                }}
                onPress={() => navigation.navigate('Units')}
            />
            <ListItem
                title='Companies'
                avatar={{
                    icon: {
                        type: 'material',
                        name: 'business'
                    }
                }}
                onPress={() => navigation.navigate('Companies')}
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
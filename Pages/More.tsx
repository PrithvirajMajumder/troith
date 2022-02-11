import React from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from '../Atoms/ListItem';

function More() {
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
        </ScrollView >
    );
}

export default More;
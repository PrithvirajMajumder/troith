import React from 'react';
import { View } from 'react-native';
import ListItem from '../Atoms/ListItem';

function More() {
    return (
        <View >
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
        </View >
    );
}

export default More;
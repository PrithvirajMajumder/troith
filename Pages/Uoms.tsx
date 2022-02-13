import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ListItem from '../Atoms/ListItem';
import Uom from '../Models/Uom.model';
import { UomService } from '../Services/Uom.service';
import UomUtils from '../Utils/Uom.utils';

function Uoms({ navigation }: any) {

    const [uoms, setUoms] = useState<Uom[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(UomService.getUomQueryRef(), ((snapshot) => {
            setUoms(UomUtils.createUomsFromSnapshot(snapshot));
        }))

        return unsubscribe;
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    uoms.map((uom) => {
                        return <ListItem
                            key={uom.id}
                            title={uom.name}
                            subtitle={`Short name: ${uom.shortName}`}
                            hasAccent
                        />
                    })
                }
            </ScrollView>
            <FAB
                placement='right'
                icon={{ name: 'add', color: 'white' }}
                color='tomato'
                onPress={() => navigation.navigate('CreateUom')}
            />
        </View>
    );
}

export default Uoms;
import { onSnapshot } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ListItem from '../Atoms/ListItem';
import Vendor from '../Models/Vendor.model';
import { VendorService } from '../Services/Vendor.service';
import VendorUtils from '../Utils/Vendor.utils';

function Vendors({ navigation }: any) {

    const [vendors, setVendors] = useState<Vendor[]>([]);

    useLayoutEffect(() => {
        const unsubscribe = onSnapshot(VendorService.getVendorQueryRef(), (snapshot) => {
            setVendors(VendorUtils.createVendorsFromSnapshot(snapshot));
        });

        return unsubscribe;
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });

    return (
        <View style={styles.container} >
            <ScrollView>
                {vendors.map(vendor => <ListItem key={vendor.id} title={vendor.name} subtitle={`Gstin: ${vendor.gstin}`} hasAccent={true}></ListItem>)}
            </ScrollView>
            <FAB
                placement='right'
                icon={{ name: 'add', color: 'white' }}
                color='tomato'
                onPress={() => navigation.navigate('CreateVendor')}
            />
        </View>
    );
}

export default Vendors;
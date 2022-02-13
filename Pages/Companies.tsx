import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-elements';
import ListItem from '../Atoms/ListItem';
import Company from '../Models/Company.model';
import Uom from '../Models/Uom.model';
import { CompanyService } from '../Services/Company.service';
import { UomService } from '../Services/Uom.service';
import CompanyUtils from '../Utils/Company.utils';
import UomUtils from '../Utils/Uom.utils';

function Uoms({ navigation }: any) {

    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(CompanyService.getCompaniesQueryRef(), ((snapshot) => {
            setCompanies(CompanyUtils.createUomsFromSnapshot(snapshot));
        }));

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
                    companies.map((company) => {
                        return <ListItem
                            key={company.id}
                            title={company.name}
                            subtitle={`Address: ${company.address}`}
                            hasAccent
                        />
                    })
                }
            </ScrollView>
            <FAB
                placement='right'
                icon={{ name: 'add', color: 'white' }}
                color='tomato'
                onPress={() => navigation.navigate('CreateCompany')}
            />
        </View>
    );
}

export default Uoms;
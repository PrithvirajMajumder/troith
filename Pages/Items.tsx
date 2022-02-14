import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListItem from '../Atoms/ListItem';
import { ItemService } from '../Services/Item.service';
import ItemUtils from '../Utils/Item.utils';

function Items() {

    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(ItemService.getItemsQueryRef(), (async snapshot => {
            setItems(await ItemUtils.createItemsFromSnapshot(snapshot));            
        }));

        return unsubscribe;
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });

    return (
        <ScrollView style={styles.container} >
            {items.map(item => <ListItem key={item.id} title={item.name} subtitle={`${item.quantity} ${item.uom.shortName}`} hasAccent accentColor={'tomato'} />)}
        </ScrollView>
    );
}

export default Items;
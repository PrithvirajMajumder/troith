import { addDoc, collection, getDocs, query, refEqual, where, DocumentReference, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Item from "../Models/Item.model";

export class ItemApiService {
    public getItems = () => {
        const uid = auth.currentUser?.uid;
        const queryRef = query(collection(db, 'items'), where('uid', '==', uid));

        return getDocs(queryRef);
    };

    public getItemsQueryRef = () => {
        const uid = auth.currentUser?.uid;

        return query(collection(db, 'items'), where('uid', '==', uid));
    };

    public getItem = () => { };

    public createItem = (item: Item) => {
        item.uid = auth.currentUser?.uid;
        item.uom = doc(collection(db, 'uoms'), `${item.uomObj?.id}`);
        delete item['uomObj'];

        return addDoc(collection(db, 'items'), item);
    };
}

export const ItemService: ItemApiService = new ItemApiService();
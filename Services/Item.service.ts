import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import Item from "../Models/Items.model";

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

        return addDoc(collection(db, 'items'), item);
    };
}

export const ItemService: ItemApiService = new ItemApiService();
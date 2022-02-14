import { DocumentData, getDoc, QuerySnapshot } from "firebase/firestore";
import Item from "../Models/Items.model";
import UomUtils from "./Uom.utils";

export default class ItemUtils {
    public static createItemsFromSnapshot = async (snapshot: QuerySnapshot<DocumentData>): Promise<Item[]> => {
        const unresolved = snapshot.docs.map(async doc => {
            const itemDoc = { ...doc.data() };
            const uomSnapshot = await getDoc(itemDoc.uom);
            const item: Item = {
                id: doc.id,
                description: itemDoc.description,
                name: itemDoc.name,
                price: itemDoc.price,
                quantity: itemDoc.quantity,
                uom: UomUtils.createUomFromSnapshot(uomSnapshot),
            };

            return item;
        });

        return await Promise.all(unresolved)
    }
}
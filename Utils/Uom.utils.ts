import { DocumentData, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import Uom from "../Models/Uom.model";

export default class UomUtils {
    public static createUomsFromSnapshot = (snapshot: QuerySnapshot<DocumentData>): Uom[] => {
        return snapshot.docs.map(doc => {
            const uomDoc = { ...doc.data() };
            return {
                id: doc.id,
                name: uomDoc.name,
                shortName: uomDoc.shortName,
            };
        })
    }

    public static createUomFromSnapshot = (snapshot: DocumentSnapshot<unknown>): Uom => {
        const uomDoc: any = snapshot.data();
        return {
            id: snapshot.id,
            name: uomDoc.name,
            shortName: uomDoc.shortName,
        }
    }
}
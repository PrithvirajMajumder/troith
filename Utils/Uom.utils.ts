import { DocumentData, QuerySnapshot } from "firebase/firestore";
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
}
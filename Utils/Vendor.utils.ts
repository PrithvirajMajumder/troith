import { DocumentData, QuerySnapshot } from "firebase/firestore";
import Vendor from "../Models/Vendor.model";

export default class VendorUtils {
    public static createVendorsFromSnapshot = (snapshot: QuerySnapshot<DocumentData>): Vendor[] => {
        return snapshot.docs.map(doc => {
            const vendorDoc = { ...doc.data() };
            return {
                id: doc.id,
                name: vendorDoc.name,
                address: vendorDoc.address,
                gstin: vendorDoc.gstin,
            };
        })
    }
}
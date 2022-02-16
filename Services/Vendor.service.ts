import { addDoc, collection, getDocs, query, refEqual, where, DocumentReference, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Item from "../Models/Item.model";
import Vendor from "../Models/Vendor.model";

export class VendorApiService {
    public getVendors = () => {
        const uid = auth.currentUser?.uid;
        const queryRef = query(collection(db, 'vendors'), where('uid', '==', uid));

        return getDocs(queryRef);
    };

    public getVendorQueryRef = () => {
        const uid = auth.currentUser?.uid;

        return query(collection(db, 'vendors'), where('uid', '==', uid));
    };

    public getVendor = () => { };

    public createVendor = (vendor: Vendor) => {
        vendor.uid = auth.currentUser?.uid;

        return addDoc(collection(db, 'vendors'), vendor);
    };
}

export const VendorService: VendorApiService = new VendorApiService();
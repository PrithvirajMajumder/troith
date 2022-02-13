import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import Uom from "../Models/Uom.model"

class UomApiService {
    public getUoms = () => {
        const uid = auth.currentUser?.uid;
        const queryRef = query(collection(db, 'uoms'), where('uid', '==', uid));
        return getDocs(queryRef);
    };

    public getUomQueryRef = () => {
        const uid = auth.currentUser?.uid;
        return query(collection(db, 'uoms'), where('uid', '==', uid));
    };

    public getUom = () => { };

    public createUom = (uom: Uom) => {
        uom.uid = auth.currentUser?.uid;
        return addDoc(collection(db, 'uoms'), uom);
    };
}

export const UomService: UomApiService = new UomApiService();
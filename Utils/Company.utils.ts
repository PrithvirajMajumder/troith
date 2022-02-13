import { DocumentData, QuerySnapshot } from "firebase/firestore";
import Company from "../Models/Company.model";
import Uom from "../Models/Uom.model";

export default class CompanyUtils {
    public static createUomsFromSnapshot = (snapshot: QuerySnapshot<DocumentData>): Company[] => {
        return snapshot.docs.map(doc => {
            const companyDoc = { ...doc.data() };
            return {
                id: doc.id,
                name: companyDoc.name,
                address: companyDoc.address,
                gstin: companyDoc.gstin,
                email: companyDoc.email,
                phoneNo: companyDoc.phone,
            };
        })
    }
}
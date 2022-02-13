import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import Company from "../Models/Company.model";

export class CompanyApiService {
    public getCompanies = () => {
        const uid = auth.currentUser?.uid;
        const queryRef = query(collection(db, 'companies'), where('uid', '==', uid));

        return getDocs(queryRef);
    };

    public getCompaniesQueryRef = () => {
        const uid = auth.currentUser?.uid;

        return query(collection(db, 'companies'), where('uid', '==', uid));
    };

    public getCompany = () => { };

    public createCompany = (company: Company) => {
        company.uid = auth.currentUser?.uid;

        return addDoc(collection(db, 'companies'), company);
    };
}

export const CompanyService: CompanyApiService = new CompanyApiService();
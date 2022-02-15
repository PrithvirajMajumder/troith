import { DocumentReference } from "firebase/firestore";
import Uom from "./Uom.model";

export default interface Item {
    name: string;
    description?: string;
    quantity: number;
    price: number;
    uom?: DocumentReference;
    uomObj?: Uom;
    id?: string;
    uid?: string;
}
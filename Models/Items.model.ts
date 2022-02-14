import Uom from "./Uom.model";

export default interface Item {
    name: string;
    description?: string;
    quantity: number;
    price: number;
    uom: Uom;
    id?: string;
    uid?: string;
}
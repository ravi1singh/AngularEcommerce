import { Product } from "./Product";

export class UserDetails {
    customerId:number;
    name:string;
    cart:Product[];
    allVisibleProducts:Product[];
    constructor(customerId:number,name:string,cart:Product[],allVisibleProducts:Product[]) {
        this.customerId=customerId;
        this.name=name;
        this.cart=cart;
        this.allVisibleProducts=allVisibleProducts;
    }
}
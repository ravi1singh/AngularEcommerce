export class Checkout{
    customerId:number;
    //checkoutlists:number[];
    checkoutlist:string;
    constructor(customerId:number,checkoutlist:string){
        this.customerId=customerId;
        this.checkoutlist=checkoutlist;
    }
}
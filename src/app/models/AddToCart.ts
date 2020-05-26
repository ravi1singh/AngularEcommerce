export class AddToCart{
        customerId:number;
        productId:number;
        constructor(customerId:number,productId:number){
            this.customerId=customerId;
            this.productId=productId;
        }
}
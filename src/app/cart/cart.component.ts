import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { DataStorageService } from '../services/data-storage.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Checkout } from '../models/Checkout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  name:string;
  cartProducts:Product[]=[];
  totalcost=0;
  productIdList:number[]=[];
  constructor(private dataStorage:DataStorageService,
              private router:Router              
      ) { }

  ngOnInit() {
    var response=this.dataStorage.userDetails;
        this.name=response.name;  
        this.cartProducts=response.cart;
        var x=this.dataStorage.cartlist;
        console.log(x);
        for(var i=0;i<x.length;i++)
        this.cartProducts.push(x[i]);
        

        for(var i=0;i<this.cartProducts.length;i++){
          this.totalcost+=this.cartProducts[i].price;
          this.productIdList.push(this.cartProducts[i].productId);
        }
        
        console.log(this.cartProducts);
    
  } 
  checkout(){
    console.log("checkout");
    var plist=JSON.stringify(this.productIdList);
    var list=new Checkout(Number(sessionStorage.getItem("customerId")),plist);
      this.dataStorage.checkout(list).subscribe(response=>{
            console.log(response);
        if(response){
                this.router.navigate(['layout/home']);
                sessionStorage.setItem("cartCount","0");
            }
      });
  }

}

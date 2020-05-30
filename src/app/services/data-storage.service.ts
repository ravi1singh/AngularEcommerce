import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from '../models/Login';
import { UserDetails } from '../models/UserDetails';
import { Register } from '../models/Register';
import { Product } from '../models/Product';
import { AddToCart } from '../models/AddToCart';
import { Checkout } from '../models/Checkout';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
 
  userDetails;
  cartlist:Product[]=[];
  constructor(private http:HttpClient) { }

  setUserDetails(userDetails:UserDetails){
        this.userDetails=userDetails;
        return;
  }

  loginValidation(login:Login):Observable<UserDetails>{
      console.log("in dataservice");
       return this.http.post<UserDetails>("http://localhost:9090/login",login);
      
  }
  register(register:Register):Observable<UserDetails>{
    console.log("in dataservice");
      return this.http.post<UserDetails>("http://localhost:9090/register",register);
}
  //  getUserData():Observable<UserDetails>
  //  {  
  //     return this.userDetails;
  //  }
   addToCart(addToCart:AddToCart,list:Product):Observable<boolean>{
    //  this.addedToCart= addedToCart;
    this.cartlist.push(list);
    console.log(this.cartlist);
     return this.http.post<boolean>("http://localhost:9090/addtocart",addToCart);
   }
   checkout(checkout:Checkout):Observable<boolean>{
      var flag= this.http.post<boolean>("http://localhost:9090/checkout",checkout);
      if(flag){
        this.cartlist=[];
        this.userDetails.cart=[];
      }
      return flag;
    }
}

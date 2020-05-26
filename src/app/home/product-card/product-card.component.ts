import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AddToCart } from "src/app/models/AddToCart";
import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productData') product: Product;
   //cartlist:Product[]=[];
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit() {
  }
  onAddToCart(){
    var customerId=Number(sessionStorage.getItem("customerId"));
    // this.cartlist.push(this.product);
    // console.log(this.cartlist);
    var add=new AddToCart(customerId,this.product.productId);
    this.dataStorage.addToCart(add,this.product).subscribe(response=>{ 
      var count=Number(sessionStorage.getItem("cartCount"));
      count++;
      sessionStorage.setItem("cartCount",count.toString());
      console.log(count);
    });
  }

}

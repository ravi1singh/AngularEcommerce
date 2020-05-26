import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute, Data } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId: number;
  constructor(private dataService:DataStorageService,private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProductDetailsById();
    })
    
  }
  getProductDetailsById(){
    var response=this.dataService.userDetails;  
      for(let p of response.allVisibleProducts){
              if(p.productId==this.productId)
                  this.product=p;
          }
          console.log(this.product);
  }   
}

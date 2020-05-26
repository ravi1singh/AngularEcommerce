import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { UserDetails } from '../models/UserDetails';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
name:string;
id:number;
cart:Product[];
allproducts:Product[];

  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
    var response= this.dataStorage.userDetails;
      this.name=response.name;
      this.id=response.customerId;
      this.cart=response.cart;
      this.allproducts=response.allVisibleProducts;
  }
  
}

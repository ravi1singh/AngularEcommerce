import { Component, OnInit, Input } from '@angular/core';
import {Product } from '../../models/Product';



@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  @Input('productData') product: Product;
  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataStorageService } from '../services/data-storage.service';
import { CartCardComponent } from './cart-card/cart-card.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let dataservice:DataStorageService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
       MDBBootstrapModule],
      declarations: [ CartComponent,CartCardComponent ]
      ,
      providers:
      [
        DataStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    dataservice=fixture.debugElement.injector.get(DataStorageService);
    
   dataservice.userDetails={
      name : "rohit",
      id:123,
      cart:[
      
      ],
      allVisibleProducts:[]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from '../services/data-storage.service';
import { compileComponentFromMetadata } from '@angular/compiler';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataservice:DataStorageService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
       MDBBootstrapModule,
       RouterTestingModule,
       HttpClientModule
      ],

      
      declarations: [ HomeComponent,ProductCardComponent ]
      ,
      providers:
      [
        DataStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
  }));

  it('should create', async(() => {

    //component.ngOnInit();
    
    expect(component).toBeTruthy();
  }));
});

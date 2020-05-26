import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { DataStorageService } from '../services/data-storage.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../models/UserDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  email: string;
  password:string;
  userDetails:UserDetails;
  constructor(private dataStorage:DataStorageService,
              private router:Router        
    ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedIn")=="true")
        this.router.navigate(['layout/home']);
  }
  submit(){
    console.log(this.email);
    console.log(this.password);
     var login = new Login(this.email,this.password);
    
    this.dataStorage.loginValidation(login).subscribe(response=>{
      this.dataStorage.setUserDetails(response);
      sessionStorage.setItem("loggedIn","true");
      sessionStorage.setItem("cartCount",response.cart.length.toString());
      sessionStorage.setItem("customerId",response.customerId.toString());
      this.router.navigate(['layout/home']);
      });
      
       
    }
}

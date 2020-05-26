import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Register } from '../models/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name:String;
  address:String;
  city:String;
  state:String;
  country:String;
  zipCode:String;
  email:String;
  mobile:String;
  password:String;
  creditCard:String;

  constructor(private dataStorage:DataStorageService,
              private router:Router     
    ) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("loggedIn")=="true")
        this.router.navigate(['layout/home']);
  }
  submit()
  {
console.log(this.name);
  var register=new Register(this.name,this.address,this.city,this.state,this.country,this.zipCode,this.email,this.mobile,this.password,this.creditCard);
  this.dataStorage.register(register).subscribe(response=>{
    console.log(response);
    this.router.navigate(['login']);    
});
}

}

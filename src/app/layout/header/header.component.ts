import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemCount;
  constructor(private router:Router) { }

  ngOnInit() {
    this.itemCount=sessionStorage.getItem("cartCount");
  }
  onLogout(){
      sessionStorage.clear();
      this.router.navigate(['login']);
  }
  cartclick(){
    this.itemCount=sessionStorage.getItem("cartCount");
    this.router.navigate(['layout/cart']);
  }

}

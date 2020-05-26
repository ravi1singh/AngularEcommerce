import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from "./cart/cart.component";


const routes: Routes = [

  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path:'cart',component:CartComponent }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  //{ path: 'product-details/:id', component: ProductDetailsComponent },
  //{ path: 'home', component: HomeComponent},
  //{ path: 'body', component: BodyComponent},
  { path: '**', redirectTo: 'login' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { HttpClientModule} from '@angular/common/http';
// import { ProductService } from './services/product.service';

// //1. Define routes
// import {Routes, RouterModule} from '@angular/router';
// const routes: Routes = [
//   // path to match,    when path matches, create new instance of component
//   {path: 'category/:id', component: ProductListComponent},
//   {path: 'category', component: ProductListComponent},
//   {path: 'products', component: ProductListComponent},
//   {path: '', redirectTo:'/products', pathMatch: 'full'},
//   // this means it will match on anything that didn't match above routes
//   {path: '**', redirectTo:'/products', pathMatch: 'full'}
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductListComponent
//   ],
//   imports: [
//     // 2. configure Router based on our routes
//     RouterModule.forRoot(routes),
//     BrowserModule,
//     HttpClientModule
//   ],
//   providers: [ProductService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SerachComponent } from './components/serach/serach.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SerachComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    //输入跳转不同的link要加到这
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
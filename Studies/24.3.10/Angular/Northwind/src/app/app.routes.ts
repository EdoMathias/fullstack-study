import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { ContactUsComponent } from './components/about-area/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { EditProductComponent } from './components/products-area/edit-product/edit-product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'products/new', component: AddProductComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  //   { path: '', component: HomeComponent },

  /* full = empty string */
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

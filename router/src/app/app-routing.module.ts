import { ProductDescComponent } from './product-desc/product-desc.component';
import { Code404Component } from './code404/code404.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellinfoComponent } from './sellinfo/sellinfo.component';

const routes: Routes = [
  {
    path: '', redirectTo : '/home' , pathMatch : 'full '
  },
  {
    path: 'home', component : HomeComponent
  },
  {
    path: 'product' , component: ProductComponent , children : [
      {
        path: '', component : ProductDescComponent
      },
      {
        path: 'seller/:id', component : SellinfoComponent
      }
    ]
  },
  {
    path: '**' , component : Code404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Product1Service } from './share/product1.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';
// import { ProductComponent } from './product/product.component';
import { StartComponent } from './start/start.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent,
    StartComponent,
    ProductComponent,
    Product1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Product1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

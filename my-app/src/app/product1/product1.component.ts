import { Product } from './../product/product.component';
import { Product1, Product1Service } from './../share/product1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  productid1: Product1;

  constructor(private ProductService: Product1Service) { }

  ngOnInit() {
    this.productid1 = this.ProductService.getProduct1();
  }

}

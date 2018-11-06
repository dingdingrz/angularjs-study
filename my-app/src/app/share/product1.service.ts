import { Product } from './../product/product.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product1Service {

  constructor() { }
  getProduct1(): Product1 {
    return new Product1 (1, '这是一个服务');
  }
}
export class Product1 {
  constructor(
    public id: number,
    public des: string
  ) {}
}

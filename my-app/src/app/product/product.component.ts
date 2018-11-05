import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 2, 3, '好久才找到的bug', ['电子产品']),
      new Product(2, '第二个商品' , 2, 4, '好久才找到的bug' , ['电子产品']),
      new Product(3, '第三个商品', 2, 1.5, '好久才找到的bug', ['电子产品']),
      new Product(3, '第三个商品', 2, 1.5, '好久才找到的bug', ['电子产品']),
      new Product(3, '第三个商品', 2, 5, '好久才找到的bug', ['电子产品']),
      new Product(3, '第三个商品', 2, 1.5, '好久才找到的bug', ['电子产品']),
    ]
  }

}
export class Product {
  constructor (
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public des: string,
    public categories: Array<string>
  ){}
}

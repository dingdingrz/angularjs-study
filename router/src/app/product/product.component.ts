import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productid: number ;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
   this.routeInfo.params.subscribe( (params: Params ) => this.productid )
  }

}

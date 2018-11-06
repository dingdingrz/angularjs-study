import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellinfo',
  templateUrl: './sellinfo.component.html',
  styleUrls: ['./sellinfo.component.css']
})
export class SellinfoComponent implements OnInit {
  private sellerid: number;

  constructor(private roouteInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerid = this.roouteInfo.snapshot.params[ 'id' ];
  }

}

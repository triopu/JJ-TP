import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  products: any;
  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    fetch("assets/data/api-featured-product.json").then(res=>res.json()).then(json=>{
      this.products = json;
      console.log(this.products);
    });
  }

}

import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    slidesPerView: 1.3,
    centeredSlides: true,
    autoplay: true,
  };

  slideConf = {
    slidesPerView: 2.5,
    centeredSlides: false,
  };

  public topping = [
    { name: 'Cincau',harga:'+3.000', isChecked: false },
    { name: 'Coffee Jelly',harga:'+3.000', isChecked: false },
    { name: 'Extra Espresso',harga:'+5.000', isChecked: false },
    { name: 'Vanilla Ice Cream',harga:'+8.000', isChecked: false },
    { name: 'Match Ice Cream',harga:'+8.000', isChecked: false },
    { name: 'Chocolate Ice Cream',harga:'+8.000', isChecked: false },
  ];
 
  public sugar = [
    {name:'Normal',isChecked:false},
    {name:'Half', isChecked:false},
    {name: 'Less', isChecked:false}
  ];

  public ice = [
    {name:'Normal',isChecked:false},
    {name:'Half', isChecked:false},
    {name: 'Less', isChecked:false}
  ];


  data: any;
  products: any;
  purchased: any;
  pesan: any;
  count: any;
  price:any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.pesan = false;
    this.count = 0;
    this.price = 0;
    this.getData();
    this.getProduct();
  }

  getData() {
    fetch("assets/data/api-slider.json").then(res=>res.json()).then(json=>{
      this.data = json;
      console.log(this.data);
    });
  }

  getProduct(){
    fetch("assets/data/api-featured-product.json").then(res=>res.json()).then(json=>{
      this.products = json;
      console.log(this.products);
    });
  }

  getPurchased(){
    fetch("assets/data/api-last-purchased.json").then(res=>res.json()).then(json=>{
      this.purchased = json;
      for(var i = 0; i<this.purchased.data.length;i++){
        this.price = parseInt(this.price) + parseInt(this.purchased.data[0].price);
      }
      console.log(this.purchased);
    });
  }
  getPesan(){
    this.getPurchased();
    this.pesan = true;
  }
  closePesan(){
    this.purchased = undefined;
    this.price = 0;
    this.pesan = false;
  }
  navigation(param){
    console.log(param)
    var elements = document.getElementsByClassName('tabProd');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active-tab");
    }
    var act = document.getElementById(param);
    act.classList.add('active-tab');

    switch (param){
      case 'populer':
        break;
      case 'untukmu':
        break;
      case 'kopi':
        break;
      case 'teh':
        break;
      case 'snack':
        break;
      case 'tambah':
        this.count = this.count + 1;
        break;
      case 'kurang':
        if(this.count > 0){
          this.count = this.count - 1;
        }
        break;
    }
    
  }

  nav(param){
    switch (param){
      case 'tambah':
        this.count = this.count + 1;
        break;
      case 'kurang':
        if(this.count > 0){
          this.count = this.count - 1;
        }
        break;
    }
  }
}

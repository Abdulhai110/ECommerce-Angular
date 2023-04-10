import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductInterface } from './productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  baseUrl='http://192.168.18.43:8000/api/public/'
constructor(private http: HttpClient ) { }
ngOnInit(): void {

}

products:Array<ProductInterface>=[
  // {
  //   id: 1,
  //   name: 'Pakistan Cricket Team Kit',
  //   price: 20,
  //   categoryId:2,
  //   brand: 'Nike',
  //   ratings: 5,
  //   Category: 'Men',
  //   description: 'Men Cloth',
  //   // productQuantity: 10,
  //   image: '../assets/img01.webp',
  // },
  // {
  //   id: 2,
  //   name: 'Slipper',
  //   price: 30,
  //   categoryId:2,
  //   brand: 'Nike',
  //   ratings: 3,
  //   Category: 'Men',
  //   description: 'Men Slipper',
  //   // productQuantity: 10,
  //   image: '../assets/img02.webp',
  // },
  // {
  //   id: 3,
  //   name: 'Slipper',
  //   price: 10,
  //   categoryId:2,
  //   brand: 'Nike',
  //   ratings: 4,
  //   Category: 'Men',
  //   description: 'Men Slipper',
  //   // productQuantity: 10,
  //   image: '../assets/img03.webp',
  // },
  // {
  //   id: 4,
  //   name: 'Slipper',
  //   price: 2,
  //   ratings: 3,
  //   categoryId:2,
  //   brand: 'Nike',
  //   Category: 'Men',
  //   description: 'Men Slipper',
  //   // productQuantity: 10,
  //   image: '../assets/img04.webp',
  // },
  // {
  //   id: 5,
  //   name: 'Slipper',
  //   price: 30,
  //   ratings: 2,
  //   categoryId:2,
  //   brand: 'Nike',
  //   Category: 'Men',
  //   description: 'Men Winter Coat',
  //   // productQuantity: 10,
  //   image: '../assets/img05.webp',
  // },
  // {
  //   id: 6,
  //   name: 'Nature Beauty',
  //   price: 30,
  //   ratings: 4,
  //   categoryId:2,
  //   brand: 'Nike',
  //   Category: 'Men',
  //   description: 'Men Winter Coat',
  //   // productQuantity: 10,
  //   image: '../assets/nature1.jpg',
  // },
  // {
  //   id: 7,
  //   name: 'Nature Beauty',
  //   price: 20,
  //   ratings: 4,
  //   categoryId:2,
  //   brand: 'Nike',
  //   Category: 'Men',
  //   description: 'Men Winter Coat',
  //   // productQuantity: 10,
  //   image: '../assets/nature2.jpg',
  // },
  // {
  //   id: 8,
  //   name: 'Slipper',
  //   price: 3,
  //   ratings: 5,
  //   categoryId:2,
  //   brand: 'Nike',
  //   Category: 'Men',
  //   description: 'Men Slipper',
  //   // productQuantity: 10,
  //   image: '../assets/img03.webp',
  // }
]



}

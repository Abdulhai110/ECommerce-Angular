import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements OnInit {
  // baseUrl = 'http://192.168.18.43:8000/api/';
  baseUrl = 'http://localhost:8000/api/'
  token!: any;
  header!: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.token);
  }
  setHeader() {
    const token: string | null = localStorage.getItem('token');
    const tokenIntoString: string = token as string;
    this.token = JSON.parse(tokenIntoString);
    console.log(this.token.token);

    this.header = {
      headers: {
        Authorization: `Bearer ${this.token.token}`,
      },
    };
  }

  getProduct(){
    const obervable = this.http.get(this.baseUrl + 'public/product/all');
    return obervable;
  }
  getSpecificProduct(id:number){
    const obervable = this.http.get(this.baseUrl + 'public/product/'+id);
    return obervable;
  }
  deleteProduct(id:number){
    this.setHeader()
    const obervable = this.http.delete(this.baseUrl + 'admin/product/del/'+id,this.header);
    return obervable;
  }
  categoryList() {
    const obervable = this.http.get(this.baseUrl + 'public/category/list');
    return obervable;
  }
  addCategory(data: any) {
    this.setHeader();
    const obervable = this.http.post(
      this.baseUrl + 'admin/category/create',
      data,
      this.header
    );
    return obervable;
  }
  deleteCategory(id: any) {
    this.token = localStorage.getItem('token');
    this.setHeader();
    const obervable = this.http.delete(
      this.baseUrl + 'admin/category/del/' + id,
      this.header
    );
    return obervable;
  }

  addProduct(data:any){
    this.setHeader();
    const obervable = this.http.post(
      this.baseUrl + 'admin/product/create',data,
      this.header
    );
    return obervable;
  }

  checkout(data:any){
    this.setHeader();
    const obervable = this.http.post(
      this.baseUrl + 'customer/order/create',data,
      this.header
    );
    return obervable;
  }

  getUsers(){
    this.setHeader()
    const Observable = this.http.get(this.baseUrl+'public/list')
    return Observable
  }

}

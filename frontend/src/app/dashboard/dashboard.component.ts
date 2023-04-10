import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/libs/admin.service';
import { ProductInterface } from 'src/libs/productInterface';
import { ProductsService } from 'src/libs/products.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  baseUrl = 'http://192.168.18.43:8000/api/public/';
  constructor(
    public products: ProductsService,
    private adminService: AdminService) {
  }

  ngOnInit() {

    this.getProducts()
  }

  getProducts() {
    this.adminService.getProduct().subscribe({
      next: (response: any) => {
        console.log('res', response);
        // for(let i=0;i<response.data.length;i++){
        //   this.products.products.push(response.data[i])
        // }
        this.products.products = response.data
        console.log(this.products.products);
      },
      error: (err: any) => {
        console.log('err', err);
      },
      complete: () => {},
    });
  }
}

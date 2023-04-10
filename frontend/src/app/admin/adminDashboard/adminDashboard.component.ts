import { AdminService } from 'src/libs/admin.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/libs/products.service';
@Component({
  selector: 'app-adminDashboard',
  templateUrl: './adminDashboard.component.html',
  styleUrls: ['./adminDashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  imgSrc:string='../../../assets/img01.webp'
  constructor(
    public products: ProductsService,
    private adminService: AdminService
    ) {}

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.adminService.getProduct().subscribe({
      next: (response: any) => {
        console.log('admin side res', response);
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

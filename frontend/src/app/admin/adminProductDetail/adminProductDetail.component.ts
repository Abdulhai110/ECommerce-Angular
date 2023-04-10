import { AdminService } from './../../../libs/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../libs/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/libs/productInterface';

@Component({
  selector: 'app-adminProductDetail',
  templateUrl: './adminProductDetail.component.html',
  styleUrls: ['./adminProductDetail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  id!: any
  index: number =0;
  reviews:any = []
  imgSrc: any = '../../assets/profile-user.png';
  obj: ProductInterface={
    id: 0,
    name: '',
    price: 0,
    brand: '',
    description: '',
    ratings: 0,
    categoryId: 0,
    Category: '',
    ProductPhotos: [],
    quantity: 0
  }
  constructor(
    private navgate:Router,
    private product: ProductsService,
    private router: ActivatedRoute,
    private adminService: AdminService,
  ) { }

  ngOnInit() {
    this.specificProduct();
  }

  specificProduct() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.adminService.getSpecificProduct(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.obj = res.data;
        this.reviews = res.data.ProductReviews
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  deleteProduct(id:number){
    console.log(id);

    this.adminService.deleteProduct(id).subscribe({
      next:(response:any)=>{
        console.log('res',response);
        this.navgate.navigate(['/admin'])

      },
      error:(err:any)=>{console.log('err',err);
      },
      complete:()=>{}
    })
  }
  image(index:number){
    this.index = index
  }
}

import { AdminService } from 'src/libs/admin.service';
import { ShoppingCartService } from './../../libs/shoppingCart.service';
import { AuthService } from './../../libs/auth.service';
import { ProductInterface } from 'src/libs/productInterface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/libs/toaster.service';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id!: any;
  index:number=0
  reviews:any = []
  imgSrc: any = '../../assets/profile-user.png';
  obj: ProductInterface = {
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
  };
  constructor(
    private navgate: Router,
    private router: ActivatedRoute,
    private toaster: ToasterService,
    private authService: AuthService,
    private adminService: AdminService,
    private cartService: ShoppingCartService,
  ) {}

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
        console.log(this.reviews);

      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  showToast(msg:string){
    this.toaster.showToast(msg, true)
  }

  addToCart(product: ProductInterface) {

    const cartJSON = localStorage.getItem('cart');
    if (cartJSON)
    {
      let areadyExisted:boolean = false
      let cart = JSON.parse(cartJSON);

      cart.forEach((item:any) => {
        if(item.id == product.id){
          areadyExisted = true
        } });

        if (areadyExisted) {
          this.showToast("Already Added")
        }
        else {
          product.quantity = 1
          cart.push(product);
          const updatedCart = JSON.stringify(cart);
          localStorage.setItem('cart', updatedCart);
          this.showToast(`Product "${product.name}" Added`)
        }


    }

    else if (!cartJSON) {
      let cart: Array<ProductInterface> = [];
      product.quantity = 1
      cart.push(product);
      const cartJSON = JSON.stringify(cart);
      localStorage.setItem('cart', cartJSON);
      this.showToast(`Product "${product.name}" Added`)

    }

  }

  checkLoggedIn(product: ProductInterface) {
    this.authService.isLoggedIn().subscribe({
      next: (res: any) => {
        console.log('ISLogin', res);
        if (res.success) {
          console.log('response Side');
          this.addToCart(product);
        } else {
          this.navgate.navigate(['/user']);
        }
      },
      error: (err: any) => {
        console.log('err', err);
      },
      complete: () => {},
    });
    console.log('outside');
  }
  image(index:number){
    this.index = index
  }
  // checkLoggedIn(){
  //   this.authService.isLoggedIn().subscribe({
  //     next:(res:any)=>{
  //       console.log('ISLogin',res);
  //       if(res.success){
  //         this.navgate.navigate(['/user/cart'])
  //         return true
  //       }
  //       else{
  //         this.navgate.navigate(['/user'])
  //         return false
  //       }
  //     },
  //     error:(err:any)=>{console.log('err',err);
  //     },
  //     complete:()=>{},
  //   })
  // }
}

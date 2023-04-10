import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/libs/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  checkoutForm!: FormGroup
  detailForm:boolean=false

  totalItems:number =0
  cartItems:any =[];
  sum:any
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit() {
    let forParse = localStorage.getItem('cart')
    if(forParse){
      this.cartItems = JSON.parse(forParse)
      console.log(this.cartItems);
    }

    this.checkoutForm = new FormGroup({
      address: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      postalCode: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      zipcode: new FormControl('',Validators.required),
    })

    this.sum=this.getSubtotal;
  }


  increaseQuantity(i:number) {
    console.log(i);

    this.cartItems[i].quantity++
    this.sum= this.getSubtotal
  }
  decreaseQuantity(i:number) {
    console.log(i);
    this.cartItems[i].quantity--
    this.sum = this.getSubtotal
    }
  get getSubtotal(){
    let subtotal:number =0
    this.cartItems.forEach((item:any)=>{
      subtotal +=  (item.price * item.quantity);
      this.totalItems++
    })

    return subtotal

  }

  removeProduct(i:number){
    this.cartItems.splice(i,1)
    let updatedCart = JSON.stringify(this.cartItems)
    localStorage.setItem('cart',updatedCart)
    this.sum=this.getSubtotal
  }

  checkout(){
    let items:any=[]
    this.cartItems.forEach((item:any)=>{
      let temp={
        product_id: item.id,
        pname: item.name,
        quantity:item.quantity,
        price: item.price,
        total:(item.price*item.quantity)
      }
      items.push(temp)
    })
    console.log(this.checkoutForm);
    const obj={
      address:this.checkoutForm.get('address')?.value,
      city:this.checkoutForm.get('city')?.value,
      country:this.checkoutForm.get('country')?.value,
      state:this.checkoutForm.get('state')?.value,
      postalCode:this.checkoutForm.get('postalCode')?.value,
      zipcode:this.checkoutForm.get('zipcode')?.value,
      total: this.sum,
      totalItems: this.totalItems,
      orderItems: items
    }
    console.log(obj);
    this.adminService.checkout(obj).subscribe({
      next:(res:any)=>{
        console.log('checkout res',res);
        localStorage.removeItem('cart')
        window.location.href = res.data
      },
      error:(err:any)=>{console.log(err)},
      complete:()=>{}
    })
  }

  proceedCheckout(){
    this.detailForm = !this.detailForm
  }




}

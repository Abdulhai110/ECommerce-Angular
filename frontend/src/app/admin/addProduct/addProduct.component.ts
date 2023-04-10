import { AdminService } from 'src/libs/admin.service';
import { ProductCategoryService } from './../../../libs/productCategory.service';
import { productCategory } from './../../../libs/productInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  imgSrc: any = '../../../assets/select.png';
  list: any =[];
  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      photos: new FormControl([]),
    });

    this.categoryList()
  }
  imageHandler(event: any) {
    const files = (event.target as HTMLInputElement).files;
    console.log(files);

  if (files && files.length) {
    this.addProductForm.get('photos')?.patchValue(files);
  }
    // console.log(event.target.files);
    // const files = event.target.files;
    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   formData.append('image', files[i], files[i].name);
    // }
    // this.addProductForm.patchValue({
    //   photos: formData.getAll('image'),
    // });
    // this.addProductForm.controls['photos'].patchValue(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imgSrc = reader.result);
      reader.readAsDataURL(file);
      console.log('Images', this.addProductForm.get('photos')?.value);
    }
  }

  categoryList(){
    this.adminService.categoryList().subscribe({
      next: (response:any)=>{
        // console.log(response);
        this.list = response.data

      },
      error: (error:any)=>{},
      complete: ()=>{}
    })
  }
  addProduct() {
    const images = this.addProductForm.get('photos')?.value;
    const formData = new FormData();
    formData.append('name', this.addProductForm.get('name')?.value);
    formData.append('price', this.addProductForm.get('price')?.value);
    formData.append('description',this.addProductForm.get('description')?.value);
    formData.append('categoryId', this.addProductForm.get('categoryId')?.value);
    formData.append('brand', this.addProductForm.get('brand')?.value);
    for (let i = 0; i < images.length; i++) {
      formData.append('photos', images[i]);

    }
    this.adminService.addProduct(formData).subscribe({
      next: (response: any) => {
        console.log('res', response);
        this.router.navigate(['/admin'])
      },
      error: (err: any) => {
        console.log('err', err);
      },
      complete: () => {},
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/libs/admin.service';
import { ProductCategoryService } from 'src/libs/productCategory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  addCategory!: FormGroup;
  list!:any
  addCatDiv:boolean = false
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private categories: ProductCategoryService
  ) { }

  ngOnInit() {
    this.addCategory = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
    this.categoryList()

  }
  addCatDivFun(){
    this.addCatDiv = !this.addCatDiv
  }

  addCat() {
    let obj={
      name: this.addCategory.get('name')?.value
    }
    this.adminService.addCategory(obj).subscribe({
      next: (response:any)=>{
        console.log(response);
        this.categoryList()
        this.addCatDivFun()
      },
      error: (error:any)=>{},
      complete: ()=>{}
    })
  }

  categoryList(){
    this.adminService.categoryList().subscribe({
      next: (response:any)=>{
        // console.log(response);
        this.list = response.data
        this.categories.productCategories = response.data
        console.log('Service',this.categories.productCategories);

      },
      error: (error:any)=>{},
      complete: ()=>{}
    })
  }

   deleteCategory(id:any){
    this.adminService.deleteCategory(id).subscribe({
      next: (response:any)=>{
        console.log('response',response);
        this.categoryList()
        // this.list = response.data
      },
      error: (error:any)=>{ console.log('error',error); },
      complete: ()=>{}
    })

  }

}

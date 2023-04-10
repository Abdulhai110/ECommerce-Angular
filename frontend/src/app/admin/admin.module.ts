import { AdminProductDetailComponent } from './adminProductDetail/adminProductDetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminHeaderComponent } from './adminHeader/adminHeader.component';
import { AddProductComponent } from './addProduct/addProduct.component';
import { AdminDashboardComponent } from './adminDashboard/adminDashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoryService } from 'src/libs/productCategory.service';
import { RegisteredUsersComponent } from './registeredUsers/registeredUsers.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddProductComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    RegisteredUsersComponent,
    AdminProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RatingModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ProductCategoryService]
})
export class AdminModule { }

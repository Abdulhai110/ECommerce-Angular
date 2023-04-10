import { CategoriesComponent } from './categories/categories.component';
import { AddProductComponent } from './addProduct/addProduct.component';
import { AdminDashboardComponent } from './adminDashboard/adminDashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductDetailComponent } from './adminProductDetail/adminProductDetail.component';
import { RegisteredUsersComponent } from './registeredUsers/registeredUsers.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent},
  {path:'product', component:AddProductComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'adminProductDetail/:id', component:AdminProductDetailComponent},
  {path:'registeredUsers', component:RegisteredUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

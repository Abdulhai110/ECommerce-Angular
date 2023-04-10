import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './auth/notFound/notFound.component';
import { AuthGuard } from 'src/libs/auth.guard';
import { AboutUsComponent } from './aboutUs/aboutUs.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'productDetail/:id',component:ProductDetailComponent },
  {
    path:"user",
    loadChildren:()=>import('./auth/auth.module')
    .then(mod => mod.AuthModule)
  },
  {
    path:"admin",
    canActivate:[AuthGuard],
    loadChildren:()=>import('./admin/admin.module')
    .then(mod => mod.AdminModule)
  },
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
